import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "fflex h-10 w-full rounded-md border border-border focus-visible:border-main-deep bg-background focus-visible:border-[1.5px] px-3 py-2 text-[16px] ring-offset-background file:border-0 fos file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
