import { SparklesIcon } from "@/app/Assets/Icons";
import React from "react";
import VideoCard from "./VideoCard";
import { title } from "process";

const data = [
  {
    src: "https://www.youtube.com/embed/5GG-VUvruzE?si=nVn5HT9k7BK1-mr-",
    title: "How To Handle Permissions Like A Senior Dev",
    des: "CHAPTER 3 - PART 2",
  },
  {
    src: "https://www.youtube.com/embed/Lbj3vmp8spI?si=XH5hsCt0bEe60zg4",
    title: "The Most Important Design Pattern in React",
    des: "CHAPTER 3 - PART 2",
  },
  {
    src: "https://www.youtube.com/embed/ZVnjOPwW4ZA?si=AF8SZ9WvjRFKK3sh",
    title:
      "Next js Tutorial for Beginners | Nextjs 13 (App Router) with TypeScript",
    des: "CHAPTER 3 - PART 2",
  },
  {
    src: "https://www.youtube.com/embed/5GG-VUvruzE?si=nVn5HT9k7BK1-mr-",
    title: "How To Handle Permissions Like A Senior Dev",
    des: "CHAPTER 3 - PART 2",
  },
  {
    src: "https://www.youtube.com/embed/Lbj3vmp8spI?si=XH5hsCt0bEe60zg4",
    title: "The Most Important Design Pattern in React",
    des: "CHAPTER 3 - PART 2",
  },
  {
    src: "https://www.youtube.com/embed/ZVnjOPwW4ZA?si=AF8SZ9WvjRFKK3sh",
    title:
      "Next js Tutorial for Beginners | Nextjs 13 (App Router) with TypeScript",
    des: "CHAPTER 3 - PART 2",
  },
];

const VideoBoard = () => {
  return (
    <div className="space-y-3 rounded-lg bg-[var(--background)] p-5">
      <div className="flex gap-2">
        <SparklesIcon />
        <h3 className="font-bold">Continue Watching</h3>
      </div>

      <div className="flex gap-3 overflow-x-auto">
        {data.map((item, index) => (
          <VideoCard
            src={item.src}
            key={index}
            title={item.title}
            des={item.des}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoBoard;
