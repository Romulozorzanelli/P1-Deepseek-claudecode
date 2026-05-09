"use client"
import { useState } from "react"
import { projects as initialProjects } from "@/lib/data"
import { Project, ProjectStatus } from "@/lib/types"
import { ProjectColumn } from "@/components/projects/project-column"
import { TaskItem } from "@/components/projects/task-item"
import { AnimatedPage } from "@/components/common/animated"
import { SectionTitle } from "@/components/common/section-title"

const columns: { status: ProjectStatus; title: string }[] = [
  { status: "backlog", title: "Backlog" },
  { status: "progresso", title: "Em Progresso" },
  { status: "concluido", title: "Concluido" },
]

const statusColors: Record<ProjectStatus, { dot: string; count: string }> = {
  backlog: { dot: "bg-slate-400", count: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400" },
  progresso: { dot: "bg-amber-400", count: "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400" },
  concluido: { dot: "bg-emerald-400", count: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400" },
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects)

  const getColumnProjects = (status: ProjectStatus) =>
    projects.filter(p => p.status === status)

  return (
    <AnimatedPage>
      <SectionTitle title="Projetos" description="Gerencie seus projetos de IA no estilo Kanban" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map(col => {
          const colProjects = getColumnProjects(col.status)
          const colors = statusColors[col.status]
          return (
            <div key={col.status}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`h-2.5 w-2.5 rounded-full ${colors.dot}`} />
                <h3 className="font-semibold text-sm text-slate-700 dark:text-slate-300">{col.title}</h3>
                <span className={`ml-auto text-xs rounded-full px-2 py-0.5 ${colors.count}`}>
                  {colProjects.length}
                </span>
              </div>
              <div className="space-y-3 min-h-[300px] bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4">
                {colProjects.length === 0 ? (
                  <p className="text-sm text-slate-400 italic text-center py-12">Nenhum projeto</p>
                ) : (
                  colProjects.map(project => (
                    <TaskItem key={project.id} project={project} />
                  ))
                )}
              </div>
            </div>
          )
        })}
      </div>
    </AnimatedPage>
  )
}
