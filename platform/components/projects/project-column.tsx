"use client"

import { cn } from "@/lib/utils"
import { Project, ProjectStatus } from "@/lib/types"
import { TaskItem } from "./task-item"

const statusColors: Record<ProjectStatus, { dot: string; label: string }> = {
  backlog: { dot: "bg-slate-400", label: "Backlog" },
  progresso: { dot: "bg-amber-400", label: "Em Progresso" },
  concluido: { dot: "bg-emerald-400", label: "Concluido" },
}

interface ProjectColumnProps {
  title: string
  status: ProjectStatus
  projects: Project[]
}

export function ProjectColumn({ title, status, projects }: ProjectColumnProps) {
  const config = statusColors[status]

  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4">
      {/* Column header */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className={cn("h-2.5 w-2.5 rounded-full", config.dot)}
        />
        <h3 className="font-semibold text-sm text-slate-700 dark:text-slate-300">
          {config.label}
        </h3>
        <span className="ml-auto inline-flex items-center justify-center h-5 min-w-[20px] rounded-full bg-slate-200 dark:bg-slate-800 px-1.5 text-[10px] font-semibold text-slate-600 dark:text-slate-400">
          {projects.length}
        </span>
      </div>

      {/* Column body */}
      <div className="flex flex-col gap-3 min-h-[400px]">
        {projects.length === 0 ? (
          <p className="text-slate-400 text-sm italic text-center py-8">
            Nenhum projeto
          </p>
        ) : (
          projects.map((project) => (
            <TaskItem key={project.id} project={project} />
          ))
        )}
      </div>
    </div>
  )
}
