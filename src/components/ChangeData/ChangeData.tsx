import React, { MouseEventHandler } from "react";
import styles from "./ChangeData.css";
import Input from "../Input/Input";

interface ChangeDataProps {
  handleSaveData: MouseEventHandler<HTMLButtonElement>;
}

function ChangeData({ handleSaveData }: ChangeDataProps) {
  return (
    <>
      <div className={styles["Change-data__items"]}>
        <div className={styles["Change-data__item"]}>
          Email
          <Input
            inputClass={styles["Change-data__input"]}
            type="email"
            placeholder="programmer2000@yandex.ru"
          />
        </div>
        <div className={styles["Change-data__item"]}>
          Login
          <Input
            inputClass={styles["Change-data__input"]}
            type="text"
            placeholder="programmer2000"
          />
        </div>
        <div className={styles["Change-data__item"]}>
          Name
          <Input
            inputClass={styles["Change-data__input"]}
            type="text"
            placeholder="Elon"
          />
        </div>
        <div className={styles["Change-data__item"]}>
          Surname
          <Input
            inputClass={styles["Change-data__input"]}
            type="text"
            placeholder="Musk"
          />
        </div>
        <div className={styles["Change-data__item"]}>
          Phone
          <Input
            inputClass={styles["Change-data__input"]}
            type="phone"
            placeholder="999-99-99"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={handleSaveData}
        className={styles["Change-data__btn"]}
      >
        Save
      </button>
    </>
  );
}

export default ChangeData;
