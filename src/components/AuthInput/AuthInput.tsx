import React from "react";

import styles from "./AuthInput.css";
import Input from "../Input/Input";

interface AuthInputProps {
  labelText: string;
  type: string;
  id: string;
  placeholder: string;
}

function AuthInput({ labelText, placeholder, type, id }: AuthInputProps) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor={id} className={styles["Auth-input__label"]}>
      <span className={styles["Auth-input__label-text"]}>{labelText}</span>
      <Input
        inputClass={styles["Auth-input"]}
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </label>
  );
}

export default AuthInput;
