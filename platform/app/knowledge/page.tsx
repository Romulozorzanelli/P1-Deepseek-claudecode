"use client"

import { useState, useMemo } from "react"
import { knowledgeItems, categoryInfos } from "@/lib/data"
import { KnowledgeCard } from "@/components/knowledge/knowledge-card"
import { CategoryFilter } from "@/components/knowledge/category-filter"
import { AnimatedPage, StaggerContainer, StaggerItem } from "@/components/common/animated"
import { SectionTitle } from "@/components/common/section-title"
import { EmptyState } from "@/components/common/empty-state"
import { BookOpen, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function KnowledgePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = useMemo(() => {
    return knowledgeItems.filter((item) => {
      const matchesCategory = selectedCategory === null || item.category === selectedCategory

      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const searchBar = (
    <div className="relative w-72">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
      <Input
        placeholder="Buscar conhecimentos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-9"
      />
    </div>
  )

  return (
    <AnimatedPage>
      {/* Section title + search */}
      <SectionTitle
        title="Base de Conhecimento"
        description="Artigos e referencias organizados por categoria"
        action={searchBar}
      />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar filter - horizontal scroll on mobile */}
        <div className="w-full lg:w-56 shrink-0">
          <div className="lg:block overflow-x-auto -mx-4 px-4 lg:mx-0 lg:px-0">
            <CategoryFilter selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {filteredItems.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item, index) => (
                <StaggerItem key={item.id}>
                  <KnowledgeCard item={item} index={index} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <EmptyState
              icon={BookOpen}
              title="Nenhum conhecimento encontrado"
              description="Tente ajustar os filtros ou buscar por outro termo."
            />
          )}
        </div>
      </div>
    </AnimatedPage>
  )
}
