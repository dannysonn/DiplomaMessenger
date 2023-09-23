import React from "react";
import styles from "../../pages/Profile/Profile.css";

function ProfileAvatar() {
  return (
    <div className={styles["Profile-avatar"]}>
      <img
        className={styles["Profile-avatar__image"]}
        src="../../assets/images/svg/default-chat-img.svg"
        alt="Avatar"
      />
      <div className={styles["Profile-avatar__overlay"]}>
        <div className={styles["Profile-avatar__title"]}>change avatar</div>
      </div>
    </div>
  );
}

export default ProfileAvatar;
