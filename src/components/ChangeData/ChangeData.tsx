import React, { MouseEventHandler } from "react";
import styles from "../../pages/Profile/Profile.css";
import Input from "../Input/Input";

interface ChangeDataProps {
  handleSaveData: MouseEventHandler<HTMLButtonElement>;
}

function ChangeData({ handleSaveData }: ChangeDataProps) {
  return (
    <>
      <div className={styles["Profile-input__wrapper"]}>
        Email
        <Input
          inputClass={styles.Profile__input}
          type="email"
          placeholder="programmer2000@yandex.ru"
          readonly
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
      <button type="button" onClick={handleSaveData}>
        Save
      </button>
    </>
  );
}

export default ChangeData;
