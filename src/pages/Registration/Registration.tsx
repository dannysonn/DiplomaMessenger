import React from "react";
import styles from "../../App.css";
import AuthForm from "../../components/AuthForm/AuthForm";
import AuthInput from "../../components/AuthInput/AuthInput";

const AuthInputs = [
  <AuthInput
    labelText="Email"
    type="text"
    id="Email"
    placeholder="programmer2000@google.com"
  />,
  <AuthInput
    labelText="Login"
    type="text"
    id="Login"
    placeholder="programmer2000"
  />,
  <AuthInput labelText="Name" type="text" id="Name" placeholder="Elon" />,
  <AuthInput labelText="Surname" type="text" id="Surname" placeholder="Musk" />,
  <AuthInput
    labelText="Phone"
    type="text"
    id="Phone"
    placeholder="999-99-999"
  />,
  <AuthInput
    labelText="Password"
    type="text"
    id="Password"
    placeholder="********"
  />,
  <AuthInput
    labelText="Password (one more)"
    type="text"
    id="PasswordSecond"
    placeholder="********"
  />,
];

function Registration() {
  return (
    <main className={styles.Auth}>
      <AuthForm
        title="Registration"
        AuthInputs={AuthInputs}
        btnText="Register"
        linkText="Sign in"
      />
    </main>
  );
}

export default Registration;
