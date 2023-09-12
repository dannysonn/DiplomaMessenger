import React from "react";
import styles from "./ChatMessages.css";
import Message from "../Message/Message";

function ChatMessages() {
  return (
    <div className={styles["Chat-messages"]}>
      <Message
        src="https://placehold.co/50x50"
        text="Hello. Mrs. Lilly, i have a good idea how to create a music with help of our team. Can we meet up tomorrow near the bar to talk?"
        modifierCss="Message--incoming"
      />
      <Message
        src="https://placehold.co/50x50"
        text="Hi, Mrs. Lilly"
        modifierCss="Message--sent"
      />
    </div>
  );
}

export default ChatMessages;
