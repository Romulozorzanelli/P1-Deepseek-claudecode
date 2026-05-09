"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Lesson } from "@/lib/types"

interface LessonItemProps {
  lesson: Lesson
  onToggle: (id: string) => void
}

export function LessonItem({ lesson, onToggle }: LessonItemProps) {
  return (
    <button
      type="button"
      onClick={() => onToggle(lesson.id)}
      className="flex items-center gap-3 p-3 rounded-lg w-full text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
    >
      <span
        className={cn(
          "flex-shrink-0 w-5 h-5 rounded flex items-center justify-center transition-colors",
          lesson.completed
            ? "bg-indigo-500 border-indigo-500 border-2"
            : "border-2 border-slate-300 dark:border-slate-600"
        )}
      >
        {lesson.completed && <Check className="h-3 w-3 text-white" />}
      </span>

      <span
        className={cn(
          "text-sm",
          lesson.completed
            ? "line-through text-slate-400"
            : "text-slate-700 dark:text-slate-300"
        )}
      >
        {lesson.title}
      </span>

      <span className="text-xs text-slate-400 ml-auto flex-shrink-0">
        {lesson.duration}
      </span>
    </button>
  )
}
