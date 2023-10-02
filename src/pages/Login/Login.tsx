import React from "react";
import styles from "../../App.css";
import AuthForm from "../../components/AuthForm/AuthForm";

function Login() {
  return (
    <main className={`${styles.Main} ${styles.Auth}`}>
      <AuthForm
        isLoginPage
        title="Login"
        btnText="Log in"
        linkText="No account?"
        linkUrl="/registration"
      />
    </main>
  );
}

export default Login;
