"use client";
import * as React from "react";
import { SpecificationItem } from "./SpecificationItem";
import BlackCarImg from "@/img/Black Bg Car.png"
import Image from "next/image";
const leftColumnSpecs = [
    { label: "Range (EPA est.)", value: "Up to 300 miles" },
    { label: "Peak Power", value: "400 hp" },
    { label: "Towing", value: "2000 pounds" },
    { label: "Drag Coefficient", value: "0.28 cd" },
];

const rightColumnSpecs = [
    { label: "Acceleration", value: "4.5s 0-60 mph" },
    { label: "Wheels", value: "19'' or 20''" },
    { label: "Seating", value: "Up to 5" },
    { label: "Top Speed", value: "130 mph" },
];

function AirXSpecifications() {
    return (
        <section className="overflow-hidden pb-2 text-white bg-zinc-900">
            <div className="flex relative flex-col justify-center items-end px-20 py-60 max-w-full min-h-[926px] max-md:px-5 max-md:py-24">
            <Image
                    src={BlackCarImg}
                    alt="Air X Vehicle Background"
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col mb-0 max-w-full w-[376px] max-md:mb-2.5">
                    <h2 className="self-start text-2xl">Model Air X Specifications</h2>
                    <div className="flex gap-10 mt-12 text-base max-md:mt-10">
                        <dl className="flex flex-col flex-1 items-start">
                            {leftColumnSpecs.map((spec, index) => (
                                <SpecificationItem key={index} label={spec.label} value={spec.value} />
                            ))}
                        </dl>
                        <dl className="flex flex-col flex-1 items-start">
                            {rightColumnSpecs.map((spec, index) => (
                                <SpecificationItem key={index} label={spec.label} value={spec.value} />
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AirXSpecifications;
