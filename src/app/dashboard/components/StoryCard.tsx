"use client"
import React from "react";
interface StoryCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col gap-5 flex-[0_0_318px] max-md:flex-[0_0_280px] max-sm:flex-[0_0_260px]">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="object-cover h-[330px] w-[318px] max-md:h-[290px] max-md:w-[280px] max-sm:h-[270px] max-sm:w-[260px]"
      />
      <h3 className="mt-5 text-lg text-white">{title}</h3>
      <p className="text-sm text-white w-[311px] max-sm:w-[260px]">
        {description}
      </p>
    </article>
  );
};
