import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DateRangePicker } from "rsuite";
import { formatDate } from "@/static/date-services";
import "rsuite/DateRangePicker/styles/index.css";

interface IDatePicker {
  onSelect: ({
    startDate,
    endDate,
  }: {
    startDate: Date | null;
    endDate: Date | null;
  }) => void;
}

export default function RangePicker({ onSelect }: IDatePicker) {
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  return (
    <>
      <div className="flex-center md:hidden">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[160px] justify-start mr-3 text-left font-normal",
                !startDate && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {startDate ? (
                formatDate(startDate, {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })
              ) : (
                <span>Pick Start Date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={startDate || undefined}
              onSelect={(date) => {
                if (date) {
                  setStartDate(date);
                }
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger disabled={!startDate} asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[160px] justify-start mr-3 text-left font-normal",
                !endDate && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {endDate ? (
                formatDate(endDate, {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })
              ) : (
                <span>Pick Ending Date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={endDate || undefined}
              onSelect={(date) => {
                if (date && startDate) {
                  onSelect({ startDate, endDate: date });
                  setEndDate(date);
                }
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="max-md:hidden block">
        <DateRangePicker
          placeholder="Select Start Date  :  Select End Date"
          className="w-[280px] max-md:hidden"
        />
      </div>
    </>
  );
}
