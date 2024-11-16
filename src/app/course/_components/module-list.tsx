import React from "react";
import { TypographyMuted } from "@/components/ui/TypographyMuted";
import { Switch } from "@/components/ui/switch";
import data from "./module-list-data.json";
import { Typography } from "@/components/ui/Typography";
import { Accordion } from "@/components/ui/accordion";
import { TypographyLarge } from "@/components/ui/TypographyLarge";
import { ModuleCard } from "./module-card";

const ModuleList = () => {
  return (
    <div className="p-3 bg-[var(--bg-color-white)] outline-lg lg:w-[28vw] flex-4 h-auto">
      <div className="space-y-2 lg:flex flex-col gap-2">
        <div className="flex justify-between align-center">
          <TypographyMuted>Dark Mode</TypographyMuted>
          <Switch />
        </div>
        <TypographyLarge>Modules</TypographyLarge>
      </div>
      <Accordion type="single" collapsible className="w-full space-y-2 lg:h-[75vh] overflow-auto pr-2">
        {data?.modules?.map((module, index) => (
          <ModuleCard index={index} module={module} key={`lesson-${index}`} />
        ))}
      </Accordion>
    </div>
  );
};

export default ModuleList;
