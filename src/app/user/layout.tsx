import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex row gap-5">
      <Sidebar />
      <div className="bg-[#f8f9fa] p-5 flex flex-col gap-3 flex-1 h-[100vh] overflow-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
