"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  variant?: "default" | "sm";
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, variant = "default", ...props }, ref) => {
    const clampedValue = Math.min(100, Math.max(0, value));

    const heights: Record<string, string> = {
      default: "h-2",
      sm: "h-1",
    };

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn(
          "w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800",
          heights[variant],
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            "h-full rounded-full bg-indigo-600 transition-all duration-300 ease-in-out dark:bg-indigo-500",
            heights[variant],
          )}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    );
  },
);

Progress.displayName = "Progress";

export { Progress };
