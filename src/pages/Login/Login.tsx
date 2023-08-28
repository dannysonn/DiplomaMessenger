import React from "react";
import AuthInput from "../../components/AuthInput/AuthInput";
import styles from "./Login.module.css";

function Login() {
  return (
    <main className={styles.Login}>
      <div className={styles.Login__container}>
        <form className={styles.Login_form}>
          <h1 className={styles.Login_form__title}>Login</h1>
          <AuthInput
            id="login"
            placeholder="programmer2000"
            labelText="Login"
            type="text"
          />

          <AuthInput
            id="password"
            placeholder="********"
            labelText="Password"
            type="text"
          />
          <button type="button" className={styles.Login_form__btn}>
            Log in
          </button>
          <a href="#" className={styles.Login__registration_link}>
            No account?
          </a>
        </form>
      </div>
    </main>
  );
}

export default Login;
