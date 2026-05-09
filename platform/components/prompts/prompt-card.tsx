"use client"

import { useState } from "react"
import { Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Prompt } from "@/lib/types"
import { FavoriteButton } from "@/components/common/favorite-button"
import { AnimatedCard } from "@/components/common/animated"

interface PromptCardProps {
  prompt: Prompt
  className?: string
}

export function PromptCard({ prompt, className }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(prompt.prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback: silently fail
    }
  }

  return (
    <AnimatedCard className={cn("p-5", className)}>
      <h3 className="font-semibold text-base text-slate-800 dark:text-slate-200">
        {prompt.title}
      </h3>
      <p className="text-sm text-slate-500 line-clamp-2 mt-1">
        {prompt.description}
      </p>

      <div className="mt-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 line-clamp-3">
        {prompt.prompt}
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {prompt.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
        <button
          type="button"
          onClick={handleCopy}
          className={cn(
            "inline-flex items-center gap-1.5 text-xs font-medium rounded-lg px-2.5 py-1.5 transition-colors",
            copied
              ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950"
              : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          )}
        >
          <Copy className="h-3.5 w-3.5" />
          {copied ? "Copiado!" : "Copiar"}
        </button>

        <FavoriteButton
          item={{
            id: `prompt-${prompt.id}`,
            type: "prompt",
            itemId: prompt.id,
            title: prompt.title,
            description: prompt.description,
          }}
        />
      </div>
    </AnimatedCard>
  )
}
