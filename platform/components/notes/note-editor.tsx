"use client"

import { Pencil, Eye } from "lucide-react"
import { cn } from "@/lib/utils"
import { Note } from "@/lib/types"
import { useNotesStore } from "@/lib/store"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface NoteEditorProps {
  note: Note | null
}

function renderMarkdown(content: string): React.ReactNode[] {
  if (!content) return []

  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let buffer: string[] = []
  let keyIndex = 0

  const flushBuffer = () => {
    if (buffer.length > 0) {
      const paragraph = buffer.join(" ").trim()
      if (paragraph) {
        elements.push(<p key={keyIndex++} className="text-sm text-slate-700 dark:text-slate-300 mb-3 whitespace-pre-wrap">{paragraph}</p>)
      }
      buffer = []
    }
  }

  for (const line of lines) {
    // Blank line = paragraph break
    if (line.trim() === "") {
      flushBuffer()
      continue
    }

    // Heading 1
    if (/^#\s/.test(line)) {
      flushBuffer()
      elements.push(
        <h1 key={keyIndex++} className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          {line.replace(/^#\s+/, "")}
        </h1>
      )
      continue
    }

    // Heading 2
    if (/^##\s/.test(line)) {
      flushBuffer()
      elements.push(
        <h2 key={keyIndex++} className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-5 mb-2">
          {line.replace(/^##\s+/, "")}
        </h2>
      )
      continue
    }

    // Unordered list item
    if (/^-\s/.test(line)) {
      flushBuffer()
      const cleaned = line.replace(/^-\s+/, "")
      // bold inside list
      const boldReplaced = cleaned.replace(/\*\*(.+?)\*\*/g, (_, text) => {
        return `<strong>${text}</strong>`
      })
      elements.push(
        <li key={keyIndex++} className="text-sm text-slate-700 dark:text-slate-300 ml-4 list-disc mb-1"
          dangerouslySetInnerHTML={{ __html: boldReplaced }}
        />
      )
      continue
    }

    // Regular text line (accumulate for paragraph)
    buffer.push(line)
  }

  flushBuffer()

  return elements
}

export function NoteEditor({ note }: NoteEditorProps) {
  const updateNote = useNotesStore((s) => s.updateNote)

  if (!note) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-16">
        <p className="text-sm text-slate-400">Selecione ou crie uma nota</p>
      </div>
    )
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateNote(note.id, e.target.value, note.content)
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateNote(note.id, note.title, e.target.value)
  }

  return (
    <div className="flex flex-col h-full">
      <Tabs defaultValue="write" className="flex flex-col flex-1">
        <TabsList>
          <TabsTrigger value="write">
            <Pencil className="h-4 w-4 mr-1.5" />
            Escrever
          </TabsTrigger>
          <TabsTrigger value="preview">
            <Eye className="h-4 w-4 mr-1.5" />
            Visualizar
          </TabsTrigger>
        </TabsList>

        {/* Write tab */}
        <TabsContent value="write" className="flex flex-col flex-1 mt-4">
          <input
            type="text"
            value={note.title}
            onChange={handleTitleChange}
            placeholder="Titulo da nota..."
            className="w-full text-xl font-bold bg-transparent border-none outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
          />
          <textarea
            value={note.content}
            onChange={handleContentChange}
            placeholder="Comece a escrever..."
            className="mt-4 flex-1 min-h-[400px] w-full bg-transparent border-none outline-none resize-none text-sm font-mono text-slate-700 dark:text-slate-300 placeholder:text-slate-400"
          />
        </TabsContent>

        {/* Preview tab */}
        <TabsContent value="preview" className="flex-1 mt-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {note.title}
          </h1>
          <div className="prose prose-sm dark:prose-invert max-w-none">
            {renderMarkdown(note.content)}
          </div>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800">
        <p className="text-xs text-slate-400">
          Ultima edicao: {note.updatedAt.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  )
}
