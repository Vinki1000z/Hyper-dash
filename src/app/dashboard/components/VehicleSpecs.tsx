"use client";

import * as React from "react";
import { SpecCard } from "./SpecCard";

export const VehicleSpecs: React.FC = () => {
  const specs = [
    {
      label: "Max Power",
      value: "1200+",
      unit: "hp",
    },
    {
      label: "EPA estimated range up to",
      value: "516",
      unit: "mi",
    },
    {
      label: "minutes to charge 200 miles",
      value: "12",
      unit: "mins",
    },
    {
      label: "0-60 mph",
      value: "<2",
      unit: "sec",
    },
  ];

  return (
    <section className="flex gap-36 justify-center items-start px-36 py-44 w-full bg-zinc-900 max-md:gap-16 max-md:px-10 max-md:py-24 max-sm:flex-col max-sm:gap-10 max-sm:px-5 max-sm:py-16">
      {specs.map((spec, index) => (
        <SpecCard
          key={index}
          label={spec.label}
          value={spec.value}
          unit={spec.unit}
        />
      ))}
    </section>
  );
};

export default VehicleSpecs;
