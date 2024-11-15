import { TypographySmall } from "@/components/ui/TypographySmall";
import { TypographyMuted } from "@/components/ui/TypographyMuted";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { TypographyLarge } from "@/components/ui/TypographyLarge";
import { BookOpen, CirclePlay, Users } from "lucide-react";
import Link from "next/link";

type CourseDetailsCardType = {
  id: string;
  title?: string;
  role?: string;
  teacher?: {
    name?: string;
    img?: string;
  };
  duration?: string;
  totalLessons?: number;
  progress?: number;
  upcomingSessions?: number;
  completedLessons?: number;
};
const CourseDetailsCard = ({
  id,
  title,
  role,
  upcomingSessions,
  totalLessons,
  duration,
  completedLessons,
  teacher,
  progress,
}: CourseDetailsCardType) => {
  return (
    <Link href={`/course/${id}`}>
      <div className="space-y-3 p-4 bg-[var(--bg-color-white)] rounded-lg sm:flex justify-between gap-5">
        <div className="flex justify-between sm:w-[60%]">
          <div className="flex flex-col gap-2">
            <TypographySmall className="truncate w-48">{title}</TypographySmall>
            <div className="flex gap-5 items-center">
              <TypographyMuted>{role}</TypographyMuted>
              <div className="flex gap-2 items-center">
                <Avatar>
                  <AvatarImage className="w-[24px]" src={teacher?.img} />
                  <AvatarFallback className="w-[24px]">{`${
                    teacher?.name?.split(" ")?.[0]?.[0]
                  }`}</AvatarFallback>
                </Avatar>
                <TypographySmall>{teacher?.name}</TypographySmall>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <TypographyMuted>Duration</TypographyMuted>
            <TypographySmall className="sm:!text-base">
              {duration}
            </TypographySmall>
          </div>
        </div>

        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <TypographyLarge>{progress}%</TypographyLarge>
            <div className="w-[80px]">
              <Progress
                className="bg-[var(--dark-black-200)] h-[5px] text-[#725dff]"
                color="#725dff"
                value={progress}
              />
            </div>
          </div>
          <br />

          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center sm:flex-col">
              <Users color="#bdc1c6" />
              <TypographySmall className="sm:!text-base">
                {totalLessons}
              </TypographySmall>
            </div>

            <div className="flex gap-1 items-center sm:flex-col">
              <BookOpen color="#bdc1c6" />
              <TypographySmall className="sm:!text-base">
                {upcomingSessions}
              </TypographySmall>
            </div>

            <div className="flex gap-1 items-center sm:flex-col">
              <CirclePlay color="#bdc1c6" />
              <TypographySmall className="sm:!text-base">
                {completedLessons}
              </TypographySmall>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseDetailsCard;
