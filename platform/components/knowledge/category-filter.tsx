"use client"

import { cn } from "@/lib/utils"
import { categoryInfos } from "@/lib/data"
import {
  Brain,
  Cpu,
  Network,
  MessageSquare,
  Scale,
  Rocket,
  Layers,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  fundamentos: Brain,
  "machine-learning": Cpu,
  "deep-learning": Network,
  llms: MessageSquare,
  etica: Scale,
  aplicacoes: Rocket,
}

interface CategoryFilterProps {
  selectedCategory: string | null
  onSelect: (categoryId: string | null) => void
}

export function CategoryFilter({ selectedCategory, onSelect }: CategoryFilterProps) {
  const totalCount = categoryInfos.reduce((sum, cat) => sum + cat.count, 0)

  return (
    <div className="flex flex-col gap-1">
      {/* "Todas" option */}
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "flex items-center gap-3 rounded-lg p-2.5 cursor-pointer w-full text-left transition-colors",
          selectedCategory === null
            ? "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 font-medium"
            : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
        )}
      >
        <Layers className="h-4 w-4 shrink-0" />
        <span className="flex-1 text-sm">Todas</span>
        <span className="inline-flex items-center justify-center text-xs rounded-full bg-slate-200 dark:bg-slate-700 px-2 py-0.5 min-w-[1.5rem]">
          {totalCount}
        </span>
      </button>

      {/* Category items */}
      {categoryInfos.map((cat) => {
        const Icon = iconMap[cat.id] ?? Layers
        const isActive = selectedCategory === cat.id

        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={cn(
              "flex items-center gap-3 rounded-lg p-2.5 cursor-pointer w-full text-left transition-colors",
              isActive
                ? "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 font-medium"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            )}
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span className="flex-1 text-sm">{cat.name}</span>
            <span className="inline-flex items-center justify-center text-xs rounded-full bg-slate-200 dark:bg-slate-700 px-2 py-0.5 min-w-[1.5rem]">
              {cat.count}
            </span>
          </button>
        )
      })}
    </div>
  )
}
