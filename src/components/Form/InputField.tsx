import clsx from "clsx";
import React from "react";
import FieldWrapper, { FieldWrapperPassTroughProps } from "./FieldWrapper";

type InputFieldProps = {
  type?: "text" | "email" | "password";
  className?: string;
  leftIcon?: React.ReactNode;
} & FieldWrapperPassTroughProps &
  React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ({
  type = "text",
  label,
  className,
  leftIcon,
  ...props
}: InputFieldProps) => {
  return (
    <FieldWrapper label={label} className="relative">
      <input
        {...props}
        type={type}
        className={clsx(
          "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          className,
          leftIcon && "pl-8"
        )}
      />
      {leftIcon && (
        <div className="absolute top-1/2 px-2 py-1 text-xl">{leftIcon}</div>
      )}
    </FieldWrapper>
  );
};

export default InputField;
