import React from "react";
import SearchInput from "../searchInput/SearchInput";
import CourseCard from "../courseCard/CourseCard";

const data = [
  {
    title: "Evanto Mastery",
    role: "Mentor",
    teacher: "Ms.Nina",
    duration: "4h 23m",
    progress: "79%",
    books: 16,
    plays: 41,
    students: 52,
  },
  {
    title: "Evanto Mastery",
    role: "Mentor",
    teacher: "Ms.Nina",
    duration: "4h 23m",
    progress: "79%",
    books: 16,
    plays: 41,
    students: 52,
  },
  {
    title: "Evanto Mastery",
    role: "Mentor",
    teacher: "Ms.Nina",
    duration: "4h 23m",
    progress: "79%",
    books: 16,
    plays: 41,
    students: 52,
  },
  {
    title: "Evanto Mastery",
    role: "Mentor",
    teacher: "Ms.Nina",
    duration: "4h 23m",
    progress: "79%",
    books: 16,
    plays: 41,
    students: 52,
  },
];

const CourseList = () => {
  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="flex justify-between rounded-lg">
        <div>
          <h5 className="font-bold">Enrolled Courses</h5>
          <p className="text-gray-400 text-sm">
            Dive in, learn, and let potential unfold!
          </p>
        </div>
        <div>
          <SearchInput />
        </div>
      </div>
      <div className="space-y-2">
        {data?.map((item, index) => (
          <CourseCard course={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
