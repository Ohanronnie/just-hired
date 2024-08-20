import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex-center shrink-0 text-xl", className)}>
      <span className="font-extrabold text-main">Pro</span>
      <span className="text-black font-extrabold">Next</span>
    </div>
  );
}
