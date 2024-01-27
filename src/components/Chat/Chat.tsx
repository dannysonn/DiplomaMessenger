import React from "react";
import styles from "./Chat.css";

interface ChatProps {
  content: string;
  title: string;
  clickHandler: () => void;
  unreadCount: number;
}

function Chat({ content, title, clickHandler, unreadCount }: ChatProps) {
  return (
    <div className={styles.Chat} onClick={() => clickHandler()}>
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
    </div>
  );
}

export default Chat;
