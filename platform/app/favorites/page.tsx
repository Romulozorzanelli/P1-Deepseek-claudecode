"use client"
import { useFavoritesStore } from "@/lib/store"
import { AnimatedPage, StaggerContainer, StaggerItem } from "@/components/common/animated"
import { SectionTitle } from "@/components/common/section-title"
import { EmptyState } from "@/components/common/empty-state"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Trash2, BookOpen, Wand2, Kanban, ExternalLink } from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const typeIcons: Record<string, React.ElementType> = {
  knowledge: BookOpen,
  prompt: Wand2,
  project: Kanban,
}

const typeLabels: Record<string, string> = {
  knowledge: "Conhecimento",
  prompt: "Prompt",
  project: "Projeto",
}

const typeColors: Record<string, string> = {
  knowledge: "indigo",
  prompt: "violet",
  project: "emerald",
}

const typeLinks: Record<string, (itemId: string) => string> = {
  knowledge: (id) => `/knowledge/${id}`,
  prompt: () => `/prompts`,
  project: () => `/projects`,
}

export default function FavoritesPage() {
  const { favorites, removeFavorite } = useFavoritesStore()
  const router = useRouter()

  // Group by type
  const grouped: Record<string, typeof favorites> = {}
  favorites.forEach(f => {
    if (!grouped[f.type]) grouped[f.type] = []
    grouped[f.type].push(f)
  })

  return (
    <AnimatedPage>
      <SectionTitle
        title="Favoritos"
        description="Itens salvos de todas as secoes da plataforma"
      />

      {favorites.length === 0 ? (
        <EmptyState
          icon={Star}
          title="Nenhum favorito ainda"
          description="Clique no icone de estrela em qualquer item para salva-lo aqui."
        />
      ) : (
        <div className="space-y-8">
          {Object.entries(grouped).map(([type, items]) => {
            const Icon = typeIcons[type] || BookOpen
            return (
              <div key={type}>
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="h-5 w-5 text-slate-500" />
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    {typeLabels[type] || type}
                  </h2>
                  <Badge className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    {items.length}
                  </Badge>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {items.map(fav => (
                    <StaggerItem key={fav.id}>
                      <Card className="group hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => {
                          const link = typeLinks[fav.type]?.(fav.itemId)
                          if (link) router.push(link)
                        }}
                      >
                        <CardContent className="p-4 flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-sm text-slate-900 dark:text-slate-100 truncate">
                              {fav.title}
                            </h3>
                            {fav.description && (
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                                {fav.description}
                              </p>
                            )}
                            <div className="flex items-center gap-2 mt-2">
                              <Badge className={cn("text-xs", {
                                "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400": fav.type === "knowledge",
                                "bg-violet-50 text-violet-600 dark:bg-violet-950/50 dark:text-violet-400": fav.type === "prompt",
                                "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400": fav.type === "project",
                              })}>
                                {typeLabels[fav.type]}
                              </Badge>
                              <span className="text-xs text-slate-400">
                                Salvo em {new Date(fav.addedAt).toLocaleDateString("pt-BR")}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 ml-4">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                removeFavorite(fav.id)
                              }}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                              title="Remover dos favoritos"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                            <ExternalLink className="h-4 w-4 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                          </div>
                        </CardContent>
                      </Card>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            )
          })}
        </div>
      )}
    </AnimatedPage>
  )
}
