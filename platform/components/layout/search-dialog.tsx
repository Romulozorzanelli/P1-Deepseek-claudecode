"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Search, BookOpen, Wand2, GraduationCap, Kanban, Workflow } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  knowledgeItems,
  promptCollections,
  studyModules,
  projects,
  automationWorkflows,
} from "@/lib/data"

interface SearchResult {
  id: string
  title: string
  description?: string
  type: "Conhecimento" | "Prompts" | "Estudos" | "Projetos" | "Automacao"
  href: string
  icon: React.ReactNode
}

interface SearchDialogProps {
  isOpen: boolean
  onClose: () => void
}

const typeIcons: Record<SearchResult["type"], React.ReactNode> = {
  Conhecimento: <BookOpen className="h-4 w-4" />,
  Prompts: <Wand2 className="h-4 w-4" />,
  Estudos: <GraduationCap className="h-4 w-4" />,
  Projetos: <Kanban className="h-4 w-4" />,
  Automacao: <Workflow className="h-4 w-4" />,
}

function buildSearchResults(): SearchResult[] {
  const results: SearchResult[] = []

  knowledgeItems.forEach((item) => {
    results.push({
      id: item.id,
      title: item.title,
      description: item.description,
      type: "Conhecimento",
      href: `/knowledge/${item.id}`,
      icon: typeIcons["Conhecimento"],
    })
  })

  promptCollections.forEach((col) => {
    col.prompts.forEach((prompt) => {
      results.push({
        id: prompt.id,
        title: prompt.title,
        description: prompt.description,
        type: "Prompts",
        href: `/prompts/${col.id}`,
        icon: typeIcons["Prompts"],
      })
    })
  })

  studyModules.forEach((mod) => {
    mod.lessons.forEach((lesson) => {
      results.push({
        id: lesson.id,
        title: lesson.title,
        type: "Estudos",
        href: `/study/${mod.id}`,
        icon: typeIcons["Estudos"],
      })
    })
  })

  projects.forEach((proj) => {
    results.push({
      id: proj.id,
      title: proj.title,
      description: proj.description,
      type: "Projetos",
      href: `/projects/${proj.id}`,
      icon: typeIcons["Projetos"],
    })
  })

  automationWorkflows.forEach((wf) => {
    results.push({
      id: wf.id,
      title: wf.title,
      description: wf.description,
      type: "Automacao",
      href: `/automation/${wf.id}`,
      icon: typeIcons["Automacao"],
    })
  })

  return results
}

const allResults = buildSearchResults()

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const filtered = query.trim()
    ? allResults.filter(
        (r) =>
          r.title.toLowerCase().includes(query.toLowerCase()) ||
          (r.description &&
            r.description.toLowerCase().includes(query.toLowerCase()))
      )
    : []

  // Group results by type
  const grouped = new Map<SearchResult["type"], SearchResult[]>()
  filtered.forEach((r) => {
    const list = grouped.get(r.type) || []
    list.push(r)
    grouped.set(r.type, list)
  })

  const resultCount = filtered.length

  // Reset state when dialog opens
  useEffect(() => {
    if (isOpen) {
      setQuery("")
      setSelectedIndex(0)
      // Auto-focus after animation
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const navigate = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        onClose()
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) =>
          prev < resultCount - 1 ? prev + 1 : 0
        )
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : resultCount - 1
        )
      } else if (e.key === "Enter") {
        e.preventDefault()
        if (filtered[selectedIndex]) {
          router.push(filtered[selectedIndex].href)
          onClose()
        }
      }
    },
    [filtered, selectedIndex, resultCount, onClose, router]
  )

  // Global keyboard shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        if (!isOpen) {
          // Will be handled by the parent via toggle pattern
        }
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isOpen])

  let flatIndex = 0

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-1/2 top-[20%] z-50 w-[560px] max-w-[calc(100vw-2rem)] -translate-x-1/2 overflow-hidden rounded-xl surface card-ring p-0 shadow-2xl"
          >
            {/* Input */}
            <div className="flex items-center gap-3 border-b border-slate-200 px-4 dark:border-slate-800">
              <Search className="h-5 w-5 shrink-0 text-slate-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setSelectedIndex(0)
                }}
                onKeyDown={navigate}
                placeholder="Buscar artigos, prompts, modulos..."
                className="flex-1 bg-transparent py-4 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-slate-100"
              />
            </div>

            {/* Results */}
            <div className="max-h-[400px] overflow-y-auto p-2">
              {query.trim() && resultCount === 0 && (
                <div className="flex flex-col items-center gap-2 px-4 py-12 text-center">
                  <Search className="h-8 w-8 text-slate-300 dark:text-slate-600" />
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Nenhum resultado encontrado
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    Tente outro termo de busca
                  </p>
                </div>
              )}

              {Array.from(grouped.entries()).map(([type, results]) => (
                <div key={type} className="mb-2 last:mb-0">
                  <div className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {type}
                  </div>
                  {results.map((result) => {
                    const idx = flatIndex
                    const isSelected = idx === selectedIndex
                    flatIndex++

                    return (
                      <button
                        key={result.id}
                        onClick={() => {
                          router.push(result.href)
                          onClose()
                        }}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                          isSelected
                            ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-300"
                            : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        )}
                      >
                        <span
                          className={cn(
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-md",
                            isSelected
                              ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400"
                              : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                          )}
                        >
                          {result.icon}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium">
                            {result.title}
                          </p>
                          {result.description && (
                            <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                              {result.description}
                            </p>
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>
              ))}

              {!query.trim() && (
                <div className="flex flex-col items-center gap-2 px-4 py-12 text-center">
                  <Search className="h-8 w-8 text-slate-300 dark:text-slate-600" />
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Digite para buscar artigos, prompts, modulos, projetos e
                    automacoes
                  </p>
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="flex items-center justify-between border-t border-slate-200 px-4 py-2 dark:border-slate-800">
              <span className="text-xs text-slate-400 dark:text-slate-500">
                Pressione Ctrl+K para abrir a qualquer momento
              </span>
              <div className="flex items-center gap-1">
                <kbd className="rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500">
                  ESC
                </kbd>
                <span className="text-[10px] text-slate-400 dark:text-slate-500">
                  fechar
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
