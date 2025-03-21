"use client";

import * as React from "react";
import { Button } from "./Button";
import FeatureImg from "@/img/Features 2.3 Img.png"
import Image from "next/image";
export const HeroSection2: React.FC = () => {
  return (
    <main className="flex flex-col items-center w-full bg-white min-h-[screen]">
      <div className="relative w-full max-w-[1440px]">
      <section className="w-full h-[579px] max-md:h-[400px] max-sm:h-[300px]">
      <Image
        src={FeatureImg}
        alt="Hyundai Sonata"
        className="w-full h-full object-cover"
        data-aos="zoom-up"
      />
    </section>
        <div className="flex flex-col px-32 py-44 max-md:px-16 max-sm:px-5 max-sm:py-16" style={{position:"absolute",bottom:"-26px"}}  data-aos="zoom-up">
        <section className="max-w-[463px]">
      <h1 className="text-6xl leading-normal text-black max-md:text-5xl max-sm:text-4xl">
        Air X
      </h1>
      <h2 className="mt-1 text-4xl leading-normal text-black max-md:text-3xl max-sm:text-2xl">
        Accelerate into a New Era
      </h2>
      <p className="mt-12 text-base leading-normal text-black max-w-[413px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <div className="flex gap-14 items-center mt-16 max-sm:flex-col max-sm:gap-5 max-sm:items-start">
        <Button variant="primary">Order Now</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </section>
        </div>
      </div>
    </main>
  );
};

export default HeroSection2;
