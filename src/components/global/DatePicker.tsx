import { useState } from "react";

import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { generateYearsArray, formatDate, cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
import { SvgIcons } from "@/icons/SvgIconts";
import FullLoader from "./FullLoader";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "../ui/select";

interface IDateOFBirth {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  labelText: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  extraLabel?: string;
  placeholder?: string;
}

export default function DateOfBirthPicker({
  selectedDate,
  onDateSelect,
  labelText,
  disabled = false,
  className,
  error,
  required,
  extraLabel,
  placeholder,
}: IDateOFBirth) {
  const [yearArray, setArray] = useState([2021, 2027]);
  const [isMounted, setIsMounted] = useState(true);
  const prevYears = generateYearsArray();
  return (
    <div className={cn("w-full mb-3 relative", className)}>
      <h3>
        <span>{labelText}</span>
        {required ? (
          <span className="text-red-500 text-lg relative top-1 ml-1">*</span>
        ) : null}
        {extraLabel ? (
          <span className="text-[13px] text-[#8A8686]/70">{extraLabel}</span>
        ) : null}
      </h3>
      <Popover>
        <PopoverTrigger
          disabled={disabled}
          className={`bg-offwhite w-full flex justify-between disabled:opacity-50 px-2 border rounded-md items-center h-10 ${error && "border-red-500"}`}
        >
          <span className={selectedDate ? `` : "text-[#8A8686]"}>
            {selectedDate ? formatDate(selectedDate) : placeholder}
          </span>
          <SvgIcons.CalendarIcon />
        </PopoverTrigger>
        <PopoverContent className="shadow-lg h-fit w-[310px] pb-0">
          <Select
            onValueChange={(val) => {
              setArray([Number(val) - 3, Number(val) + 3]);
              setIsMounted(false);
              setTimeout(() => {
                setIsMounted(true);
              }, 200);
            }}
          >
            <SelectTrigger className="mb-2 h-10">
              <span>Select Year</span>
            </SelectTrigger>
            <SelectContent className="max-h-[300px] max-w-[350px] overflow-auto default-scroll">
              <SelectGroup>
                {prevYears.map((item, key) => (
                  <SelectItem value={`${item}`} key={key}>
                    {item}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {isMounted ? (
            <Calendar
              mode="single"
              fromYear={yearArray[0]}
              defaultMonth={new Date(yearArray[1] - 3, 0)}
              toYear={yearArray[1]}
              selected={selectedDate}
              onSelect={(date) => {
                onDateSelect(date as Date);
              }}
              className="rounded-md"
            />
          ) : (
            <FullLoader isLoading />
          )}
        </PopoverContent>
      </Popover>
      {error && (
        <span className="text-red-500 absolute -bottom-5 left-2 ">{error}</span>
      )}
    </div>
  );
}
