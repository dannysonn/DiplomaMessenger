import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import {
  IChatState,
  removeUserFromChat,
  UserInChat,
} from "../../redux/slices/chatsSlice";
import styles from "./UsersList.css";
import { IPersonState } from "../../redux/slices/userSlice";
import { useAppDispatch } from "../../redux/hooks";

interface UsersListProps {
  usersList: UserInChat[];
  selectedChatId: number | null;
}

export function UsersList({ usersList, selectedChatId }: UsersListProps) {
  const currentUserId = useSelector(
    (state: IPersonState) => state.person.user.id,
  );
  const chats = useSelector((state: IChatState) => state.chatsState.chats);
  const dispatch = useAppDispatch();

  const chatOwnerId = chats.filter((chat) => chat.id === selectedChatId)[0]
    .created_by;

  return (
    <div className={styles["Users-list"]}>
      {usersList.map((user: UserInChat) => {
        return (
          <div key={user.id} className={styles.User}>
            <b style={{ fontSize: "14px" }} className={styles["User-login"]}>
              {user.login}
            </b>
            {user.id !== currentUserId && user.id !== chatOwnerId ? (
              <IconButton
                style={{ padding: 0 }}
                onClick={() =>
                  dispatch(
                    removeUserFromChat({
                      userId: user.id,
                      chatId: selectedChatId,
                    }),
                  )
                }
              >
                <RemoveCircleOutlineIcon style={{ color: "red" }} />
              </IconButton>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}
