"use client"

import {
  Newspaper,
  Mail,
  MessageCircle,
  FileText,
  Languages,
  Search,
  LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { AutomationWorkflow } from "@/lib/types"
import { AnimatedCard } from "@/components/common/animated"

const iconMap: Record<string, LucideIcon> = {
  Newspaper,
  Mail,
  MessageCircle,
  FileText,
  Languages,
  Search,
}

interface WorkflowCardProps {
  workflow: AutomationWorkflow
  onToggle?: () => void
  className?: string
}

export function WorkflowCard({ workflow, onToggle, className }: WorkflowCardProps) {
  const Icon = iconMap[workflow.icon] ?? Search

  return (
    <AnimatedCard className={cn("p-5", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center">
            <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h3 className="font-semibold text-base text-slate-800 dark:text-slate-200">
            {workflow.title}
          </h3>
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={workflow.active}
          onClick={onToggle}
          className={cn(
            "relative inline-flex w-10 h-6 rounded-full transition-colors duration-200 ease-in-out flex-shrink-0",
            workflow.active
              ? "bg-indigo-500"
              : "bg-slate-200 dark:bg-slate-700"
          )}
        >
          <span
            className={cn(
              "absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-200 ease-in-out",
              workflow.active ? "left-[22px]" : "left-0.5"
            )}
          />
        </button>
      </div>

      <p className="text-sm text-slate-500 mt-2">
        {workflow.description}
      </p>

      <div className="border-t border-slate-100 dark:border-slate-800 my-3" />

      <div className="space-y-1.5 text-sm">
        <div className="flex items-baseline gap-1">
          <span className="text-xs font-medium text-slate-400 w-16 flex-shrink-0">
            Gatilho:
          </span>
          <span className="text-slate-700 dark:text-slate-300">
            {workflow.trigger}
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-xs font-medium text-slate-400 w-16 flex-shrink-0">
            Acao:
          </span>
          <span className="text-slate-700 dark:text-slate-300">
            {workflow.action}
          </span>
        </div>
      </div>
    </AnimatedCard>
  )
}
