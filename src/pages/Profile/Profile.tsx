import React from "react";
import globalStyles from "../../App.css";
import styles from "./Profile.css";
import Input from "../../components/Input/Input";

function Profile() {
  return (
    <main className={globalStyles.Main}>
      <div className={globalStyles.Container}>
        <aside className={styles["Profile-sidebar"]}>
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
          <a className={styles["Profile__back-link"]} href="#" />
        </aside>
        <div className={styles["Profile-content"]}>
          <img className={styles["Profile-avatar"]} src="" alt="Avatar" />
          <div className={styles["Profile-input__wrapper"]}>
            Email
            <Input
              inputClass={styles.Profile__input}
              type="email"
              placeholder="programmer2000@yandex.ru"
            />
          </div>
          <div className={styles["Profile-input__wrapper"]}>
            Login
            <Input
              inputClass={styles.Profile__input}
              type="text"
              placeholder="programmer2000"
            />
          </div>
          <div className={styles["Profile-input__wrapper"]}>
            Name
            <Input
              inputClass={styles.Profile__input}
              type="text"
              placeholder="Elon"
            />
          </div>
          <div className={styles["Profile-input__wrapper"]}>
            Surname
            <Input
              inputClass={styles.Profile__input}
              type="text"
              placeholder="Musk"
            />
          </div>
          <div className={styles["Profile-input__wrapper"]}>
            Phone
            <Input
              inputClass={styles.Profile__input}
              type="phone"
              placeholder="999-99-99"
            />
          </div>

          <div className={styles.Profile__btns}>
            <button type="button" className={styles.Profile__btn}>
              Change data
            </button>
            <button type="button" className={styles.Profile__btn}>
              Change password
            </button>
            <button
              type="button"
              className={`${styles.Profile__btn} ${styles["Profile__btn--red"]}`}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
