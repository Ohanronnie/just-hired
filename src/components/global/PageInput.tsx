import { SvgIcons } from "@/icons/SvgIconts";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export default function PageInput({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex-center w-full grow rounded-md bg-gray-100 max-sm:mt-3 sm:max-w-[380px]",
        className,
      )}
    >
      <SvgIcons.BlueSearch className="scale-[75%] shrink-0 relative left-2" />
      <Input
        placeholder="Search"
        className=" rounded-r-none border-none focus-visible:border-none focus:border-none w-full bg-transparent md:max-w-[400px]"
      />
    </div>
  );
}
