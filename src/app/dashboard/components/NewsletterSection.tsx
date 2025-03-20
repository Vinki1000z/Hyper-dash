"use client";

import * as React from "react";
import Right from '@/img/right.png'
export const NewsletterSection = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
  };

  return (
    <section className="flex flex-col items-start max-md:max-w-full">
      <h2 className="text-3xl">Subscribe to our newsletter</h2>
      <form
        onSubmit={handleSubmit}
        className="mt-9 max-w-full w-[393px] max-md:ml-2"
      >
        <div className="flex gap-5 justify-between items-start max-w-full w-[336px]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email"
            className="bg-transparent text-base font-light text-zinc-500 focus:outline-none"
            aria-label="Email subscription"
          />
          <button type="submit" aria-label="Subscribe">
            <img
              src={Right.src}
              alt="Subscribe"
              className="object-contain shrink-0 mt-3 aspect-[0.97] w-[29px]"
            />
          </button>
        </div>
        <div className="shrink-0 mt-3.5 h-px bg-white border border-white border-solid" />
      </form>
    </section>
  );
};
