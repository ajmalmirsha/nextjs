import React from "react";
import { TypographyMuted } from "../ui/TypographyMuted";
import { Switch } from "../ui/switch";
import data from "./data.json";
import { Typography } from "../ui/Typography";
import { ModuleCard } from "../ModuleCard/ModuleCard";
import { Accordion } from "../ui/accordion";
import { TypographyLarge } from "../ui/TypographyLarge";

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
