"use client";

import * as React from "react";

interface SpecCardProps {
  label: string;
  value: string;
  unit: string;
}

export const SpecCard: React.FC<SpecCardProps> = ({ label, value, unit }) => {
  return (
    <article className="flex flex-col items-center text-center text-white max-sm:w-full">
      <h3 className="mb-9 text-xs max-sm:mb-5">{label}</h3>
      <p className="text-5xl text-white max-md:text-4xl max-sm:text-4xl">
        {value}
      </p>
      <p className="text-4xl text-white font-[275] max-md:text-3xl max-sm:text-2xl">
        {unit}
      </p>
    </article>
  );
};
