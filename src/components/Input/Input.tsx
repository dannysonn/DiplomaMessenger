import React from "react";

interface InputProps {
  inputClass: string;
  type: string;
  id: string;
  placeholder: string;
}

function Input({ inputClass, type, id, placeholder }: InputProps) {
  return (
    <>
      <input
        type={type}
        id={id}
        className={inputClass}
        placeholder={placeholder}
      />
      <span className="" />
    </>
  );
}

export default Input;
