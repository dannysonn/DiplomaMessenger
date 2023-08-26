import React from "react";
import styles from "./Login.module.css";

function Login() {
  return (
    <main className={styles.Login}>
      <div className={styles.Login__container}>
        <form action="">
          <h1>Login</h1>
          <label htmlFor="login">
            Login
            <input type="text" id="login" />
          </label>

          <label htmlFor="password">
            Password
            <input type="text" id="password" />
          </label>
          <button type="button">Login</button>
          <a href="#">No account?</a>
        </form>
      </div>
    </main>
  );
}

export default Login;
