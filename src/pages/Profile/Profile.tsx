import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import globalStyles from "../../../App.css";
import styles from "./Profile.css";
import ProfileContent from "../../components/ProfileContent/ProfileContent";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import { IPersonState } from "../../redux/slices/userSlice";

function Profile() {
  const isAuth = useSelector((state: IPersonState) => state.person.isAuth);
  const userId = useSelector((state: IPersonState) => state.person.user.id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, []);

  return (
    <main className={globalStyles.Main}>
      <div className={globalStyles.Container}>
        <aside className={styles["Profile-sidebar"]}>
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
          <Link className={styles["Profile__back-link"]} to="/chats" />
        </aside>

        <div className={styles["Profile-content__container"]}>
          <ProfileAvatar />
          <h3>Ваш id: {userId}</h3>
          <ProfileContent />
        </div>
      </div>
    </main>
  );
}

export default Profile;
