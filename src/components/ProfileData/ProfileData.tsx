import React, { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import styles from "./ProfileData.css";
import { IPersonState } from "../../redux/slices/userSlice";

interface ProfileDataProps {
  handleDataChange: MouseEventHandler<HTMLButtonElement>;
  handlePasswordChange: MouseEventHandler<HTMLButtonElement>;
}

function ProfileData({
  handleDataChange,
  handlePasswordChange,
}: ProfileDataProps) {
  const navigate = useNavigate();
  const user = useSelector((state: IPersonState) => state.person.user);

  const navigateToAuth = () => {
    navigate("/");
  };

  if (user) {
    return (
      <div className={styles["Profile-data"]}>
        <div className={styles["Profile-data__items"]}>
          <div className={styles["Profile-data__item"]}>
            <span>Почта</span>
            <span>{user?.email}</span>
          </div>
          <div className={styles["Profile-data__item"]}>
            <span>Логин</span>
            <span>{user.login}</span>
          </div>
          <div className={styles["Profile-data__item"]}>
            <span>Имя</span>
            <span>{user.first_name}</span>
          </div>
          <div className={styles["Profile-data__item"]}>
            <span>Фамилия</span>
            <span>{user.second_name}</span>
          </div>
          <div className={styles["Profile-data__item"]}>
            <span>Телефон</span>
            <span>{user.phone}</span>
          </div>
        </div>
        <div className={styles["Profile-data__btns"]}>
          <button
            type="button"
            className={styles["Profile-data__btn"]}
            onClick={handleDataChange}
          >
            Поменять данные
          </button>
          <button
            type="button"
            className={styles["Profile-data__btn"]}
            onClick={handlePasswordChange}
          >
            Поменять пароль
          </button>
          <button
            type="button"
            className={`${styles["Profile-data__btn"]} ${styles["Profile-data__btn--red"]}`}
            onClick={navigateToAuth}
          >
            Выйти
          </button>
        </div>
      </div>
    );
  }
  return <CircularProgress size={50} />;
}

export default ProfileData;
