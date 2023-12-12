import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Chats.css";
import globalStyles from "../../App.css";
import Chat from "../../components/Chat/Chat";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import ChatMessages from "../../components/ChatMessages/ChatMessages";
import ChatFooter from "../../components/ChatFooter/ChatFooter";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/slices/userSlice";
import { getChats } from "../../redux/slices/chatsSlice";

function Chats() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const chats = useSelector((state) => state.chats.chats);

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    } else {
      dispatch(getChats());
    }
  }, []);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  return (
    <main className={styles.Chats}>
      <div className={globalStyles.Container}>
        <aside className={styles.Chats__sidebar}>
          <header className={styles["Chats-sidebar__header"]}>
            <h2 className={styles["Chats-sidebar__title"]}>Chats</h2>
            <form action="">
              <button
                className={styles["Chats-sidebar__add-user"]}
                type="submit"
              />
            </form>
          </header>
          <form action="" className="Chats-sidebar__search">
            <div className={styles["Chats-sidebar__search-input-container"]}>
              <input
                type="text"
                id="search-input"
                placeholder="Search chat"
                className={styles["Chats-sidebar__search-input"]}
              />
            </div>
          </form>
          <div className={styles["Chats-sidebar__wrapper"]}>
            {chats.map((chat) => {
              return (
                <Chat content={chat.last_message.content} title={chat.title} />
              );
            })}
          </div>

          <footer className={styles["Chats-sidebar__footer"]}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label,jsx-a11y/anchor-has-content */}
            <Link
              to="/profile"
              className={styles["Chats-sidebar__profile-link"]}
            />
            <button
              className={styles["Chats-sidebar__logout"]}
              type="submit"
              onClick={handleLogout}
            />
          </footer>
        </aside>
        <div className={styles["Chat-content"]}>
          <ChatHeader />
          <ChatMessages />
          <ChatFooter />
        </div>
      </div>
    </main>
  );
}

export default Chats;
