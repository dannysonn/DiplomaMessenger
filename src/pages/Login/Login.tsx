import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../../App.css";
import AuthForm from "../../components/AuthForm/AuthForm";

function Login() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/chats");
    }
  });

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
