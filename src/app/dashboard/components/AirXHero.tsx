"use client";

import * as React from "react";
import Image from "next/image";
import Feature from "@/img/Features.png";

const AirXHero: React.FC = () => {
  return (
    <section className="box-border flex justify-center items-center px-56 pt-28 pb-24 mx-auto w-full max-w-none bg-zinc-900 min-h-[893px] max-md:px-10 max-md:py-16 max-md:max-w-[991px] max-sm:px-5 max-sm:py-10 max-sm:max-w-screen-sm">
      <article className="flex relative flex-col w-[980px] max-md:w-full">
        <h1 className="mb-12 text-7xl font-light text-white font-['Poppins'] max-md:text-6xl max-sm:mb-8 max-sm:text-4xl" data-aos="fade-up">
          Air X
        </h1>
        <figure className="mb-4" data-aos="fade-up">
          <Image
            src={Feature}
            alt="Luxury car interior"
            width={980}
            height={553}
            className="object-cover w-full h-[553px] max-md:h-[400px] max-sm:h-[300px]"
            priority
          />
        </figure>
        <h2 className="text-4xl text-white font-['Poppins'] max-md:text-3xl max-sm:text-2xl">
          Accelerate into a New Era
        </h2>
      </article>
    </section>
  );
};

export default AirXHero;
