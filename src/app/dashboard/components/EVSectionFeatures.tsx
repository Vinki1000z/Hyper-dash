"use client";
import * as React from "react";
import Image from "next/image";
import FeatureImg from "@/img/Features2.png";

function EVSection22Features() {
    return (
        <section className="overflow-hidden pl-20 bg-zinc-900 max-md:pl-5 min-h-screen">
            <div className="flex gap-5 max-md:flex-col h-full items-center">
                {/* Text Section */}
                <div className="w-[50%] max-md:w-full flex items-center">
                    <article className="flex flex-col self-stretch my-auto w-full max-md:mt-10" data-aos="slide-right">
                        <h1 className="self-start text-5xl text-white max-md:text-4xl">Lexo Z</h1>
                        <h2 className="mt-3 text-3xl text-white">Accelerate into a New Era</h2>
                        <div className="mt-12 text-sm text-white max-md:mt-10 max-md:mr-2.5">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor
                            </p>
                            <br />
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip
                            </p>
                            <br />
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat
                            </p>
                        </div>
                        <div className="flex gap-10 self-start mt-16 text-lg text-center max-md:mt-10">
                            <button className="px-10 py-4 bg-white text-zinc-900 max-md:px-5">
                                Order Now
                            </button>
                            <button className="my-auto text-white basis-auto">Learn More</button>
                        </div>
                    </article>
                </div>

                <div className="w-[50%] max-md:w-full flex justify-center items-center">
                    <figure className="w-full">
                        <Image
                            src={FeatureImg}
                            alt="Lexo Z Vehicle"
                            width={800}
                            height={600}
                            className="object-contain w-full aspect-[0.89] max-md:mt-10 max-md:max-w-full"
                            priority
                            data-aos="slide-left"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default EVSection22Features;
