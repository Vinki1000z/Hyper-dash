import * as React from "react";

export const FooterNavigation = () => {
  return (
    <nav className="flex flex-wrap justify-between mt-36 w-full max-md:mt-10 max-md:flex-col max-md:items-start">
      {/* Left Side: Products & Company */}
      <div className="flex flex-row gap-10">
        <section className="flex flex-col items-start text-xl">
          <h3 className="font-medium">Products</h3>
          <ul className="mt-6 space-y-4">
            <li>
              <a href="#" className="hover:text-zinc-300">Air X</a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-300">Lexo Z</a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-300">Gravity 9</a>
            </li>
          </ul>
        </section>

        <section className="flex flex-col items-start text-lg whitespace-nowrap">
          <h3 className="font-medium">Company</h3>
          <ul className="mt-6 space-y-4">
            <li>
              <a href="#" className="hover:text-zinc-300">Fleet</a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-300">Company</a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-300">Stories</a>
            </li>
          </ul>
        </section>
      </div>

      {/* Right Side: Support & Resources */}
      <div className="flex flex-row gap-10">
        <section className="flex flex-col text-sm whitespace-nowrap">
          <h3 className="font-medium">Support</h3>
          <ul className="mt-6 space-y-4">
            <li>
              <a href="#" className="hover:text-zinc-300">Purchasing</a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-300">Charging</a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-300">Insurance</a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-300">Service</a>
            </li>
          </ul>
        </section>

        <section className="flex flex-col text-sm">
          <h3 className="font-medium">Resources</h3>
          <ul className="mt-6 space-y-4">
            <li>
              <a href="#" className="hover:text-zinc-300">Spaces</a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-300">Investors</a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-300">Career</a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-300">Contact Us</a>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
};
