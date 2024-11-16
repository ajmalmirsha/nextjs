import React from "react";
import { TypographyLarge } from "@/components/ui/TypographyLarge";
import VideoCard from "./video-card";

const PrevWatchBlock = () => {
  return (
    <div className="bg-[var(--bg-color-white)] space-y-3 p-3 rounded-lg">
      <TypographyLarge>Continue Watching</TypographyLarge>
      <div className="flex space-x-2 overflow-auto pb-1">
        {Array(20)
          .fill(0)
          .map((item, index) => (
            <VideoCard key={`video-${index}`} />
          ))}
      </div>
    </div>
  );
};

export default PrevWatchBlock;
