import { cn } from "@/lib/utils";

export default function Loader({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "h-5 w-5 block mx-auto rounded-full animate-spin shrink-0 border-[3px] border-white  border-b-transparent transition-all duration-700",
        className,
      )}
    ></span>
  );
}
