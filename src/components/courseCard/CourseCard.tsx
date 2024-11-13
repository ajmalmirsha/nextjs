import React from "react";


type CourseCardPropsType = {
  course: {
    title: string;
    role: string;
    teacher: string;
    duration: string;
    progress: string;
    books: number;
    plays: number;
    students: number;
  };
};

const CourseCard = ({ course }: CourseCardPropsType) => {
  return (
    <div className="flex justify-between items-center bg-[var(--background)] p-5 rounded-lg">
      <div>
        <h3>{course.title}</h3>
        <h5 className="text-gray-500">
          {course.role}{" "}
          <span className="font-lg text-black">{course.teacher}</span>
        </h5>
      </div>
      <div>
        <h3 className="text-gray-500">Duration</h3>
        <h5>{course.duration}</h5>
      </div>

      <div>{course.duration}</div>

      <div>{course.students}</div>

      <div>{course.books}</div>

      <div>{course.plays}</div>
    </div>
  );
};

export default CourseCard;
