import clsx from "clsx";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "px-6 py-3 bg-indigo-500 text-slate-100 font-bold rounded-md transition-all duration-75  hover:bg-indigo-600 active:scale-95",
        className
      )}
    >
      {children}
    </button>
  );
};
