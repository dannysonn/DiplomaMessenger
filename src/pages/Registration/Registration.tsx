import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../../App.css";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useAppDispatch } from "../../redux/hooks";
import { getUser } from "../../redux/slices/authSlice";

function Registration() {
  const dispatch = useAppDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUser());
  });

  useEffect(() => {
    if (isAuth) {
      navigate("/chats");
    }
  });

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
