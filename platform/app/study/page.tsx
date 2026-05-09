"use client"
import { useState } from "react"
import { studyModules } from "@/lib/data"
import { ModuleCard } from "@/components/study/module-card"
import { LessonItem } from "@/components/study/lesson-item"
import { AnimatedPage, StaggerContainer, StaggerItem } from "@/components/common/animated"
import { SectionTitle } from "@/components/common/section-title"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { GraduationCap, Clock, CheckCircle2 } from "lucide-react"

export default function StudyPage() {
  const [modules, setModules] = useState(studyModules)
  const [expandedModule, setExpandedModule] = useState<string | null>(modules[0]?.id || null)

  const handleToggleLesson = (moduleId: string, lessonId: string) => {
    setModules(prev => prev.map(m => {
      if (m.id !== moduleId) return m
      const updated = m.lessons.map(l =>
        l.id === lessonId ? { ...l, completed: !l.completed } : l
      )
      const completed = updated.filter(l => l.completed).length
      const progress = Math.round((completed / updated.length) * 100)
      return { ...m, lessons: updated, progress }
    }))
  }

  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0)
  const completedLessons = modules.reduce((sum, m) => sum + m.lessons.filter(l => l.completed).length, 0)

  return (
    <AnimatedPage>
      <SectionTitle
        title="Area de Estudos"
        description="Modulos estruturados para aprender IA do zero ao avancado"
      />

      {/* Overall progress */}
      <div className="surface card-ring rounded-xl p-5 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Progresso geral</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {Math.round((completedLessons / totalLessons) * 100)}%
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> {completedLessons} concluidas</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {totalLessons} licoes</span>
          </div>
        </div>
      </div>

      <StaggerContainer className="space-y-4">
        {modules.map(mod => (
          <StaggerItem key={mod.id}>
            <div className="surface card-ring rounded-xl overflow-hidden">
              {/* Module header - clickable */}
              <button
                onClick={() => setExpandedModule(expandedModule === mod.id ? null : mod.id)}
                className="w-full p-5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-950/50">
                    <GraduationCap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">{mod.title}</h3>
                    <p className="text-sm text-slate-500">{mod.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-400">{mod.progress}%</span>
                  <span className="text-xs text-slate-400">{mod.estimatedTime}</span>
                </div>
              </button>

              {/* Lessons list - expandable */}
              {expandedModule === mod.id && (
                <div className="border-t border-slate-200 dark:border-slate-800">
                  {mod.lessons.map(lesson => (
                    <LessonItem
                      key={lesson.id}
                      lesson={lesson}
                      onToggle={() => handleToggleLesson(mod.id, lesson.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AnimatedPage>
  )
}
