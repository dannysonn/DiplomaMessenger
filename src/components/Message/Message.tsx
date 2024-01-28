import React from "react";
import { useSelector } from "react-redux";
import styles from "./Message.css";
import { IChatState, UserInChat } from "../../redux/slices/chatsSlice";

interface MessageProps {
  src: string;
  text: string;
  modifierCss: string;
  sendById: number;
}

function Message({ src, text, modifierCss, sendById }: MessageProps) {
  const usersInChat = useSelector(
    (state: IChatState) => state.chatsState.usersInChat,
  );

  const currentUser = usersInChat.find(
    (user: UserInChat) => user.id === sendById,
  );

  return (
    <div className={`${styles.Message} ${styles[modifierCss]}`}>
      <img src={src} alt="avatar" className={styles.Message__avatar} />
      <div className={styles.Message__main}>
        <h4 className={styles.Message__login}>{currentUser?.login}</h4>
        <p className={styles.Message__text}>{text}</p>
      </div>
    </div>
  );
}

export default Message;
