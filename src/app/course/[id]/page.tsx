import CourseCard from "../_components/course-card";
import ModuleList from "../_components/module-list";

const page = () => {
  return (
    <div className=" space-y-3 lg:flex flex-row-reverse gap-3 items-center">
      <CourseCard />
      <ModuleList />
    </div>
  );
};

export default page;
