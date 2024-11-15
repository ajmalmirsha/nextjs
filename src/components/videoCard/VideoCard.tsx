import React from "react";
import { Skeleton } from "../ui/skeleton";
import { TypographySmall } from "../ui/TypographySmall";
import { TypographyMuted } from "../ui/TypographyMuted";

const VideoCard = () => {
  return (
    <div className="flex flex-col w-[200px] gap-1.5">
      <Skeleton className="w-[100%] h-[100px] rounded-md lg:h-[250px] lg:h-[150px]" />
      <TypographySmall className="truncate">
        Envato Mastery: Build a Passive Income...
      </TypographySmall>
      <TypographyMuted>CHAPTER 3 . PART 2</TypographyMuted>
    </div>
  );
};

export default VideoCard;
