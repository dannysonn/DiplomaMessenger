import React, { useState } from "react";
import styles from "./ChatFooter.css";
import Button from "../Button/Button";

interface ChatFooterProps {
  socket: WebSocket | null;
}

function ChatFooter({ socket }: ChatFooterProps) {
  const [messageValue, setMessageValue] = useState("");

  return (
    <footer className={styles["Chat-footer"]}>
      <button type="submit" className={styles["Chat-footer__load-image"]} />
      <form
        style={{ width: "100%", display: "flex" }}
        onSubmit={(event) => {
          event.preventDefault();
          socket?.send(
            JSON.stringify({
              content: messageValue,
              type: "message",
            }),
          );
          setMessageValue("");
        }}
      >
        <input
          value={messageValue}
          onChange={(event) => setMessageValue(event.currentTarget.value)}
          type="text"
          placeholder="Message"
          className={styles["Chat-footer__input"]}
        />
        <Button
          type="submit"
          additionalClass={styles["Chat-footer__send-message"]}
        />
      </form>
    </footer>
  );
}

export default ChatFooter;
