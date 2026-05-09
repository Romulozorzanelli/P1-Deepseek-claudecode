"use client"
import { useState } from "react"
import { automationWorkflows } from "@/lib/data"
import { WorkflowCard } from "@/components/automation/workflow-card"
import { AnimatedPage, StaggerContainer, StaggerItem } from "@/components/common/animated"
import { SectionTitle } from "@/components/common/section-title"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"

export default function AutomationPage() {
  const [workflows, setWorkflows] = useState(automationWorkflows)

  const handleToggle = (id: string) => {
    setWorkflows(prev =>
      prev.map(w => w.id === id ? { ...w, active: !w.active } : w)
    )
  }

  const activeCount = workflows.filter(w => w.active).length

  return (
    <AnimatedPage>
      <SectionTitle
        title="Automacao IA"
        description="Configure fluxos de trabalho automatizados com IA"
        action={
          <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
            <Zap className="h-3 w-3 mr-1" /> {activeCount} ativos
          </Badge>
        }
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workflows.map(wf => (
          <StaggerItem key={wf.id}>
            <WorkflowCard workflow={wf} onToggle={() => handleToggle(wf.id)} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AnimatedPage>
  )
}
