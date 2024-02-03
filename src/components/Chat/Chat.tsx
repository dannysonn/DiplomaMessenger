import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import styles from "./Chat.css";
import { useAppDispatch } from "../../redux/hooks";
import {
  deleteChat,
  rerenderChatsAfterDelete,
} from "../../redux/slices/chatsSlice";
import { DeleteChatData } from "../../API/ChatsApi/ChatsApi";

interface ChatProps {
  content: string;
  title: string;
  clickHandler: () => void;
  unreadCount: number;
  isChatSelected: boolean;
  chatId: number;
  setShouldShowSuccessAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setShouldShowErrorAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

function Chat({
  content,
  title,
  clickHandler,
  unreadCount,
  isChatSelected,
  chatId,
  setShouldShowSuccessAlert,
  setShouldShowErrorAlert,
}: ChatProps) {
  const dispatch = useAppDispatch();

  return (
    <div
      className={
        isChatSelected
          ? `${styles.Chat} ${styles.Chat_active}`
          : `${styles.Chat}`
      }
      onClick={() => clickHandler()}
    >
      <img
        src="./assets/images/svg/group.svg"
        alt="avatar"
        className={styles.Chat__avatar}
      />
      <div className={styles.Chat__info}>
        <h3 className={styles.Chat__title}>{title}</h3>
        <div className={styles["Chat-message__wrapper"]}>
          <p className={styles.Chat__message}>{content}</p>
          {unreadCount > 0 ? (
            <div className={styles["Chats__unread-count"]}>{unreadCount}</div>
          ) : (
            ""
          )}
        </div>
      </div>
      <IconButton
        aria-label="delete"
        size="small"
        style={{
          color: "red",
          width: "30px",
          height: "30px",
          position: "absolute",
          top: "5px",
          right: "25px",
          zIndex: "1000000000",
        }}
        onClick={(e) => {
          e.stopPropagation();
          const deleteChatData: DeleteChatData = {
            chatId,
          };

          dispatch(deleteChat(deleteChatData))
            .unwrap()
            .then(() => {
              setShouldShowErrorAlert(false);
              setShouldShowSuccessAlert(true);
              setTimeout(() => {
                setShouldShowSuccessAlert(false);
              }, 5000);
              dispatch(rerenderChatsAfterDelete({ chatId }));
            })
            .catch(() => {
              setShouldShowSuccessAlert(false);
              setShouldShowErrorAlert(true);
              setTimeout(() => {
                setShouldShowErrorAlert(false);
              }, 5000);
            });
        }}
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
}

export default Chat;
