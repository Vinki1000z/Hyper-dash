"use client";
import React, { useRef } from "react";
import { NavigationArrow } from "./NavigationArrow";
import { StoryCard } from "./StoryCard";
import Story1 from '@/img/Story 1 Img.png';
import Story2 from '@/img/Story 2 Img.png';
import Story3 from '@/img/Story 3 Img.png';

const SCROLL_AMOUNT = 340;

const STORIES_DATA = [
  {
    imageUrl: Story1,
    imageAlt: "Story 1",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageUrl: Story2,
    imageAlt: "Story 2",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageUrl: Story3,
    imageAlt: "Story 3",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageUrl: Story2,
    imageAlt: "Story 4",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const Stories: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount =
        direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-32 py-32 bg-zinc-900 min-h-[810px] max-md:px-10 max-md:py-16 max-sm:px-5 max-sm:py-10">
      <header className="flex justify-between items-center mb-20 max-sm:flex-col max-sm:gap-5 max-sm:items-start">
        <h2 className="text-4xl text-white">Our Stories</h2>
        <nav className="flex gap-11">
          <NavigationArrow direction="left" onClick={() => handleScroll("left")} />
          <NavigationArrow direction="right" onClick={() => handleScroll("right")} />
        </nav>
      </header>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto flex-nowrap gap-20 max-md:overflow-x-scroll max-md:gap-10 max-sm:gap-5 no-scrollbar"
      >
        {STORIES_DATA.map((story, index) => (
          <StoryCard
            key={index}
            imageUrl={story.imageUrl.src}
            imageAlt={story.imageAlt}
            title={story.title}
            description={story.description}
          />
        ))}
      </div>

      {/* CSS for hiding the scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
          scrollbar-width: none; /* Hide scrollbar for Firefox */
        }
      `}</style>
    </section>
  );
};

export default Stories;
