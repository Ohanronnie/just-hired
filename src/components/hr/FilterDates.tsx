import { useRef } from "react";
import { Calendar } from "../ui/calendar";
import { useFormFilter } from "@/store/useFormFilter";
import { PopoverClose } from "@radix-ui/react-popover";

export default function FilterDates() {
  const { date, setDate } = useFormFilter();
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <div className="p-2 w-fit">
      <PopoverClose ref={ref} className="hidden"></PopoverClose>
      <Calendar
        mode="single"
        selected={date ? new Date(date) : new Date()}
        onSelect={(selectedDay) => {
          if (selectedDay) {
            setDate(selectedDay?.toISOString());
            ref.current?.click();
          } else {
            setDate(null);
          }
        }}
        className="rounded-md"
      />
    </div>
  );
}
