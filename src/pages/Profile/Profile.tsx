import React from "react";
import globalStyles from "../../App.css";
import styles from "./Profile.css";
import ProfileContent from "../../components/ProfileContent/ProfileContent";

function Profile() {
  return (
    <main className={globalStyles.Main}>
      <div className={globalStyles.Container}>
        <aside className={styles["Profile-sidebar"]}>
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
          <a className={styles["Profile__back-link"]} href="#" />
        </aside>

        <div className={styles["Profile-content__container"]}>
          <img
            className={styles["Profile-avatar"]}
            src="../../assets/images/svg/default-chat-img.svg"
            alt="Avatar"
          />
          <ProfileContent />
        </div>
      </div>
    </main>
  );
}

export default Profile;
