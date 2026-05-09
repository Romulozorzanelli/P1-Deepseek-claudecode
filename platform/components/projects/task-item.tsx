"use client"

import { Calendar, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Project } from "@/lib/types"

const borderColorMap: Record<string, string> = {
  indigo: "border-l-indigo-500",
  emerald: "border-l-emerald-500",
  violet: "border-l-violet-500",
  amber: "border-l-amber-500",
  rose: "border-l-rose-500",
  cyan: "border-l-cyan-500",
}

interface TaskItemProps {
  project: Project
}

export function TaskItem({ project }: TaskItemProps) {
  const completed = project.tasks.filter((t) => t.completed).length
  const total = project.tasks.length
  const progressPct = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div
      className={cn(
        "surface card-ring rounded-lg p-4 border-l-4 transition-shadow hover:shadow-sm",
        borderColorMap[project.color] || "border-l-indigo-500"
      )}
    >
      {/* Title */}
      <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">
        {project.title}
      </h4>

      {/* Description */}
      <p className="text-xs text-slate-500 mt-1">
        {project.description}
      </p>

      {/* Due date */}
      <div className="text-xs text-slate-400 mt-2 flex items-center gap-1">
        <Calendar className="h-3 w-3" />
        <span>{project.dueDate}</span>
      </div>

      {/* Tasks checklist */}
      <div className="mt-3 space-y-1.5">
        {project.tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-start gap-2"
          >
            <span
              className={cn(
                "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors",
                task.completed
                  ? "border-indigo-600 bg-indigo-600 text-white dark:border-indigo-500 dark:bg-indigo-500"
                  : "border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900"
              )}
            >
              {task.completed && <Check className="h-3 w-3" strokeWidth={3} />}
            </span>
            <span
              className={cn(
                "text-xs",
                task.completed
                  ? "line-through text-slate-400"
                  : "text-slate-700 dark:text-slate-300"
              )}
            >
              {task.title}
            </span>
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="mt-3 space-y-1">
        <p className="text-xs text-slate-500">
          {completed}/{total} tarefas
        </p>
        <div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>
    </div>
  )
}
