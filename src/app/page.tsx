import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-5 flex-col h-[100vh]">
      <h1>Home Page</h1>

      <Link href={"/course"}>Courses</Link>
    </div>
  );
}
