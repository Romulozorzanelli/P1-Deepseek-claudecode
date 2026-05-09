"use client"
import { useState } from "react"
import { promptCollections } from "@/lib/data"
import { PromptCard } from "@/components/prompts/prompt-card"
import { AnimatedPage, StaggerContainer, StaggerItem } from "@/components/common/animated"
import { SectionTitle } from "@/components/common/section-title"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function PromptsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredCollections = promptCollections.filter(collection => {
    if (selectedCategory && collection.id !== selectedCategory) return false
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      collection.name.toLowerCase().includes(query) ||
      collection.description.toLowerCase().includes(query) ||
      collection.prompts.some(
        p => p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
      )
    )
  })

  return (
    <AnimatedPage>
      <SectionTitle
        title="Biblioteca de Prompts"
        description="Colecoes de prompts prontos para usar com IAs generativas"
      />

      {/* Search bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input
          type="text"
          placeholder="Buscar prompts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category filter bar */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
            selectedCategory === null
              ? "bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 font-medium"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Todas
        </button>
        {promptCollections.map(collection => (
          <button
            key={collection.id}
            onClick={() => setSelectedCategory(collection.id)}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
              selectedCategory === collection.id
                ? "bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 font-medium"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {collection.name}
          </button>
        ))}
      </div>

      {/* Collections */}
      <StaggerContainer className="space-y-10">
        {filteredCollections.map(collection => (
          <StaggerItem key={collection.id}>
            <section>
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {collection.name}
                </h2>
                <p className="text-sm text-slate-500 mt-1">{collection.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {collection.prompts.map(prompt => (
                  <PromptCard key={prompt.id} prompt={prompt} />
                ))}
              </div>
            </section>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AnimatedPage>
  )
}
