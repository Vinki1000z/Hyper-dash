"use client";
import * as React from "react";

export const MobileMenuButton: React.FC = () => {
  return (
    <button
      className="hidden flex-col justify-between cursor-pointer h-[11px] w-[19px] max-sm:flex"
      aria-label="Toggle mobile menu"
    >
      <span className="w-full h-px bg-white" />
      <span className="w-full h-px bg-white" />
      <span className="w-full h-px bg-white" />
    </button>
  );
};
