import React from "react";
import styles from "./InputError.css";

interface InputErrorProps {
  text: string;
}

function InputError({ text }: InputErrorProps) {
  return <p className={styles["Input-error"]}>{text}</p>;
}

export default InputError;
