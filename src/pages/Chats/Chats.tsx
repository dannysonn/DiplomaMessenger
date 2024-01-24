import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Chats.css";
import globalStyles from "../../App.css";
import Chat from "../../components/Chat/Chat";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import ChatMessages from "../../components/ChatMessages/ChatMessages";
import ChatFooter from "../../components/ChatFooter/ChatFooter";
import { useAppDispatch } from "../../redux/hooks";
import { IPersonState, logout } from "../../redux/slices/userSlice";
import {
  createChat,
  CreateChatData,
  getChats,
  IChatState,
} from "../../redux/slices/chatsSlice";
import { CustomModal } from "../../components/CustomModal/CustomModal";
import Button from "../../components/Button/Button";

function Chats() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useSelector((state: IPersonState) => state.person.isAuth);
  const userId = useSelector((state: IPersonState) => state.person.user.id);
  const chats = useSelector((state: IChatState) => state.chatsState.chats);
  const isFetching = useSelector(
    (state: IChatState) => state.chatsState.isFetching,
  );
  const isEmptyChats = useSelector(
    (state: IChatState) => state.chatsState.isEmptyChats,
  );
  const [isOpen, setOpen] = React.useState(false);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    } else {
      dispatch(getChats());
    }
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  const onSubmit: SubmitHandler<any> = (data: CreateChatData) => {
    dispatch(createChat(data))
      .unwrap()
      .then(() => {
        dispatch(getChats());
      });
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
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    id="unstyled-modal-description"
                    type="text"
                    className={styles["Modal-unstyled__input"]}
                    placeholder="название чата"
                    {...register("title")}
                  />
                  <Button type="submit" text="Создать чат" />
                </form>
              </div>
            </CustomModal>
          </header>
          <h4 style={{ margin: 0 }}>Ваш id: {userId}</h4>
          <form className="Chats-sidebar__search">
            <div className={styles["Chats-sidebar__search-input-container"]}>
              <input
                type="text"
                id="search-input"
                placeholder="Поиск чата"
                className={styles["Chats-sidebar__search-input"]}
              />
            </div>
          </form>

          {isEmptyChats ? (
            <p className={styles["Chats-sidebar__empty"]}>
              Список чатов пуст, вы можете создать новый чат, нажав на кнопку
              выше
            </p>
          ) : (
            ""
          )}

          <div className={styles["Chats-sidebar__wrapper"]}>
            {isFetching ? (
              <CircularProgress
                className={styles["Chats-sidebar__loader"]}
                size={40}
              />
            ) : (
              chats.map((chat: any) => {
                return (
                  <Chat
                    key={chat.title}
                    content={
                      chat.last_message ? chat.last_message : "Нет сообщений"
                    }
                    title={chat.title}
                  />
                );
              })
            )}
          </div>

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
          {isEmptyChats ? (
            <p className={styles["Chat-content__empty"]}>
              Выберите чат из списка слева
            </p>
          ) : (
            <div className={styles["Chat-content__container"]}>
              <ChatHeader />
              <ChatMessages />
              <ChatFooter />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Chats;
