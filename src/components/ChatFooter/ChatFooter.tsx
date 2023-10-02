import React from "react";
import styles from "./ChatFooter.css";
import Button from "../Button/Button";

function ChatFooter() {
  return (
    <footer className={styles["Chat-footer"]}>
      <Button type="button" className={styles["Chat-footer__load-image"]} />
        <input type="text" placeholder="Message" className={styles["Chat-footer__input"]}/>
      <Button type="button" className={styles["Chat-footer__send-message"]} />
    </footer>
  );
}

export default ChatFooter;
