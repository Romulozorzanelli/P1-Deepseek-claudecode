"use client";

import * as React from "react";
import { useId } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, onCheckedChange, id: externalId, ...props }, ref) => {
    const generatedId = useId();
    const id = externalId ?? generatedId;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onCheckedChange?.(e.target.checked);
    };

    return (
      <div className="relative inline-flex items-center">
        {/* Hidden native input for accessibility */}
        <input
          ref={ref}
          type="checkbox"
          id={id}
          checked={checked}
          onChange={handleChange}
          className="sr-only"
          aria-checked={checked}
          {...props}
        />

        {/* Visible custom checkbox */}
        <label
          htmlFor={id}
          className={cn(
            "flex h-4 w-4 cursor-pointer items-center justify-center rounded border transition-colors",
            checked
              ? "border-indigo-600 bg-indigo-600 text-white dark:border-indigo-500 dark:bg-indigo-500"
              : "border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900",
            className,
          )}
        >
          {checked && <Check className="h-3 w-3" strokeWidth={3} />}
        </label>
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
