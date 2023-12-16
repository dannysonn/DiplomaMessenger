import React from "react";
import styles from "./Button.css";

interface ButtonProps {
  type: "submit" | "button";
  form?: string;
  cssModifier?: string;
  additionalClass?: string;
  text?: string;
}

function Button({
  type,
  form,
  cssModifier,
  additionalClass,
  text,
}: ButtonProps) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={`${styles.btn} ${additionalClass || ""} ${cssModifier || ""}`}
      form={form}
    >
      {text}
    </button>
  );
}

export default Button;
