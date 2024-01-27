import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { CircularProgress } from "@mui/material";
import styles from "./ChatHeader.css";
import Button from "../Button/Button";
import { CustomModal } from "../CustomModal/CustomModal";
import { addUserToChat } from "../../redux/slices/chatsSlice";
import { useAppDispatch } from "../../redux/hooks";

interface ChatHeaderProps {
  chatHeaderTitle: string;
  chatHeaderImg: string | null;
  chatId: number | null;
}

function ChatHeader({
  chatHeaderTitle,
  chatHeaderImg,
  chatId,
}: ChatHeaderProps) {
  const [isAddUserModalOpen, setAddUserModalOpen] = useState(false);
  const [userId, setUserId] = useState<string>("");
  const dispatch = useAppDispatch();
  const [shouldShowSuccessAlert, setShouldShowSuccessAlert] = useState(false);
  const [shouldShowErrorAlert, setShouldShowErrorAlert] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  return (
    <header className={styles["Chat-header"]}>
      <div className={styles["Chat-header__info"]}>
        <img
          src={chatHeaderImg || "../../assets/images/svg/woman-placeholder.svg"}
          alt="Chat img"
          className={styles["Chat-header__avatar"]}
        />
        <h2 className={styles["Chat-header__title"]}>{chatHeaderTitle}</h2>
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
                setIsFetching(true);
                dispatch(addUserToChat({ userId, chatId }))
                  .unwrap()
                  .then(() => {
                    setShouldShowSuccessAlert(true);
                    setTimeout(() => {
                      setShouldShowSuccessAlert(false);
                    }, 3000);
                    setAddUserModalOpen(false);
                  })
                  .catch(() => {
                    setShouldShowErrorAlert(true);
                    setTimeout(() => {
                      setShouldShowErrorAlert(false);
                    }, 3000);
                  })
                  .finally(() => setIsFetching(false));
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
          Пользователя с таким id не существует
        </Alert>
      ) : (
        ""
      )}
    </header>
  );
}

export default ChatHeader;
