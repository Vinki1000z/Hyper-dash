"use client";

import * as React from "react";
import { FeatureCard } from "./FeatureCard";
import { SustainabilitySection } from "./SustainabilitySection";
import { ImageGalleryGrid } from "./ImageGalleryGrid";
import CarInDustImg from '@/img/Car IN Dust.png'
import img1 from '@/img/img1.png'
import img2 from '@/img/img2.png'
import img3 from '@/img/img3.png'
import img4 from '@/img/img4.png'
import Image from "next/image";
import FrontCarImg from '@/img/front Car.png'
import SustainableImg from '@/img/Sustainable img.png'
import AirImg from '@/img/Air X img.png'
import DesignImg from '@/img/Design Img.png'
import PerformanceImg from '@/img/Performance Img.png'
import InteriorImg from '@/img/Interiors Img.png'
const VehicleShowcase: React.FC = () => {
  return (
    <main className="w-full bg-zinc-900">
      <div className="px-4 py-28 mx-auto max-w-[1182px] max-md:py-16 max-sm:py-10">
        <section className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
          <FeatureCard
            image={DesignImg.src}
            title="Impeccable Design"
          />
          <FeatureCard
            image={PerformanceImg.src}
            title="Elevated Performance"
          />
          <FeatureCard
            image={InteriorImg.src}
            title="Great interiors"
          />
        </section>

        <SustainabilitySection
          leftImage={SustainableImg.src}
          rightTopImage={AirImg.src}
        />

        <ImageGalleryGrid
          topLeftImage={img1.src}
          topRightImage={img2.src}
          centerImage={FrontCarImg.src}
          bottomLeftImage={img3.src}
          bottomRightImage={img4.src}
        />
      </div>

      <section className="relative w-full h-[634px]">
      <Image
        src={CarInDustImg}
        alt="Air X vehicle"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,25,25,0.56)_2.96%,rgba(25,25,25,0.00)_100%)]" />
      <div className="absolute bottom-32 left-[130px] max-md:left-[60px] max-sm:left-5">
        <h2 className="mb-4 text-5xl text-white max-md:text-4xl max-sm:text-3xl">
          Air X
        </h2>
        <p className="mb-8 text-3xl text-white max-md:text-2xl max-sm:text-xl">
          Accelerate into a New Era
        </p>
        <div className="flex gap-6 items-center max-sm:flex-col max-sm:items-start">
          <button className="px-10 py-4 text-lg bg-white cursor-pointer text-zinc-900">
            Order Now
          </button>
          <button className="text-lg text-white cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
    </main>
  );
};

export default VehicleShowcase;
