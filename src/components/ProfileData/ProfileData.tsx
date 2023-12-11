import React, { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
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
  const user = useSelector((state) => state.user.user);

  const navigateToAuth = () => {
    navigate("/");
  };

  if (user) {
    return (
      <div className={styles["Profile-data"]}>
        <div className={styles["Profile-data__items"]}>
          <div className={styles["Profile-data__item"]}>
            <span>Email</span>
            <span>{user?.email}</span>
          </div>
          <div className={styles["Profile-data__item"]}>
            <span>Login</span>
            <span>{user.login}</span>
          </div>
          <div className={styles["Profile-data__item"]}>
            <span>Name</span>
            <span>{user.first_name}</span>
          </div>
          <div className={styles["Profile-data__item"]}>
            <span>Surname</span>
            <span>{user.second_name}</span>
          </div>
          <div className={styles["Profile-data__item"]}>
            <span>Phone</span>
            <span>{user.phone}</span>
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
  return <CircularProgress size={50} />;
}

export default ProfileData;
