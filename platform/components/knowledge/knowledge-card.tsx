"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { KnowledgeItem } from "@/lib/types"
import { FavoriteButton } from "@/components/common/favorite-button"
import { TagBadge } from "./tag-badge"

const categoryColors: Record<string, string> = {
  fundamentos: "bg-indigo-500",
  "machine-learning": "bg-emerald-500",
  "deep-learning": "bg-violet-500",
  llms: "bg-amber-500",
  etica: "bg-rose-500",
  aplicacoes: "bg-cyan-500",
}

const difficultyConfig: Record<string, { label: string; className: string }> = {
  iniciante: {
    label: "Iniciante",
    className: "text-emerald-600 dark:text-emerald-400",
  },
  intermediario: {
    label: "Intermediario",
    className: "text-amber-600 dark:text-amber-400",
  },
  avancado: {
    label: "Avancado",
    className: "text-rose-600 dark:text-rose-400",
  },
}

interface KnowledgeCardProps {
  item: KnowledgeItem
  index?: number
}

export function KnowledgeCard({ item, index = 0 }: KnowledgeCardProps) {
  const stripColor = categoryColors[item.category] ?? "bg-slate-400"
  const diff = difficultyConfig[item.difficulty] ?? difficultyConfig.iniciante

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link href={`/knowledge/${item.id}`}>
        <div
          className={cn(
            "surface card-ring rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
          )}
        >
          {/* Category color strip */}
          <div className={cn("h-1.5 w-full", stripColor)} />

          {/* Content */}
          <div className="p-5">
            {/* Difficulty badge */}
            <span className={cn("text-xs font-medium", diff.className)}>
              {diff.label}
            </span>

            {/* Title */}
            <h3 className="font-semibold text-lg mb-2 mt-1 text-slate-900 dark:text-slate-100">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-3">
              {item.description}
            </p>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {item.tags.slice(0, 3).map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>
            )}

            {/* Bottom row: category name + favorite */}
            <div className="flex items-center justify-between mt-auto pt-1">
              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                {item.category}
              </span>
              <FavoriteButton item={{ id: item.id, type: "knowledge", itemId: item.id, title: item.title, description: item.description }} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
