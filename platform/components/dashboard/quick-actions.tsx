"use client"

import { cn } from "@/lib/utils"
import { StickyNote, Kanban, Wand2 } from "lucide-react"
import { AnimatedCard } from "@/components/common/animated"
import { useRouter } from "next/navigation"

interface QuickActionButtonProps {
  icon: React.ElementType
  label: string
  href: string
}

function QuickActionButton({ icon: Icon, label, href }: QuickActionButtonProps) {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(href)}
      className={cn(
        "w-full flex items-center gap-3 p-3 rounded-lg",
        "bg-slate-50 dark:bg-slate-800",
        "hover:bg-indigo-50 dark:hover:bg-indigo-950/50",
        "transition-colors",
        "text-slate-700 dark:text-slate-300",
        "text-sm font-medium"
      )}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <span>{label}</span>
    </button>
  )
}

export default function QuickActions() {
  return (
    <AnimatedCard className="p-5">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
        Acoes Rapidas
      </h3>

      <div className="space-y-2">
        <QuickActionButton
          icon={StickyNote}
          label="Nova Nota"
          href="/notes"
        />
        <QuickActionButton
          icon={Kanban}
          label="Novo Projeto"
          href="/projects"
        />
        <QuickActionButton
          icon={Wand2}
          label="Buscar Prompts"
          href="/prompts"
        />
      </div>
    </AnimatedCard>
  )
}
