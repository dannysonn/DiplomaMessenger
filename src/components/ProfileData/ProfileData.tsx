import React, { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileData.css";

interface ProfileDataProps {
  handleDataChange: MouseEventHandler<HTMLButtonElement>;
  handlePasswordChange: MouseEventHandler<HTMLButtonElement>;
}

function ProfileData({
  handleDataChange,
  handlePasswordChange,
}: ProfileDataProps) {
  const navigate = useNavigate();

  const navigateToAuth = () => {
    navigate("/");
  };

  return (
    <div className={styles["Profile-data"]}>
      <div className={styles["Profile-data__items"]}>
        <div className={styles["Profile-data__item"]}>
          <span>Email</span>
          <span>programmer2000@yandex.ru</span>
        </div>
        <div className={styles["Profile-data__item"]}>
          <span>Login</span>
          <span>programmer2000</span>
        </div>
        <div className={styles["Profile-data__item"]}>
          <span>Name</span>
          <span>Elon</span>
        </div>
        <div className={styles["Profile-data__item"]}>
          <span>Surname</span>
          <span>Musk</span>
        </div>
        <div className={styles["Profile-data__item"]}>
          <span>Phone</span>
          <span>999-99-99</span>
        </div>
      </div>
      <div className={styles["Profile-data__btns"]}>
        <button
          type="button"
          className={styles["Profile-data__btn"]}
          onClick={handleDataChange}
        >
          Change data
        </button>
        <button
          type="button"
          className={styles["Profile-data__btn"]}
          onClick={handlePasswordChange}
        >
          Change password
        </button>
        <button
          type="button"
          className={`${styles["Profile-data__btn"]} ${styles["Profile-data__btn--red"]}`}
          onClick={navigateToAuth}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default ProfileData;
