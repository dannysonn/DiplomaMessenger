import React from "react";
import styles from "./Message.css";

interface MessageProps {
  src: string;
  text: string;
  modifierCss: string;
}

function Message({ src, text, modifierCss }: MessageProps) {
  return (
    <div className={`${styles.Message} ${styles[modifierCss]}`}>
      <img src={src} alt="avatar" className={styles.Message__avatar} />
      <p className={styles.Message__text}>{text}</p>
    </div>
  );
}

export default Message;
