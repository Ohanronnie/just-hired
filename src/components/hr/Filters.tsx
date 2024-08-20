import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { cn } from "@/lib/utils";
import { SvgIcons } from "@/icons/SvgIconts";

interface IFilters {
  children: React.ReactNode;
  className?: string;
  title: string;
  ngClass?: string;
  align?: "start" | "end" | "center";
}

export default function Filters({
  children,
  align,
  className,
  title,
  ngClass,
}: IFilters) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover
      onOpenChange={(val) => {
        setIsOpen(val);
      }}
    >
      <PopoverTrigger
        className={cn(
          "py-2 px-4 md:px-5 lg:px-5 xl:px-3  max-md:border-t border-r flex-center",
          className,
        )}
      >
        <span className="font-medium">{title}</span>
        <SvgIcons.ChevRon2Svg
          className={`ml-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </PopoverTrigger>
      <PopoverContent align={align} className={cn("p-0", ngClass)}>
        {children}
      </PopoverContent>
    </Popover>
  );
}
