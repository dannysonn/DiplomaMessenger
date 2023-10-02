import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
import styles from "./AuthForm.css";
import AuthInput from "../AuthInput/AuthInput";

YupPassword(yup);

interface AuthFormProps {
  title: string;
  btnText: string;
  linkText: string;
  linkUrl: string;
  isLoginPage: boolean;
}

const schema = yup.object().shape({
  login: string().required("No login provided"),
  password: string()
    .required("No password provided")
    .min(8, "password must contain 8 or more characters")
    .minLowercase(1, "at least 1 lower case letter")
    .minUppercase(1, "at least 1 upper case letter")
    .minNumbers(1, "at least 1 number")
    .minSymbols(1, "at least 1 special character"),
});

function AuthForm({
  title,
  btnText,
  linkText,
  linkUrl,
  isLoginPage,
}: AuthFormProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
    navigate("/chats");
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
              labelText="Login"
              type="text"
              errors={errors}
            />
            <AuthInput
              register={register}
              inputName="password"
              id="password"
              placeholder="********"
              labelText="Password"
              type="password"
              errors={errors}
            />
          </>
        ) : (
          <>
            <AuthInput
              register={register}
              errors={errors}
              inputName="email"
              labelText="Email"
              type="text"
              id="Email"
              placeholder="programmer2000@google.com"
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="login"
              labelText="Login"
              type="text"
              id="Login"
              placeholder="programmer2000"
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="name"
              labelText="Name"
              type="text"
              id="Name"
              placeholder="Elon"
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="surname"
              labelText="Surname"
              type="text"
              id="Surname"
              placeholder="Musk"
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="phone"
              labelText="Phone"
              type="text"
              id="Phone"
              placeholder="999-99-999"
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="password"
              labelText="Password"
              type="text"
              id="Password"
              placeholder="********"
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="secondPassword"
              labelText="Password (one more)"
              type="text"
              id="PasswordSecond"
              placeholder="********"
            />
          </>
        )}

        <button type="submit" className={styles["Auth-form__btn"]}>
          {btnText}
        </button>
        <Link to={linkUrl} className={styles["Auth__registration-link"]}>
          {linkText}
        </Link>
      </form>
    </div>
  );
}

export default AuthForm;
