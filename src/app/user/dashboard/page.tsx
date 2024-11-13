import CourseList from "@/components/courseList/CourseList";
import VideoBoard from "@/components/videoBoard/VideoBoard";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-3">
      <VideoBoard />
      <CourseList />
    </div>
  );
};

export default page;
