import React, { useEffect } from "react";
import styles from "../../App.css";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useAppDispatch } from "../../redux/hooks";
import { getUser } from "../../redux/slices/authSlice";

function Login() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

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
