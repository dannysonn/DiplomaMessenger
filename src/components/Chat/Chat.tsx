import React from "react";
import styles from "./Chat.css";

function Chat() {
  return (
    <div className={styles.Chat}>
      <img
        src="../../assets/images/svg/woman-placeholder.svg"
        alt="avatar"
        className={styles.Chat__avatar}
      />
      <div className={styles.Chat__info}>
        <h3 className={styles.Chat__title}>Chat one</h3>
        <p className={styles.Chat__message}>Good idea! i like this.</p>
      </div>
    </div>
  );
}

export default Chat;
