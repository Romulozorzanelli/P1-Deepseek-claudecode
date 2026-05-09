"use client"

import { useParams, useRouter } from "next/navigation"
import { knowledgeItems } from "@/lib/data"
import { ArrowLeft, Clock, Tag, BookOpen } from "lucide-react"
import { FavoriteButton } from "@/components/common/favorite-button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AnimatedPage } from "@/components/common/animated"

const categoryVariantMap: Record<string, "indigo" | "emerald" | "violet" | "amber" | "rose" | "cyan"> = {
  fundamentos: "indigo",
  "machine-learning": "emerald",
  "deep-learning": "violet",
  llms: "amber",
  etica: "rose",
  aplicacoes: "cyan",
}

const difficultyVariantMap: Record<string, "indigo" | "emerald" | "violet" | "amber" | "rose" | "cyan"> = {
  iniciante: "emerald",
  intermediario: "amber",
  avancado: "rose",
}

const difficultyLabel: Record<string, string> = {
  iniciante: "Iniciante",
  intermediario: "Intermediario",
  avancado: "Avancado",
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" })
}

function renderContent(rawContent: string): React.ReactNode {
  const lines = rawContent.split("\n")

  return (
    <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
      {lines.map((line, i) => {
        // Empty line -> break
        if (line.trim() === "") {
          return <div key={i} className="h-3" />
        }

        // H2: "# "
        if (line.startsWith("# ")) {
          return (
            <h2 key={i} className="text-xl font-bold mt-6 mb-2 text-slate-900 dark:text-slate-100">
              {line.replace(/^# /, "")}
            </h2>
          )
        }

        // H3: "## "
        if (line.startsWith("## ")) {
          return (
            <h3 key={i} className="text-lg font-semibold mt-4 mb-1 text-slate-800 dark:text-slate-200">
              {line.replace(/^## /, "")}
            </h3>
          )
        }

        // List items: "- "
        if (line.startsWith("- ")) {
          const rawText = line.replace(/^- /, "")
          return (
            <div key={i} className="flex items-start gap-2 pl-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500" />
              <span>{renderInlineBold(rawText)}</span>
            </div>
          )
        }

        // Numbered list: "1. ", "2. ", etc.
        const numberedMatch = line.match(/^(\d+)\. /)
        if (numberedMatch) {
          const rawText = line.replace(/^\d+\. /, "")
          return (
            <div key={i} className="flex items-start gap-2 pl-2">
              <span className="text-sm font-medium text-slate-400 dark:text-slate-500 shrink-0 w-5 text-right">
                {numberedMatch[1]}.
              </span>
              <span>{renderInlineBold(rawText)}</span>
            </div>
          )
        }

        // Regular line with inline bold
        return <p key={i}>{renderInlineBold(line)}</p>
      })}
    </div>
  )
}

function renderInlineBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-slate-900 dark:text-slate-100">
              {part.slice(2, -2)}
            </strong>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

export default function KnowledgeDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const item = knowledgeItems.find((k) => k.id === id)

  if (!item) {
    return (
      <AnimatedPage>
        <button
          onClick={() => router.push("/knowledge")}
          className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </button>
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <BookOpen className="h-12 w-12 text-slate-300 dark:text-slate-600 mb-4" />
          <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300">Item nao encontrado</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            O conhecimento que voce esta procurando nao existe ou foi removido.
          </p>
        </div>
      </AnimatedPage>
    )
  }

  return (
    <AnimatedPage>
      {/* Back button */}
      <button
        onClick={() => router.push("/knowledge")}
        className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors mb-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para Base de Conhecimento
      </button>

      {/* Title + Favorite */}
      <div className="flex items-start justify-between gap-4 mt-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{item.title}</h1>
        <FavoriteButton
          item={{
            id: item.id,
            type: "knowledge",
            itemId: item.id,
            title: item.title,
            description: item.description,
          }}
        />
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-2 mt-3">
        <Badge variant={categoryVariantMap[item.category] ?? "default"}>{item.category}</Badge>
        <Badge variant={difficultyVariantMap[item.difficulty] ?? "default"}>
          {difficultyLabel[item.difficulty] ?? item.difficulty}
        </Badge>
        <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
          <Clock className="h-3 w-3" />
          Atualizado em {formatDate(item.updatedAt)}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-3">
        {item.tags.map((tag) => (
          <Badge key={tag} variant="default" className="text-xs">
            <Tag className="h-3 w-3 mr-1" />
            {tag}
          </Badge>
        ))}
      </div>

      {/* Divider */}
      <Separator className="my-6" />

      {/* Content */}
      <div className="surface card-ring rounded-xl p-6">
        {renderContent(item.content)}
      </div>
    </AnimatedPage>
  )
}
