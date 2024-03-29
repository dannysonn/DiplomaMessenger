import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "./ChatHeader.css";
import Button from "../Button/Button";
import { CustomModal } from "../CustomModal/CustomModal";
import {
  addUserToChat,
  getChatUsersList,
  IChatState,
} from "../../redux/slices/chatsSlice";
import { useAppDispatch } from "../../redux/hooks";
import { UsersList } from "../UsersList/UsersList";
import { IPersonState } from "../../redux/slices/userSlice";

interface ChatHeaderProps {
  chatHeaderTitle: string;
  chatId: number | null;
}

function ChatHeader({ chatHeaderTitle, chatId }: ChatHeaderProps) {
  const [isAddUserModalOpen, setAddUserModalOpen] = useState(false);
  const [userId, setUserId] = useState<string>("");
  const dispatch = useAppDispatch();
  const [shouldShowSuccessAlert, setShouldShowSuccessAlert] = useState(false);
  const [shouldShowErrorAlert, setShouldShowErrorAlert] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const usersInChat = useSelector(
    (state: IChatState) => state.chatsState.usersInChat,
  );
  const [isUsersListOpen, setIsUsersListOpen] = useState(false);
  const personId: number | null = useSelector(
    (state: IPersonState) => state.person.user.id,
  );

  return (
    <header className={styles["Chat-header"]}>
      <div className={styles["Chat-header__info"]}>
        <div className={styles["Chat-header__main"]}>
          <h2 className={styles["Chat-header__title"]}>{chatHeaderTitle}</h2>
          {usersInChat.length > 0 ? (
            <button
              type="button"
              className={styles["Chat-header__users"]}
              onClick={() => setIsUsersListOpen(true)}
            >
              Пользователей в чате: {usersInChat.length}
            </button>
          ) : (
            ""
          )}
        </div>
        <CustomModal
          isOpen={isUsersListOpen}
          handleClose={() => setIsUsersListOpen(false)}
        >
          <>
            <h2 style={{ margin: 0 }}>Список пользователей</h2>
            <UsersList usersList={usersInChat} selectedChatId={chatId} />
          </>
        </CustomModal>
      </div>
      <div className={styles["Chat-header__controls"]}>
        <button
          type="button"
          className={styles["Chat-header__add-user"]}
          onClick={() => setAddUserModalOpen(true)}
        >
          Добавить пользователя
        </button>
        <CustomModal
          isOpen={isAddUserModalOpen}
          handleClose={() => setAddUserModalOpen(false)}
        >
          <div>
            <h2 id="unstyled-modal-title" className="modal-title">
              Введите id пользователя
            </h2>
            <form
              className={styles["Modal-add-user__form"]}
              onSubmit={(event) => {
                event.preventDefault();

                if (String(personId) === userId) {
                  setShouldShowErrorAlert(true);
                  setTimeout(() => {
                    setShouldShowErrorAlert(false);
                  }, 3000);
                } else {
                  setIsFetching(true);
                  dispatch(addUserToChat({ userId, chatId }))
                    .unwrap()
                    .then(() => {
                      setShouldShowSuccessAlert(true);
                      setTimeout(() => {
                        setShouldShowSuccessAlert(false);
                      }, 3000);
                      setAddUserModalOpen(false);
                      dispatch(getChatUsersList(Number(chatId)));
                    })
                    .catch(() => {
                      setShouldShowErrorAlert(true);
                      setTimeout(() => {
                        setShouldShowErrorAlert(false);
                      }, 3000);
                    })
                    .finally(() => setIsFetching(false));
                }
              }}
            >
              <input
                id="unstyled-modal-description"
                type="number"
                placeholder="id пользователя"
                value={userId}
                onChange={(event) => setUserId(event.currentTarget.value)}
              />
              {isFetching ? (
                <CircularProgress size={36} />
              ) : (
                <Button type="submit" text="Добавить пользователя" />
              )}
            </form>
          </div>
        </CustomModal>
      </div>
      {shouldShowSuccessAlert ? (
        <Alert
          style={{ position: "fixed", bottom: 20, right: 20, zIndex: 10000000 }}
          severity="success"
        >
          Пользователь был добавлен
        </Alert>
      ) : (
        ""
      )}
      {shouldShowErrorAlert ? (
        <Alert
          style={{ position: "fixed", bottom: 20, right: 20, zIndex: 10000000 }}
          severity="error"
        >
          Пользователь есть в чате или это Вы
        </Alert>
      ) : (
        ""
      )}
    </header>
  );
}

export default ChatHeader;
