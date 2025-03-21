"use client";
import * as React from "react";
import Image from "next/image";
import logoSrc from "@/img/Primary Logo.png"; 
import { MobileMenuButton } from "./MobileMenuButton";

export const NavigationBar: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 z-10 w-full">
      <div className="w-full backdrop-blur-[15px] bg-zinc-900 h-[98px]">
        <nav className="flex justify-between items-center px-20 py-0 mx-auto my-0 h-[98px] max-w-[1440px] max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0" data-aos="zoom-in">
          <div className="flex gap-20 items-center max-md:gap-10">
            <button className="text-base text-white cursor-pointer">Air X</button>
            <button className="text-base text-white cursor-pointer">Lexo Z</button>
            <button className="text-base text-white cursor-pointer">Gravity 9</button>
          </div>

          <div className="max-sm:mx-auto max-sm:my-0">
            <Image 
              src={logoSrc} 
              width={118} 
              height={24} 
              alt="Company Logo"
              className="logo"
            />
          </div>

          <div className="flex gap-20 items-center max-md:gap-10">
            <button className="text-base text-white cursor-pointer">Shop</button>
            <button className="text-base text-white cursor-pointer">Account</button>
            <MobileMenuButton />
          </div>
        </nav>
      </div>
    </header>
  );
};
