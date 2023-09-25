import React from "react";
import { Link } from "react-router-dom";
import globalStyles from "../../App.css";
import styles from "./Profile.css";
import ProfileContent from "../../components/ProfileContent/ProfileContent";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";

function Profile() {
  return (
    <main className={globalStyles.Main}>
      <div className={globalStyles.Container}>
        <aside className={styles["Profile-sidebar"]}>
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
          <Link className={styles["Profile__back-link"]} to="/chats" />
        </aside>

        <div className={styles["Profile-content__container"]}>
          <ProfileAvatar />
          <ProfileContent />
        </div>
      </div>
    </main>
  );
}

export default Profile;
