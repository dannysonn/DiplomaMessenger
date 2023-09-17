import React from "react";

interface ButtonProps {
  type: "submit" | "button";
  className: string;
}

function Button({ type, className }: ButtonProps) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={className}
    />
  );
}

export default Button;
