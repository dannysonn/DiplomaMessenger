import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import styles from "./Chat.css";

interface ChatProps {
  content: string;
  title: string;
  clickHandler: () => void;
  unreadCount: number;
  isChatSelected: boolean;
}

function Chat({
  content,
  title,
  clickHandler,
  unreadCount,
  isChatSelected,
}: ChatProps) {
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
        src="../../assets/images/svg/woman-placeholder.svg"
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
        }}
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
}

export default Chat;
