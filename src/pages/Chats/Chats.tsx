import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { TimeoutId } from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";
import Alert from "@mui/material/Alert";
import styles from "./Chats.css";
import globalStyles from "../../../App.css";
import Chat from "../../components/Chat/Chat";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import ChatMessages from "../../components/ChatMessages/ChatMessages";
import ChatFooter from "../../components/ChatFooter/ChatFooter";
import { useAppDispatch } from "../../redux/hooks";
import { IPersonState, logout } from "../../redux/slices/userSlice";
import {
  ChatType,
  createChat,
  getChats,
  getChatToken,
  getChatUsersList,
  IChatState,
  updateLastMessage,
} from "../../redux/slices/chatsSlice";
import { CustomModal } from "../../components/CustomModal/CustomModal";
import Button from "../../components/Button/Button";

function Chats() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useSelector((state: IPersonState) => state.person.isAuth);
  const userId = useSelector((state: IPersonState) => state.person.user.id);
  const chats = useSelector((state: IChatState) => state.chatsState.chats);
  const [isChatSelected, setIsChatSelected] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);
  const [isOpen, setOpen] = React.useState(false);
  const [filter, setFilter] = useState("");
  const [chatHeaderTitle, setChatHeaderTitle] = useState("");
  const [chatHeaderImg, setChatHeaderImg] = useState<string | null>(null);
  const [currentSocket, setCurrentSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [shouldShowSuccessAlert, setShouldShowSuccessAlert] = useState(false);
  const [shouldShowErrorAlert, setShouldShowErrorAlert] = useState(false);
  const [newChatName, setNewChatName] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    let timeoutId: TimeoutId;

    const fetchData = async () => {
      if (!isAuth) {
        navigate("/");
        return;
      }

      const fetchChats = async () => {
        try {
          await dispatch(getChats());
        } catch (error) {
          console.error("Error fetching chats", error);
        }

        // timeoutId = setTimeout(fetchChats, 3000);
      };

      fetchChats();
    };

    fetchData();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, isAuth, navigate]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  const onSubmit = () => {
    setIsFetching(true);
    dispatch(createChat({ title: newChatName }))
      .unwrap()
      .then(() => {
        dispatch(getChats())
          .unwrap()
          .finally(() => {
            setIsFetching(false);
          });
      });
  };

  let filteredChats = chats;

  if (filter !== "") {
    filteredChats = chats.filter((chat) => {
      return chat.title.toLowerCase().includes(filter.toLowerCase());
    });
  }

  const openSocketConnection = (chatId: number, token: string) => {
    if (currentSocket) {
      currentSocket.close();
    }

    const socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`,
    );

    socket.addEventListener("open", () => {
      console.log("Соединение установлено");

      socket.send(
        JSON.stringify({
          content: "0",
          type: "get old",
        }),
      );
    });

    setInterval(() => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(
          JSON.stringify({
            type: "ping",
          }),
        );
      }
    }, 2000);

    socket.addEventListener("close", (event) => {
      if (event.wasClean) {
        console.log("Соединение закрыто чисто");
      } else {
        console.log("Обрыв соединения");
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    socket.addEventListener("message", (event) => {
      console.log("Получены данные", JSON.parse(event.data));
      const messageData = JSON.parse(event.data);
      const messageContent = JSON.parse(event.data).content;

      if (
        JSON.parse(event.data).type !== "pong" &&
        JSON.parse(event.data).type !== "user connected"
      ) {
        let sortedMessageData = messageData;

        if (Array.isArray(sortedMessageData)) {
          sortedMessageData = messageData.sort((a: any, b: any) => b.id - a.id);

          setMessages((currentMessages) => [
            ...currentMessages,
            ...sortedMessageData,
          ]);
        } else {
          setMessages((currentMessages) => [
            ...currentMessages,
            sortedMessageData,
          ]);
        }

        if (messageContent) {
          dispatch(updateLastMessage({ chatId, messageContent }));
        }
      }
    });

    socket.addEventListener("error", (event) => {
      if (event instanceof ErrorEvent) {
        console.log("Ошибка", event.message);
      }
    });

    return socket;
  };

  const getChatLastContent = (chat: ChatType) => {
    if (chat.last_message) {
      return chat.last_message.content;
    }
    return "Нет сообщений";
  };

  return (
    <main className={styles.Chats}>
      <div className={globalStyles.Container}>
        <aside className={styles.Chats__sidebar}>
          <header className={styles["Chats-sidebar__header"]}>
            <h2 className={styles["Chats-sidebar__title"]}>Список чатов</h2>
            <button
              className={styles["Chats-sidebar__add-chat"]}
              type="submit"
              onClick={handleOpen}
            />
            <CustomModal handleClose={handleClose} isOpen={isOpen}>
              <div>
                <h2 id="unstyled-modal-title" className="modal-title">
                  Введите название чата
                </h2>
                <form
                  className={styles["Modal-add-chat__form"]}
                  onSubmit={(event) => {
                    event.preventDefault();
                    setOpen(false);
                    setNewChatName("");
                    onSubmit();
                  }}
                >
                  <input
                    id="unstyled-modal-description"
                    type="text"
                    className={styles["Modal-unstyled__input"]}
                    placeholder="название чата"
                    value={newChatName}
                    onChange={(event) =>
                      setNewChatName(event.currentTarget.value)
                    }
                  />
                  <Button type="submit" text="Создать чат" />
                </form>
              </div>
            </CustomModal>
          </header>
          <h4 style={{ margin: 0 }}>Ваш id: {userId}</h4>
          <div className="Chats-sidebar__search">
            <div className={styles["Chats-sidebar__search-input-container"]}>
              <input
                type="text"
                id="search-input"
                placeholder="Поиск чата"
                className={styles["Chats-sidebar__search-input"]}
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
          </div>

          <div className={styles["Chats-sidebar__wrapper"]}>
            {isFetching ? (
              <CircularProgress
                className={styles["Chats-sidebar__loader"]}
                size={40}
              />
            ) : !chats.length ? (
              <p className={styles["Chats-sidebar__empty"]}>
                Список чатов пуст, вы можете создать новый чат, нажав на кнопку
                выше
              </p>
            ) : (
              filteredChats.map((chat) => {
                return (
                  <Chat
                    clickHandler={() => {
                      setMessages([]);
                      setSelectedChatId(chat.id);

                      dispatch(getChatUsersList(chat.id));
                      dispatch(getChatToken(chat.id))
                        .unwrap()
                        .then((res) => res)
                        .then((res) => {
                          setCurrentSocket(
                            openSocketConnection(chat.id, res.token),
                          );
                        });

                      setIsChatSelected(true);
                      setChatHeaderTitle(chat.title);
                      setChatHeaderImg(chat.avatar);
                    }}
                    key={chat.title + chat.id}
                    content={getChatLastContent(chat)}
                    title={chat.title}
                    isChatSelected={chat.id === selectedChatId}
                    unreadCount={chat.unread_count}
                    chatId={chat.id}
                    setShouldShowSuccessAlert={setShouldShowSuccessAlert}
                    setShouldShowErrorAlert={setShouldShowErrorAlert}
                  />
                );
              })
            )}
          </div>

          {shouldShowSuccessAlert ? (
            <Alert
              style={{
                position: "fixed",
                bottom: 20,
                right: 20,
                zIndex: 10000000,
              }}
              severity="success"
            >
              Чат был успешно удалён
            </Alert>
          ) : (
            ""
          )}
          {shouldShowErrorAlert ? (
            <Alert
              style={{
                position: "fixed",
                bottom: 20,
                right: 20,
                zIndex: 10000000,
              }}
              severity="error"
            >
              Вы не можете удалить чат, созданный не Вами
            </Alert>
          ) : (
            ""
          )}

          <footer className={styles["Chats-sidebar__footer"]}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label,jsx-a11y/anchor-has-content */}
            <Link
              to="/profile"
              className={styles["Chats-sidebar__profile-link"]}
            />
            <button
              className={styles["Chats-sidebar__logout"]}
              type="submit"
              onClick={handleLogout}
            />
          </footer>
        </aside>
        <div className={styles["Chat-content"]}>
          {!isChatSelected ? (
            <p className={styles["Chat-content__empty"]}>
              Выберите чат из списка слева
            </p>
          ) : (
            <div className={styles["Chat-content__container"]}>
              <ChatHeader
                chatId={selectedChatId}
                chatHeaderTitle={chatHeaderTitle}
                chatHeaderImg={chatHeaderImg}
              />
              <ChatMessages messages={messages} userId={userId} />
              <ChatFooter socket={currentSocket} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Chats;
