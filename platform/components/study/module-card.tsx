"use client"

import { BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"
import { StudyModule } from "@/lib/types"
import { Progress } from "@/components/ui/progress"
import { AnimatedCard } from "@/components/common/animated"

const categoryIcons: Record<string, typeof BookOpen> = {
  fundamentos: BookOpen,
  "machine-learning": BookOpen,
  "deep-learning": BookOpen,
  llms: BookOpen,
  etica: BookOpen,
  aplicacoes: BookOpen,
}

interface ModuleCardProps {
  module: StudyModule
  className?: string
}

export function ModuleCard({ module, className }: ModuleCardProps) {
  const Icon = categoryIcons[module.category] ?? BookOpen
  const completedLessons = module.lessons.filter((l) => l.completed).length
  const totalLessons = module.lessons.length

  return (
    <AnimatedCard className={cn("p-5", className)}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center">
          <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base text-slate-800 dark:text-slate-200">
            {module.title}
          </h3>
          <p className="text-sm text-slate-500 line-clamp-1 mt-0.5">
            {module.description}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-1.5">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>
            {module.progress}% concluido
          </span>
          <span>
            {completedLessons}/{totalLessons} licoes
          </span>
        </div>
        <Progress value={module.progress} />
      </div>

      <div className="mt-3 text-xs text-slate-400">
        {module.estimatedTime}
      </div>
    </AnimatedCard>
  )
}
