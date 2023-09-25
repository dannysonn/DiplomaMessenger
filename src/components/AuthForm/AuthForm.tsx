import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AuthForm.css";

interface AuthFormProps {
  title: string;
  AuthInputs: React.JSX.Element[];
  btnText: string;
  linkText: string;
  linkUrl: string;
}

function AuthForm({
  title,
  AuthInputs,
  btnText,
  linkText,
  linkUrl,
}: AuthFormProps) {
  const navigate = useNavigate();

  const navigateToChats = () => {
    navigate("/chats");
  };

  return (
    <div className={styles.Auth__container}>
      <form className={styles["Auth-form"]}>
        <h1 className={styles["Auth-form__title"]}>{title}</h1>

        {AuthInputs}

        <button
          type="button"
          className={styles["Auth-form__btn"]}
          onClick={navigateToChats}
        >
          {btnText}
        </button>
        <Link to={linkUrl} className={styles["Auth__registration-link"]}>
          {linkText}
        </Link>
      </form>
    </div>
  );
}

export default AuthForm;
