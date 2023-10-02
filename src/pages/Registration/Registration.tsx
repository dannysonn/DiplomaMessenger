import React from "react";
import styles from "../../App.css";
import AuthForm from "../../components/AuthForm/AuthForm";

function Registration() {
  return (
    <main className={`${styles.Main} ${styles.Auth}`}>
      <AuthForm
        isLoginPage={false}
        title="Registration"
        btnText="Register"
        linkText="Sign in"
        linkUrl="/"
      />
    </main>
  );
}

export default Registration;
