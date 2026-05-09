"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { BookOpen, GraduationCap, Kanban, Wand2 } from "lucide-react"
import { StaggerContainer, StaggerItem, AnimatedCard } from "@/components/common/animated"

interface StatCardProps {
  icon: React.ElementType
  iconBg: string
  iconColor: string
  title: string
  value: string
  trend: string
}

function StatCard({ icon: Icon, iconBg, iconColor, title, value, trend }: StatCardProps) {
  return (
    <AnimatedCard className="p-5">
      <div className="flex items-start gap-4">
        <div className={cn("rounded-lg p-2.5 shrink-0", iconBg)}>
          <Icon className={cn("h-5 w-5", iconColor)} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1">{value}</p>
          <p className="text-xs text-emerald-500 mt-1 font-medium">{trend}</p>
        </div>
      </div>
    </AnimatedCard>
  )
}

export default function StatsGrid() {
  return (
    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StaggerItem>
        <StatCard
          icon={BookOpen}
          iconBg="bg-indigo-100 dark:bg-indigo-950/50"
          iconColor="text-indigo-600 dark:text-indigo-400"
          title="Conhecimentos"
          value="18 items"
          trend="+12% esta semana"
        />
      </StaggerItem>
      <StaggerItem>
        <StatCard
          icon={GraduationCap}
          iconBg="bg-emerald-100 dark:bg-emerald-950/50"
          iconColor="text-emerald-600 dark:text-emerald-400"
          title="Modulos"
          value="6"
          trend="+2 concluidos"
        />
      </StaggerItem>
      <StaggerItem>
        <StatCard
          icon={Kanban}
          iconBg="bg-violet-100 dark:bg-violet-950/50"
          iconColor="text-violet-600 dark:text-violet-400"
          title="Projetos"
          value="6"
          trend="2 em andamento"
        />
      </StaggerItem>
      <StaggerItem>
        <StatCard
          icon={Wand2}
          iconBg="bg-amber-100 dark:bg-amber-950/50"
          iconColor="text-amber-600 dark:text-amber-400"
          title="Prompts"
          value="20"
          trend="+5 esta semana"
        />
      </StaggerItem>
    </StaggerContainer>
  )
}
