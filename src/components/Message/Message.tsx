import React from "react";
import { useSelector } from "react-redux";
import styles from "./Message.css";
import { IChatState, UserInChat } from "../../redux/slices/chatsSlice";

interface MessageProps {
  text: string;
  modifierCss: string;
  sendById: number;
}

function Message({ text, modifierCss, sendById }: MessageProps) {
  const usersInChat = useSelector(
    (state: IChatState) => state.chatsState.usersInChat,
  );

  const currentUser = usersInChat.find(
    (user: UserInChat) => user.id === sendById,
  );

  return (
    <div className={`${styles.Message} ${styles[modifierCss]}`}>
      <img
        src={
          currentUser?.avatar
            ? `https://ya-praktikum.tech/api/v2/resources/${currentUser.avatar}`
            : "https://placehold.co/50x50"
        }
        alt="avatar"
        className={styles.Message__avatar}
      />
      <div className={styles.Message__main}>
        <h4 className={styles.Message__login}>{currentUser?.login}</h4>
        <p className={styles.Message__text}>{text}</p>
      </div>
    </div>
  );
}

export default Message;
