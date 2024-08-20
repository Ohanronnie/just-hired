import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { HrRole } from "@/interfaces/hr-intrerface";
import { useFormFilter } from "@/store/useFormFilter";
import { PopoverClose } from "@radix-ui/react-popover";

interface IFilterFormType {
  filters: HrRole[];
  title: string;
}

export default function FIlterHrRole({ filters, title }: IFilterFormType) {
  const { setRole, role } = useFormFilter();
  const [selected, setSelected] = useState<HrRole[]>(role);
  const ref = useRef<HTMLButtonElement>(null);

  const handleShuffle = (item: HrRole) => {
    setSelected((prev) => {
      if (!prev.includes(item)) {
        return [...selected, item];
      } else {
        return prev.filter((filterItem) => {
          if (filterItem !== item) {
            return filterItem;
          }
        });
      }
    });
  };
  return (
    <div>
      <PopoverClose ref={ref} className="hidden"></PopoverClose>
      <h1 className="font-bold text-xl mt-4 ml-2 text-pro-blue">{title}</h1>
      <div className="mt-4 flex-center pb-4 p-2 border-b flex-wrap">
        {filters.map((item, key) => (
          <div key={key} className="w-6/12 sm:w-4/12 mb-4 px-2">
            <Button
              onClick={() => {
                handleShuffle(item);
              }}
              className="w-full border-gray-400 rounded-full px-4"
              variant={selected.includes(item) ? "default" : "outline"}
            >
              <span>{item}</span>
            </Button>
          </div>
        ))}
      </div>
      <h1 className="mt-3 pl-3">*You Can Choose Multiple Order types</h1>
      <Button
        onClick={() => {
          if (selected.length > 0) {
            setRole(selected);
            ref.current?.click();
          } else {
            //throw toast here
          }
        }}
        className="px-10 active:bg-green-600 mb-8 rounded-md mx-auto mt-5 block"
      >
        Apply
      </Button>
    </div>
  );
}
