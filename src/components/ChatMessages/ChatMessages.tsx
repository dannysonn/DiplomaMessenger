import React, { useEffect, useRef } from "react";
import styles from "./ChatMessages.css";
import Message from "../Message/Message";

interface ChatMessagesProps {
  messages: any;
  userId: number | null;
}

export interface IMessage {
  content: string;
  type: string;
  time: string;
  user_id: number;
  id: number;
  file: {
    path: string;
    content_type: string;
  };
}

function ChatMessages({ messages, userId }: ChatMessagesProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles["Chat-messages"]}>
      {messages.map((message: IMessage) => {
        if (message.user_id === userId) {
          return (
            <Message
              content_type={message.file ? message.file.content_type : ""}
              sendById={message.user_id}
              key={message.id}
              isFile={message.type === "file"}
              filePath={
                message.file
                  ? `https://ya-praktikum.tech/api/v2/resources${message.file.path}`
                  : ""
              }
              text={message.content}
              modifierCss="Message--sent"
            />
          );
        }
        return (
          <Message
            content_type={message.file ? message.file.content_type : ""}
            isFile={message.type === "file"}
            filePath={
              message.file
                ? `https://ya-praktikum.tech/api/v2/resources${message.file.path}`
                : ""
            }
            sendById={message.user_id}
            key={message.id}
            text={message.content}
            modifierCss="Message--incoming"
          />
        );
      })}
      <div ref={scrollRef} />
    </div>
  );
}

export default ChatMessages;
