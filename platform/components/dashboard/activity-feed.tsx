"use client"

import { cn, formatDate } from "@/lib/utils"
import { activities } from "@/lib/data"
import { BookOpen, GraduationCap, Wand2, Kanban, StickyNote } from "lucide-react"
import { StaggerContainer, StaggerItem, AnimatedCard } from "@/components/common/animated"
import type { Activity } from "@/lib/types"

const ICON_MAP: Record<Activity["type"], React.ElementType> = {
  knowledge: BookOpen,
  study: GraduationCap,
  prompt: Wand2,
  project: Kanban,
  note: StickyNote,
}

const ICON_BG: Record<Activity["type"], string> = {
  knowledge: "bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400",
  study: "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400",
  prompt: "bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400",
  project: "bg-violet-100 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400",
  note: "bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400",
}

function ActivityRow({ activity }: { activity: Activity }) {
  const Icon = ICON_MAP[activity.type]

  return (
    <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-default">
      <div className={cn("rounded-lg p-2 shrink-0", ICON_BG[activity.type])}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-slate-700 dark:text-slate-300 truncate">
          <span className="font-medium">{activity.action}</span>{" "}
          {activity.target}
        </p>
      </div>
      <span className="text-xs text-slate-400 dark:text-slate-500 shrink-0">
        {formatDate(activity.time)}
      </span>
    </div>
  )
}

export default function ActivityFeed() {
  const recentActivities = activities.slice(0, 5)

  return (
    <AnimatedCard className="p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Atividades Recentes
        </h3>
        <a
          href="/activities"
          className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
        >
          Ver todas
        </a>
      </div>

      <StaggerContainer className="space-y-0.5">
        {recentActivities.map((activity) => (
          <StaggerItem key={activity.id}>
            <ActivityRow activity={activity} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AnimatedCard>
  )
}
