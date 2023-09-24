import React from "react";
import Input from "../Input/Input";
import styles from "../ChangeableProfile/ChangeableProfile.css";

interface ChangeableDataItemsProps {
  isChangeableData: boolean;
  isChangeablePassword: boolean;
}

function ChangeableProfileItems({
  isChangeableData,
  isChangeablePassword,
}: ChangeableDataItemsProps) {
  if (isChangeableData) {
    return (
      <>
        <div className={styles["Changeable-profile__item"]}>
          Email
          <Input
            inputClass={styles["Changeable-profile__input"]}
            type="email"
            placeholder="programmer2000@yandex.ru"
          />
        </div>
        <div className={styles["Changeable-profile__item"]}>
          Login
          <Input
            inputClass={styles["Changeable-profile__input"]}
            type="text"
            placeholder="programmer2000"
          />
        </div>
        <div className={styles["Changeable-profile__item"]}>
          Name
          <Input
            inputClass={styles["Changeable-profile__input"]}
            type="text"
            placeholder="Elon"
          />
        </div>
        <div className={styles["Changeable-profile__item"]}>
          Surname
          <Input
            inputClass={styles["Changeable-profile__input"]}
            type="text"
            placeholder="Musk"
          />
        </div>
        <div className={styles["Changeable-profile__item"]}>
          Phone
          <Input
            inputClass={styles["Changeable-profile__input"]}
            type="phone"
            placeholder="999-99-99"
          />
        </div>
      </>
    );
  }
  if (isChangeablePassword) {
    return (
      <>
        <div className={styles["Changeable-profile__item"]}>
          Password
          <Input
            inputClass={styles["Changeable-profile__input"]}
            type="password"
            placeholder="********"
          />
        </div>
        <div className={styles["Changeable-profile__item"]}>
          Repeat password
          <Input
            inputClass={styles["Changeable-profile__input"]}
            type="password"
            placeholder="********"
          />
        </div>
      </>
    );
  }
}

export default ChangeableProfileItems;
