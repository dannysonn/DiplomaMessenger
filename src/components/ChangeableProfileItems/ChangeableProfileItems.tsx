import React from "react";
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
            <input type="email" className={styles["Changeable-profile__input"]} placeholder="programmer2000@yandex.ru"/>
        </div>
        <div className={styles["Changeable-profile__item"]}>
          Login
            <input type="text" className={styles["Changeable-profile__input"]} placeholder="programmer2000"/>
        </div>
        <div className={styles["Changeable-profile__item"]}>
          Name
            <input type="text" className={styles["Changeable-profile__input"]} placeholder="Elon"/>
        </div>
        <div className={styles["Changeable-profile__item"]}>
          Surname
            <input type="text" className={styles["Changeable-profile__input"]} placeholder="Musk"/>
        </div>
        <div className={styles["Changeable-profile__item"]}>
          Phone
            <input type="phone" className={styles["Changeable-profile__input"]} placeholder="999-99-99"/>
        </div>
      </>
    );
  }
  if (isChangeablePassword) {
    return (
      <>
        <div className={styles["Changeable-profile__item"]}>
          Password
            <input type="password" className={styles["Changeable-profile__input"]} placeholder="********"/>
        </div>
        <div className={styles["Changeable-profile__item"]}>
          Repeat password
            <input type="password" className={styles["Changeable-profile__input"]} placeholder="********"/>
        </div>
      </>
    );
  }
}

export default ChangeableProfileItems;
