"use client"

import { cn } from "@/lib/utils"

interface TagBadgeProps {
  tag: string
  className?: string
}

export function TagBadge({ tag, className }: TagBadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-400",
      className
    )}>
      {tag}
    </span>
  )
}
