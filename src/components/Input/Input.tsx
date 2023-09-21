import React from "react";

interface InputProps {
  inputClass: string;
  type: string;
  id?: string;
  placeholder: string;
  readonly?: boolean;
}

function Input({ inputClass, type, id, placeholder, readonly }: InputProps) {
  return (
    <input
      type={type}
      id={id}
      className={inputClass}
      placeholder={placeholder}
      readOnly={readonly}
    />
  );
}

export default Input;
