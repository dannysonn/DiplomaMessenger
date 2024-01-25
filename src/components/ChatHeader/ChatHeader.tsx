import React from "react";
import styles from "./ChatHeader.css";

interface ChatHeaderProps {
  chatHeaderTitle: string;
  chatHeaderImg: string | null;
}

function ChatHeader({ chatHeaderTitle, chatHeaderImg }: ChatHeaderProps) {
  return (
    <header className={styles["Chat-header"]}>
      <div className={styles["Chat-header__info"]}>
        <img
          src={chatHeaderImg || "assets/images/svg/default-chat-img.svg"}
          alt="Chat img"
          className={styles["Chat-header__avatar"]}
        />
        <h2 className={styles["Chat-header__title"]}>{chatHeaderTitle}</h2>
      </div>
      <div className={styles["Chat-header__controls"]}>
        <button type="button" className={styles["Chat-header__add-user"]} />
        <button type="button" className={styles["Chat-header__delete-user"]} />
      </div>
    </header>
  );
}

export default ChatHeader;
