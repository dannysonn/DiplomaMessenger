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
              sendById={message.user_id}
              key={message.id}
              src="https://placehold.co/50x50"
              text={message.content}
              modifierCss="Message--sent"
            />
          );
        }
        return (
          <Message
            sendById={message.user_id}
            key={message.id}
            src="https://placehold.co/50x50"
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
