import React, { useRef, useState } from "react";
import { Input, IconButton } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import Button from "../Button/Button";
import styles from "./ChatFooter.css";
import { useAppDispatch } from "../../redux/hooks";
import { sendFileToServer } from "../../redux/slices/chatsSlice";

interface ChatFooterProps {
  socket: WebSocket | null;
}

function ChatFooter({ socket }: ChatFooterProps) {
  const [messageValue, setMessageValue] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.currentTarget.files?.[0];
    setFile(selectedFile || null);
  };

  const handleIconButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (messageValue.trim() !== "" || file) {
      if (file) {
        const formData = new FormData();
        formData.append("resource", file);

        dispatch(sendFileToServer(formData))
          .unwrap()
          .then((res) => {
            alert(res.id);
            alert("Файл успешно отправлен");
            socket?.send(
              JSON.stringify({
                content: "string",
                type: "file",
              }),
            );
            setFile(null);
          });
      }

      if (messageValue.trim() !== "") {
        // Отправка текстового сообщения
        socket?.send(
          JSON.stringify({
            content: messageValue,
            type: "message",
          }),
        );
        setMessageValue("");
      }
    } else {
      alert("Введите сообщение или выберите файл");
    }
  };

  return (
    <footer className={styles.ChatFooter} style={{ padding: 15 }}>
      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <IconButton
          type="button"
          color="primary"
          onClick={handleIconButtonClick}
        >
          <CloudUpload />
        </IconButton>
        <input
          value={messageValue}
          onChange={(event) => setMessageValue(event.currentTarget.value)}
          type="text"
          placeholder="Message"
          className={styles["Chat-footer__input"]}
        />
        <label htmlFor="file-input" style={{ marginLeft: "8px" }}>
          <Input
            type="file"
            id="file-input"
            style={{ display: "none" }}
            onChange={handleFileChange}
            ref={fileInputRef}
          />
        </label>
        <Button
          type="submit"
          additionalClass={styles["Chat-footer__send-message"]}
        />
      </form>
    </footer>
  );
}

export default ChatFooter;
