import React from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { removeError, signIn } from "../../redux/slices/authSlice";
import styles from "./AuthForm.css";
import AuthInput from "../AuthInput/AuthInput";
import schema from "../../utils/UserSchema";
import Button from "../Button/Button";

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
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const shouldShowSignInError = useSelector((state) => state.signIn.error);

  const onSubmit: SubmitHandler<any> = () => {
    dispatch(signIn(getValues()));
  };

  const onChange = () => {
    if (shouldShowSignInError) {
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
              labelText="Login"
              type="text"
              errors={errors}
              onChange={onChange}
            />
            <AuthInput
              register={register}
              inputName="password"
              id="password"
              placeholder="********"
              labelText="Password"
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
              labelText="Email"
              type="text"
              id="Email"
              placeholder="programmer2000@google.com"
              onChange={onChange}
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="login"
              labelText="Login"
              type="text"
              id="Login"
              placeholder="programmer2000"
              onChange={onChange}
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="name"
              labelText="Name"
              type="text"
              id="Name"
              placeholder="Elon"
              onChange={onChange}
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="surname"
              labelText="Surname"
              type="text"
              id="Surname"
              placeholder="Musk"
              onChange={onChange}
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="phone"
              labelText="Phone"
              type="text"
              id="Phone"
              placeholder="999-99-999"
              onChange={onChange}
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="password"
              labelText="Password"
              type="text"
              id="Password"
              placeholder="********"
              onChange={onChange}
            />
            <AuthInput
              register={register}
              errors={errors}
              inputName="secondPassword"
              labelText="Password (one more)"
              type="text"
              id="PasswordSecond"
              placeholder="********"
              onChange={onChange}
            />
          </>
        )}

        {shouldShowSignInError ? (
          <p className={styles["Auth-input__error"]}>
            Неверный логин или пароль
          </p>
        ) : (
          ""
        )}

        <Button
          type="submit"
          text={btnText}
          additionalClass={styles["Auth-form__btn"]}
        />
        <Link to={linkUrl} className={styles["Auth__registration-link"]}>
          {linkText}
        </Link>
      </form>
    </div>
  );
}

export default AuthForm;
