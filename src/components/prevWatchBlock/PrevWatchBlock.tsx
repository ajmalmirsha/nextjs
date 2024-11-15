import React from "react";
import VideoCard from "../videoCard/VideoCard";
import { TypographyLarge } from "../ui/TypographyLarge";

// const items = [
//   {
//     groupName: "GENERAL",
//     children: [
//       {
//         title: "Dashboard",
//         url: "#",
//         icon: Home,
//       },
//       {
//         title: "Schedule",
//         url: "#",
//         icon: Inbox,
//       },
//       {
//         title: "Message",
//         url: "#",
//         icon: Calendar,
//       },
//       {
//         title: "Payment",
//         url: "#",
//         icon: Search,
//       },
//       {
//         title: "Settings",
//         url: "#",
//         icon: Settings,
//       },
//     ],
//   },
//   {
//     groupName: "COURSES",
//     children: [
//       {
//         title: "My Courses",
//         url: "#",
//         icon: Home,
//       },
//       {
//         title: "Discover",
//         url: "#",
//         icon: Inbox,
//       },
//     ],
//   },
//   {
//     groupName: "OTHER",
//     children: [
//       {
//         title: "Support",
//         url: "#",
//         icon: Home,
//       },
//       {
//         title: "Setting",
//         url: "#",
//         icon: Inbox,
//       },
//     ],
//   },
// ];
const PrevWatchBlock = () => {
  return (
    <div className="bg-[var(--bg-color-white)] space-y-3 p-3 rounded-lg">
      <TypographyLarge>Continue Watching</TypographyLarge>
      <div className="flex space-x-2 overflow-auto pb-1">
        {Array(20)
          .fill(0)
          .map((item, index) => (
            <VideoCard key={`video-${index}`} />
          ))}
      </div>
    </div>
  );
};

export default PrevWatchBlock;
