import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographyLarge } from "../ui/TypographyLarge";
import { TypographyMuted } from "../ui/TypographyMuted";
import LessonPlayerCard from "../lessonPlayerCard/LessonPlayerCard";

type ModuleCardType = {
  index: number;
  module: {
    moduleId: string;
    moduleTitle: string;
    lessons: {
      lessonId: string;
      lessonTitle: string;
      duration: string;
      active?: boolean;
    }[];
  };
};

export function ModuleCard({ index, module }: ModuleCardType) {
  return (
    <AccordionItem
      className="bg-[var(--bg-color-white)]"
      value={`module-${index}`}
    >
      <AccordionTrigger>
        <div className="flex flex-col space-y-1">
          <TypographyLarge>{module?.moduleTitle}</TypographyLarge>
          <TypographyMuted>{module?.lessons?.length} Courses</TypographyMuted>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="p-3 space-y-2">
          {module?.lessons?.map((lesson, index) => (
            <LessonPlayerCard lesson={lesson} key={`lesson-${index}`} />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
