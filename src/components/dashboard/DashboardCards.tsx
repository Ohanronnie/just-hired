import { SvgIcons } from "@/icons/SvgIconts";
import { cn } from "@/lib/utils";

interface IDashboardCards {
  data: {
    title: string;
    isPositive: boolean;
    number: number | string;
    percentage: number;
    day: string;
  };
  className?: string;
  isSlim?: boolean;
}

export default function DashboardCards({
  data: { title, isPositive, number, percentage },
  className,
  isSlim,
}: IDashboardCards) {
  return (
    <div className={cn("w-6/12 grow my-1 sm:w-3/12 px-2", className)}>
      <div className={`card w-full  px-2 h-full  ${isSlim ? "py-0" : "py-3"}`}>
        <h3 className="font-medium">{title}</h3>
        <div className="flex-center justify-between">
          <h3 className="text-main font-semibold text-2xl ">
            {number.toLocaleString()}
          </h3>
          <span className="flex-center">
            {isPositive ? (
              <SvgIcons.upLine className="scale-[75%]" />
            ) : (
              <SvgIcons.downLine className="scale-[75%]" />
            )}
            <span
              className={`text-sm ml-1 ${isPositive ? "text-green-500" : "text-red-500"}`}
            >
              {percentage}
            </span>
          </span>
        </div>
        <h3 className="mt-2 text-main-light">today</h3>
      </div>
    </div>
  );
}
