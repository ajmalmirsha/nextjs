"use client";

import { usePathname } from "next/navigation";

const Title = () => {
  const pathname = usePathname();
  const title = pathname.split("/")?.[2];
  return <div className="capitalize">{title}</div>;
};

export default Title;
