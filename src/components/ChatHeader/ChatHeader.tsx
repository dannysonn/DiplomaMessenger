import React from "react";
import styles from "./ChatHeader.css";

function ChatHeader() {
  return (
    <header className={styles["Chat-header"]}>
      <div className={styles["Chat-header__info"]}>
        <img
          src="assets/images/svg/default-chat-img.svg"
          alt="Chat img"
          className={styles["Chat-header__avatar"]}
        />
        <h2 className={styles["Chat-header__title"]}>Chat name</h2>
      </div>
      <div className={styles["Chat-header__controls"]}>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button type="button" className={styles["Chat-header__add-user"]} />
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button type="button" className={styles["Chat-header__delete-user"]} />
      </div>
    </header>
  );
}

export default ChatHeader;
