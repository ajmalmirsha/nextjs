import ECourseList from "./_components/course-list";
import PrevWatchBlock from "./_components/prev-watch-block";

const page = () => {
  return (
    <div className="space-y-2">
      <PrevWatchBlock />
      <ECourseList />
    </div>
  );
};

export default page;
