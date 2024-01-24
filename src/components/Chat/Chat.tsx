import React from "react";
import styles from "./Chat.css";

interface ChatProps {
  content: string;
  title: string;
  clickHandler: () => void;
}

function Chat({ content, title, clickHandler }: ChatProps) {
  return (
    <div className={styles.Chat} onClick={() => clickHandler()}>
      <img
        src="../../assets/images/svg/woman-placeholder.svg"
        alt="avatar"
        className={styles.Chat__avatar}
      />
      <div className={styles.Chat__info}>
        <h3 className={styles.Chat__title}>{title}</h3>
        <p className={styles.Chat__message}>{content}</p>
      </div>
    </div>
  );
}

export default Chat;
