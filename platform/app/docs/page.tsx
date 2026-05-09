"use client"
import { useState } from "react"
import { docSections } from "@/lib/data"
import { AnimatedPage } from "@/components/common/animated"
import { SectionTitle } from "@/components/common/section-title"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, ChevronDown, FileText, BookOpen, Rocket, Map } from "lucide-react"

const sectionIcons: Record<string, React.ElementType> = {
  Rocket,
  BookOpen,
  Map,
}

function renderContent(text: string) {
  return text.split("\n").map((line, i) => {
    if (line.startsWith("# ")) {
      return <h2 key={i} className="text-2xl font-bold mt-8 mb-3 text-slate-900 dark:text-slate-100">{line.replace("# ", "")}</h2>
    }
    if (line.startsWith("## ")) {
      return <h3 key={i} className="text-lg font-semibold mt-5 mb-2 text-slate-800 dark:text-slate-200">{line.replace("## ", "")}</h3>
    }
    if (line.startsWith("- ")) {
      return (
        <div key={i} className="flex items-start gap-2 ml-2 text-slate-600 dark:text-slate-400">
          <span className="text-indigo-400 mt-1.5">•</span>
          <span>{line.replace("- ", "")}</span>
        </div>
      )
    }
    if (line.startsWith("**") && line.endsWith("**")) {
      const bold = line.replace(/\*\*/g, "")
      return <p key={i} className="font-semibold text-slate-700 dark:text-slate-300 mt-3">{bold}</p>
    }
    if (line.trim() === "") {
      return <div key={i} className="h-3" />
    }
    return <p key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed">{line}</p>
  })
}

export default function DocsPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>([docSections[0]?.id || ""])
  const [activePageId, setActivePageId] = useState<string>(docSections[0]?.pages[0]?.id || "")

  const toggleSection = (id: string) => {
    setExpandedSections(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  const activePage = docSections
    .flatMap(s => s.pages)
    .find(p => p.id === activePageId)

  const activeSection = docSections.find(s => s.pages.some(p => p.id === activePageId))

  return (
    <AnimatedPage className="h-[calc(100vh-6rem)]">
      <SectionTitle title="Documentacao" description="Guias, recursos e roadmaps da plataforma" />

      <div className="flex gap-0 h-full -mx-6">
        {/* Sidebar tree */}
        <div className="w-64 border-r border-slate-200 dark:border-slate-800 shrink-0 px-4 py-2 overflow-y-auto">
          {docSections.map(section => {
            const Icon = sectionIcons[section.icon] || FileText
            const isExpanded = expandedSections.includes(section.id)
            return (
              <div key={section.id} className="mb-1">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center gap-2 w-full p-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {isExpanded ? <ChevronDown className="h-4 w-4 text-slate-400" /> : <ChevronRight className="h-4 w-4 text-slate-400" />}
                  <Icon className="h-4 w-4 text-slate-500" />
                  {section.title}
                </button>

                {isExpanded && (
                  <div className="ml-7 mt-1 space-y-0.5">
                    {section.pages.map(page => (
                      <button
                        key={page.id}
                        onClick={() => setActivePageId(page.id)}
                        className={`w-full text-left p-2 rounded-lg text-sm transition-colors ${
                          activePageId === page.id
                            ? "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 font-medium"
                            : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                        }`}
                      >
                        {page.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto px-8 py-2">
          {/* Breadcrumb */}
          {activeSection && activePage && (
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <span>{activeSection.title}</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-slate-700 dark:text-slate-300">{activePage.title}</span>
            </div>
          )}

          {activePage && renderContent(activePage.content)}
        </div>
      </div>
    </AnimatedPage>
  )
}
