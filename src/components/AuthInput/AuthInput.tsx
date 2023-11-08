import React from "react";
import { FieldErrors } from "react-hook-form";
import styles from "./AuthInput.css";

interface AuthInputProps {
  labelText: string;
  type: string;
  id: string;
  placeholder: string;
  register: any;
  inputName: string;
  errors: FieldErrors<any>;
  onChange: any;
}

function AuthInput({
  labelText,
  placeholder,
  type,
  id,
  register,
  inputName,
  errors,
  onChange,
}: AuthInputProps) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor={id} className={styles["Auth-input__label"]}>
      <span className={styles["Auth-input__label-text"]}>{labelText}</span>
      <input
        {...register(inputName)}
        type={type}
        id={id}
        className={styles["Auth-input"]}
        placeholder={placeholder}
        onChange={onChange}
      />
      {errors[inputName] ? (
        <p className={styles["Auth-input__error"]}>
          {errors[inputName]?.message?.toString()}
        </p>
      ) : (
        ""
      )}
    </label>
  );
}

export default AuthInput;
