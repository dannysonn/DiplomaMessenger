import React from "react";
import { useSelector } from "react-redux";
import styles from "./Message.css";
import { IChatState, UserInChat } from "../../redux/slices/chatsSlice";

interface MessageProps {
  text: string;
  modifierCss: string;
  sendById: number;
  isFile: boolean;
  filePath: string;
  content_type: string;
}

function Message({
  text,
  modifierCss,
  sendById,
  isFile,
  filePath,
  content_type,
}: MessageProps) {
  const usersInChat = useSelector(
    (state: IChatState) => state.chatsState.usersInChat,
  );

  const currentUser = usersInChat.find(
    (user: UserInChat) => user.id === sendById,
  );

  const getMessageContent = () => {
    if (isFile) {
      if (content_type.includes("image")) {
        return (
          <a href={filePath} target="_blank" rel="noopener noreferrer">
            <img
              style={{ maxWidth: 150, maxHeight: 100 }}
              src={filePath}
              alt="file"
            />
          </a>
        );
      }
    }
    return <p className={styles.Message__text}>{text}</p>;
  };

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
        {getMessageContent()}
      </div>
    </div>
  );
}

export default Message;
