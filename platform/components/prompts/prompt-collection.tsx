import { cn } from "@/lib/utils"
import { PromptCollection } from "@/lib/types"
import { PromptCard } from "./prompt-card"
import { StaggerContainer, StaggerItem } from "@/components/common/animated"

interface PromptCollectionProps {
  collection: PromptCollection
  className?: string
}

export function PromptCollectionView({ collection, className }: PromptCollectionProps) {
  return (
    <div className={cn(className)}>
      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
        {collection.name}
      </h2>
      <p className="text-sm text-slate-500 mb-6">
        {collection.description}
      </p>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {collection.prompts.map((prompt) => (
          <StaggerItem key={prompt.id}>
            <PromptCard prompt={prompt} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}
