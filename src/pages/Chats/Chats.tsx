import React from "react";
import styles from "./Chats.css";
import Input from "../../components/Input/Input";
import Chat from "../../components/Chat/Chat";

function Chats() {
  return (
    <main className={styles.Chats}>
      <div className={styles.Chats__container}>
        <aside className={styles.Chats__sidebar}>
          <header className={styles.Chats_sidebar__header}>
            <h2 className={styles.Chats_sidebar__title}>Chats</h2>
            <form action="">
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                className={styles.Chats_sidebar__add_user}
                type="submit"
              />
            </form>
          </header>
          <form action="" className="Chats-sidebar__search">
            <Input
              inputClass={styles.Chats_sidebar__search_input}
              type="text"
              id="search-input"
              placeholder="Search chat"
            />
          </form>
          <div className={styles.Chats_sidebar__wrapper}>
            <Chat />
            <Chat />
          </div>

          <footer className="Chats-sidebar__footer">
            <a href="/profile" className="Chats-sidebar__profile-link">
              <img src="" alt="" />
            </a>
            <form action="">
              <button className="Chats-sidebar__logout" type="submit">
                Logout
              </button>
            </form>
          </footer>
        </aside>
      </div>
    </main>
  );
}

export default Chats;
