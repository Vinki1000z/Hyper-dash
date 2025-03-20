"use client";

import * as React from "react";
import { NewsletterSection } from "./NewsletterSection";
import { FooterNavigation } from "./FooterNavigation";

const EVSection4Footer = () => {
  return (
    <footer className="flex overflow-hidden flex-col items-center px-16 pt-8 pb-24 text-white bg-zinc-900 max-md:px-5 max-md:pb-24">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1176px] max-md:max-w-full">
        <div className="flex flex-col items-start max-md:max-w-full w-full">
          <NewsletterSection />
          <FooterNavigation />
        </div>
      </div>
    </footer>
  );
};

export default EVSection4Footer;
