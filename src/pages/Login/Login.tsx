import React from "react";
import AuthInput from "../../components/AuthInput/AuthInput";
import styles from "../../App.css";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthInputs = [
  <AuthInput
    id="login"
    placeholder="programmer2000"
    labelText="Login"
    type="text"
  />,
  <AuthInput
    id="password"
    placeholder="********"
    labelText="Password"
    type="text"
  />,
];

function Login() {
  return (
    <main className={styles.Auth}>
      <AuthForm
        title="Login"
        AuthInputs={AuthInputs}
        btnText="Log in"
        linkText="No account?"
      />
    </main>
  );
}

export default Login;
