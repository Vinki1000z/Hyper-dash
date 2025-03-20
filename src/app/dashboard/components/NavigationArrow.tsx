"use client";
import React from "react";
import Image from "next/image";
import left from "@/img/left.png";
import right from "@/img/right.png";

interface NavigationArrowProps {
  direction: "left" | "right";
  onClick: () => void;
}

export const NavigationArrow: React.FC<NavigationArrowProps> = ({
  direction,
  onClick,
}) => {
  const path = direction === "left" ? left : right;

  return (
    <button
      onClick={onClick}
      aria-label={`Scroll ${direction}`}
      className="p-2 transition-transform hover:scale-110"
    >
      <Image
        src={path}
        alt={`${direction} arrow`}
        width={47}
        height={47}
        className="w-12 h-12 cursor-pointer"
      />
    </button>
  );
};
