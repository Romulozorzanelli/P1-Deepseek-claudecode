import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  description?: string
  action?: React.ReactNode
  className?: string
}

export function SectionTitle({ title, description, action, className }: SectionTitleProps) {
  return (
    <div className={cn("flex items-center justify-between mb-6", className)}>
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{title}</h1>
        {description && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}
