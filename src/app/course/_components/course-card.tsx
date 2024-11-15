import { Skeleton } from "@/components/ui/skeleton";
import { TypographyLarge } from "@/components/ui/TypographyLarge";
import { TypographyMuted } from "@/components/ui/TypographyMuted";
import { Download } from "lucide-react";

const CourseCard = () => {
  return (
    <div className="bg-[var(--bg-color-white)] p-3 space-y-2 rounded-lg lg:flex-1 lg:h-[80vh]">
      <Skeleton className="h-[200px] lg:h-[85%]" />
      <div className="bg-[var(--dark-black-50)] p-3 rounded-lg space-y-3 sm:flex justify-between items-center">
        <div className="flex justify-between sm:space-x-10">
          <div className="flex flex-col">
            <TypographyLarge>Mentor Introduction</TypographyLarge>
            <TypographyMuted>Introduction . Courses 1</TypographyMuted>
          </div>

          <div className="bg-[var(--primary-blue-50)] p-3 rounded-full">
            <Download color="#725dff" />
          </div>
        </div>

        <div className="flex justify-between sm:space-x-2">
          <button className="p-2.5 px-5 font-semibold rounded-md bg-[var(--primary-blue-50)] text-[var(--primary-blue-500)]">
            Discussion
          </button>
          <button className="p-2.5 px-5 font-semibold rounded-md bg-[var(--primary-blue-500)] text-[var(--primary-blue-50)]">
            Next Videos
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
