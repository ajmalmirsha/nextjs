import PrevWatchBlock from "@/components/prevWatchBlock/PrevWatchBlock";
import ECourseList from "./_components/course-list";

const page = () => {
  return (
    <div className="space-y-2">
      <PrevWatchBlock />
      <ECourseList />
    </div>
  );
};

export default page;
