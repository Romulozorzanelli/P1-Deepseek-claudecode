"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { AnimatedCard } from "@/components/common/animated"

const DAY_LABELS = ["S", "T", "Q", "Q", "S", "S", "D"]
const DAY_NAMES = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]
const HOURS = [1.5, 2.0, 3.5, 2.0, 0, 0, 0]
const TODAY_INDEX = 2 // Wednesday = index 2
const MAX_VALUE = Math.max(...HOURS, 1)

function Bar({ value, max, label, name, isToday }: { value: number; max: number; label: string; name: string; isToday: boolean }) {
  const heightPercent = max > 0 ? (value / max) * 100 : 0

  return (
    <div className="flex flex-col items-center gap-1.5 flex-1">
      <span className="text-xs font-medium text-slate-600 dark:text-slate-400 tabular-nums">
        {value > 0 ? `${value}h` : ""}
      </span>
      <div className="relative h-32 w-full max-w-[28px]">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: `${heightPercent}%` }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className={cn(
            "absolute bottom-0 left-0 right-0 rounded-t-md",
            isToday
              ? "bg-indigo-500 dark:bg-indigo-400"
              : "bg-indigo-200 dark:bg-indigo-800"
          )}
        />
      </div>
      <span
        className={cn(
          "text-xs font-medium mt-1",
          isToday
            ? "text-indigo-600 dark:text-indigo-400"
            : "text-slate-400 dark:text-slate-500"
        )}
        title={name}
      >
        {label}
      </span>
    </div>
  )
}

export default function ProgressChart() {
  const totalHours = HOURS.reduce((sum, h) => sum + h, 0)

  return (
    <AnimatedCard className="p-5">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Progresso Semanal
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Horas de estudo</p>
      </div>

      <div className="flex items-end justify-between gap-1 px-1">
        {HOURS.map((value, index) => (
          <Bar
            key={index}
            value={value}
            max={MAX_VALUE}
            label={DAY_LABELS[index]}
            name={DAY_NAMES[index]}
            isToday={index === TODAY_INDEX}
          />
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Total: <span className="font-semibold text-slate-900 dark:text-slate-100">{totalHours}h esta semana</span>
        </p>
      </div>
    </AnimatedCard>
  )
}
