"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const data = [
  {
    title: "General",
    items: [
      {
        title: "Dashboard",
        icon: <></>,
        url: "dashboard",
      },
      {
        title: "Schedule",
        icon: <></>,
        url: "schedule",
      },
      {
        title: "Message",
        icon: <></>,
        url: "message",
      },
      {
        title: "Payment",
        icon: <></>,
        url: "payment",
      },
    ],
  },
  {
    title: "Courses",
    items: [
      {
        title: "My Courses",
        icon: <></>,
        url: "courses",
      },
      {
        title: "Discover",
        icon: <></>,
        url: "discover",
      },
    ],
  },
  {
    title: "Others",
    items: [
      {
        title: "Support",
        icon: <></>,
        url: "support",
      },
      {
        title: "Setting",
        icon: <></>,
        url: "setting",
      },
    ],
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-[20vw] h-100 pl-10">
      <h3 className="font-extrabold text-2xl p-5">Courses</h3>

      <div className="flex flex-col gap-8">
        {data.map((section, index) => (
          <div key={index} className="flex flex-col gap-2 text-gray-500">
            <p className="text-xs uppercase text-grey-300">{section.title}</p>
            <div className="flex flex-col gap-1">
              {section.items.map((item, i) => {
                const isActive = pathname === `/user/${item.url}`;
                return (
                  <Link
                    key={i}
                    href={`/user/${item.url}`}
                    className={`cursor-pointer font-medium rounded-md p-3  ${
                      isActive
                        ? "bg-[#F1EFFF] !font-bold text-[var(--primary)]"
                        : "hover:bg-[#edededa1]"
                    }`}
                  >
                    <h5>{item.title}</h5>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
