"use client";

import * as React from "react";

interface FeatureCardProps {
  image: string;
  title: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ image, title }) => {
  return (
    <article className="flex flex-col gap-8 items-center">
      <img src={image} alt={title} className="w-full h-[286px] object-cover" />
      <h3 className="text-2xl text-center text-white max-md:text-xl">
        {title}
      </h3>
    </article>
  );
};
