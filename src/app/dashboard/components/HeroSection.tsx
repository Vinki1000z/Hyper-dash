"use client";
import * as React from "react";
import Image from "next/image";
import { NavigationBar } from "./NavigationBar";
import HeroImg from '@/img/Hero Image.png'

export const HeroSection: React.FC = () => {
  return (
    <section className="overflow-hidden relative w-full h-screen">
      <Image
        src={HeroImg}
        layout="fill"
        objectFit="cover"
        alt="Hero car image"
        priority
        className="absolute top-0 left-0"
      />
      <NavigationBar />
      <button
        className="absolute left-2/4 px-4 py-2 text-xs text-center text-white border-white border-solid -translate-x-2/4 cursor-pointer border-[0.75px] bottom-[155px]"
        aria-label="Schedule a test drive"
        data-aos="zoom-in"
      >
        Test Drive
      </button>
    </section>
  );
};

export default HeroSection;
