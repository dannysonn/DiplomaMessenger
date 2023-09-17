import React from "react";
import styles from "./ChatFooter.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function ChatFooter() {
  return (
    <footer className={styles["Chat-footer"]}>
      <Button type="button" className={styles["Chat-footer__load-image"]} />
      <Input
        inputClass={styles["Chat-footer__input"]}
        type="text"
        placeholder="Message"
      />
      <Button type="button" className={styles["Chat-footer__send-message"]} />
    </footer>
  );
}

export default ChatFooter;
