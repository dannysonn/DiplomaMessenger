import React from "react";
import styles from "./AuthForm.css";
import {Link} from 'react-router-dom';

interface AuthFormProps {
  title: string;
  AuthInputs: React.JSX.Element[];
  btnText: string;
  linkText: string;
}

function AuthForm({ title, AuthInputs, btnText, linkText }: AuthFormProps) {
  return (
    <div className={styles.Auth__container}>
      <form className={styles.Auth_form}>
        <h1 className={styles.Auth_form__title}>{title}</h1>

        {AuthInputs}

        <button type="button" className={styles.Auth_form__btn}>
          {btnText}
        </button>
        <Link to="/registration" className={styles.Auth__registration_link}>{linkText}</Link>
      </form>
    </div>
  );
}

export default AuthForm;
