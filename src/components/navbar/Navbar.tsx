"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { TypographyLarge } from "../ui/TypographyLarge";
// import { SidebarTrigger, useSidebar } from "../ui/sidebar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[var(--bg-color-white)] p-3 rounded-lg">
      <div className="flex gap-2 items-center">
        {/* <SidebarTrigger /> */}
        <TypographyLarge>My Courses</TypographyLarge>
      </div>

      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Navbar;
