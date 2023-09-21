import React, { MouseEventHandler } from "react";
import styles from "../../pages/Profile/Profile.css";

interface ProfileDataProps {
  handleDataChange: MouseEventHandler<HTMLButtonElement>;
}

function ProfileData({ handleDataChange }: ProfileDataProps) {
  return (
    <div className={styles.Profile__btns}>
      <button
        type="button"
        className={styles.Profile__btn}
        onClick={handleDataChange}
      >
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
  );
}

export default ProfileData;
