import { TypographyLarge } from "@/components/ui/TypographyLarge";
import { TypographyMuted } from "@/components/ui/TypographyMuted";
import { Search } from "lucide-react";
import Selector from "@/components/selector/Selector";
import data from "./course-data.json";
import { Input } from "@/components/ui/input";
import CourseDetailsCard from "./course-details-card";

const ECourseList = () => {
  return (
    <div className="">
      <div className="flex justify-between p-2 gap-5 rounded-lg">
        <div className="flex flex-col w-[60%]">
          <TypographyLarge>Enrolled Courses</TypographyLarge>
          <TypographyMuted>
            Dive in, learn, and let your potential unfold!
          </TypographyMuted>
        </div>

        <div className="flex space-x-2 w-[50%] justify-end">
          <div className="p-1 bg-[var(--bg-color-white)] h-fit rounded-full cursor-pointer sm:flex items-center gap-1 rounded-lg">
            <Search color="#bdc1c6" />
            <Input
              placeholder="Find your course..."
              className="hidden border-none  sm:block"
            />
          </div>
          <div className="overflow-hidden">
            <Selector
              items={[
                { label: "Completed", value: "completed" },
                { label: "Pending", value: "pending" },
              ]}
              placeholder="All"
              className="bg-[var(--bg-color-white)]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        {data.courses.map((course, index) => (
          <CourseDetailsCard
            id={course?.id}
            key={`course-${index}`}
            title={course?.title}
            role="Mentor"
            teacher={{
              name: course?.teacher?.name,
              img: course?.teacher?.profileImage,
            }}
            duration={course?.duration}
            progress={course?.progress}
            totalLessons={course?.stats?.totalLessons}
            upcomingSessions={course?.stats?.upcomingSessions}
            completedLessons={course?.stats?.completedLessons}
          />
        ))}
      </div>
    </div>
  );
};

export default ECourseList;
