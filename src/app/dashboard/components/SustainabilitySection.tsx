"use client";

import * as React from "react";

interface SustainabilitySectionProps {
  leftImage: string;
  rightTopImage: string;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({
  leftImage,
  rightTopImage,
}) => {
  return (
    <section className="grid grid-cols-2 gap-8 mt-20 max-md:grid-cols-1">
      <div>
        <img
          src={leftImage}
          alt="Sustainability showcase"
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col">
        <img
          src={rightTopImage}
          alt="Sustainability detail"
          className="w-full h-auto mb-[38px]"
        />
        <h2 className="mb-5 text-3xl text-white">
          Drive to a sustainable future
        </h2>
        <p className="text-lg text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
      </div>
    </section>
  );
};