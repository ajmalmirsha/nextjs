import { CirclePlay } from "lucide-react";
import React from "react";
import { TypographyLarge } from "../ui/TypographyLarge";
import { TypographyMuted } from "../ui/TypographyMuted";

type LessonPlayerCardType = {
  lesson: {
    lessonId: string;
    lessonTitle: string;
    duration: string;
    active?: boolean;
  };
};

const LessonPlayerCard = ({ lesson }: LessonPlayerCardType) => {
  return (
    <div
      className={`p-5 flex space-x-3 items-center ${
        lesson?.active && "text-[var(--bg-color-white)]"
      } bg-[var(--primary-blue-${lesson?.active ? "500" : "50"})] rounded-lg`}
    >
      <CirclePlay
        color={
          lesson?.active ? "var(--bg-color-white)" : "var(--primary-blue-500)"
        }
      />
      <div className="flex flex-col">
        <TypographyLarge>{lesson?.lessonTitle}</TypographyLarge>
        <TypographyMuted className="!text-[var(--primary-blue-300)]">
          {lesson?.duration}
        </TypographyMuted>
      </div>
    </div>
  );
};

export default LessonPlayerCard;
