"use client";

import * as React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  className = "",
}) => {
  const baseStyles = "text-2xl leading-normal cursor-pointer";
  const variantStyles = {
    primary: "w-52 bg-black text-white h-[69px] max-sm:w-full",
    secondary: "text-black",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
