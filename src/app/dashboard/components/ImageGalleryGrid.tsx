"use client";

import * as React from "react";

interface ImageGalleryGridProps {
  topLeftImage: string;
  topRightImage: string;
  centerImage: string;
  bottomLeftImage: string;
  bottomRightImage: string;
}

export const ImageGalleryGrid: React.FC<ImageGalleryGridProps> = ({
  topLeftImage,
  topRightImage,
  centerImage,
  bottomLeftImage,
  bottomRightImage,
}) => {
  return (
    <section className="grid grid-cols-12 gap-8 mt-28 max-md:grid-cols-6 max-sm:grid-cols-2">
      <div className="col-span-3 max-md:col-span-3 max-sm:col-span-1">
        <img src={topLeftImage} alt="" className="w-full h-auto" />
      </div>
      <div className="col-span-3 max-md:col-span-3 max-sm:col-span-1">
        <img src={topRightImage} alt="" className="w-full h-auto" />
      </div>
      <div className="col-span-6 row-span-2 max-md:col-span-6 max-sm:col-span-2">
        <img src={centerImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="col-span-3 max-md:col-span-3 max-sm:col-span-1">
        <img src={bottomLeftImage} alt="" className="w-full h-auto" />
      </div>
      <div className="col-span-3 max-md:col-span-3 max-sm:col-span-1">
        <img src={bottomRightImage} alt="" className="w-full h-auto" />
      </div>
    </section>
  );
};
