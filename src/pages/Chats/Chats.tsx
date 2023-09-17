import React from "react";
import styles from "./Chats.css";
import Input from "../../components/Input/Input";
import Chat from "../../components/Chat/Chat";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import ChatMessages from "../../components/ChatMessages/ChatMessages";
import ChatFooter from "../../components/ChatFooter/ChatFooter";

function Chats() {
  return (
    <main className={styles.Chats}>
      <div className={styles.Chats__container}>
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
              <Input
                inputClass={styles["Chats-sidebar__search-input"]}
                type="text"
                id="search-input"
                placeholder="Search chat"
              />
            </div>
          </form>
          <div className={styles["Chats-sidebar__wrapper"]}>
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
            <Chat />
          </div>

          <footer className={styles["Chats-sidebar__footer"]}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label,jsx-a11y/anchor-has-content */}
            <a
              href="/profile"
              className={styles["Chats-sidebar__profile-link"]}
            />
            <button className={styles["Chats-sidebar__logout"]} type="submit" />
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
