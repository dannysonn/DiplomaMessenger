import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { removeError, signIn, signUp } from "../../redux/slices/authSlice";
import styles from "./AuthForm.css";
import AuthInput from "../AuthInput/AuthInput";
import schema from "../../utils/UserSchema";
import Button from "../Button/Button";
import { useAppDispatch } from "../../redux/hooks";
import InputError from "../InputError/InputError";
import { SignInData, SignUpData } from "../../API/AuthApi/AuthApi";
import { getUser } from "../../redux/slices/userSlice";

interface AuthFormProps {
  title: string;
  btnText: string;
  linkText: string;
  linkUrl: string;
  isLoginPage: boolean;
}

function AuthForm({
  title,
  btnText,
  linkText,
  linkUrl,
  isLoginPage,
}: AuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();
  const shouldShowAuthError = useSelector((state) => state.auth.error);
  const isPending = useSelector((state) => state.auth.status) === "pending";
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<any> = async (data) => {
    if (isLoginPage) {
      dispatch(signIn(data as SignInData))
        .unwrap()
        .then(() => {
          navigate("/chats");
          dispatch(getUser());
        })
        .catch((e) => console.error(e));
    } else {
      dispatch(signUp(data as SignUpData))
        .unwrap()
        .then(() => {
          navigate("/chats");
          dispatch(getUser());
        })
        .catch((e) => console.error(e));
    }
  };

  const onChange = () => {
    if (shouldShowAuthError) {
      dispatch(removeError());
    }
  };

  return (
    <div className={styles.Auth__container}>
      <form className={styles["Auth-form"]} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles["Auth-form__title"]}>{title}</h1>

        {isLoginPage ? (
          <>
            <AuthInput
              register={register}
              inputName="login"
              id="login"
              placeholder="programmer2000"
              labelText="Логин"
              type="text"
              errors={errors}
              onChange={onChange}
            />
            <AuthInput
              register={register}
              inputName="password"
              id="password"
              placeholder="********"
              labelText="Пароль"
              type="password"
              errors={errors}
              onChange={onChange}
            />
          </>
        ) : (
          <>
            <AuthInput
              register={register}
              errors={errors}
              inputName="email"
              labelText="Почта"
              type="text"
              id="Email"
              placeholder="programmer2000@google.com"
              onChange={onChange}
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="login"
              labelText="Логин"
              type="text"
              id="Login"
              placeholder="programmer2000"
              onChange={onChange}
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="first_name"
              labelText="Имя"
              type="text"
              id="Name"
              placeholder="Elon"
              onChange={onChange}
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="second_name"
              labelText="Фамилия"
              type="text"
              id="Surname"
              placeholder="Musk"
              onChange={onChange}
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="phone"
              labelText="Телефон"
              type="text"
              id="Phone"
              placeholder="999-99-999"
              onChange={onChange}
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="password"
              labelText="Пароль"
              type="password"
              id="Password"
              placeholder="********"
              onChange={onChange}
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="secondPassword"
              labelText="Пароль (ещё раз)"
              type="password"
              id="PasswordSecond"
              placeholder="********"
              onChange={onChange}
            />
          </>
        )}

        {shouldShowAuthError ? (
          <InputError text="Неверный логин или пароль" />
        ) : (
          ""
        )}

        {isPending ? (
          <CircularProgress className={styles["Auth-form__loader"]} size={36} />
        ) : (
          <Button
            type="submit"
            text={btnText}
            additionalClass={styles["Auth-form__btn"]}
          />
        )}

        <Link
          to={linkUrl}
          onClick={() => {
            dispatch(removeError());
          }}
          className={styles["Auth__registration-link"]}
        >
          {linkText}
        </Link>
      </form>
    </div>
  );
}

export default AuthForm;
