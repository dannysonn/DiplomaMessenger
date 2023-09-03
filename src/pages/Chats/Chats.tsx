import React from "react";
import styles from "./Chats.css";
import Input from "../../components/Input/Input";

function Chats() {
  return (
    <main className={styles.Chats}>
      <div className={styles.Chats__container}>
        <aside className="Chats__sidebar">
          <header className="Chats-sidebar__header">
            <h2 className="Chats-sidebar__title">Chats</h2>
            <form action="" className="Chats-sidebar__add-chat">
              <button className="Chats-sidebar__btn" type="submit">
                add chat
              </button>
            </form>
          </header>
          <form action="" className="Chats-sidebar__search">
            <Input
              inputClass="Chats-sidebar__search-input"
              type="text"
              id="search-input"
              placeholder="Search chat"
            />
          </form>
          <div className="Chats-sidebar__wrapper">
            <div className="Chat">
              <img src="" alt="avatar" className="Chat__avatar" />
              <div className="Chat__info">
                <h3 className="Chat__title">Chat one</h3>
                <p className="Chat__messaage">Good idea! i like this.</p>
              </div>
            </div>
          </div>

          <footer className="Chats-sidebar__footer">
            <a className="Chats-sidebar__profile-link">
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
