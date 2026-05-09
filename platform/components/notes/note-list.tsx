"use client"

import { Plus, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Note } from "@/lib/types"
import { useNotesStore } from "@/lib/store"

function stripMarkdown(text: string): string {
  return text
    .replace(/^#+\s*/gm, "")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\[(.+?)\]\(.+?\)/g, "$1")
    .replace(/^-\s*/gm, "")
    .trim()
}

interface NoteListProps {
  notes?: Note[]
  selectedId: string | null
  onSelect: (id: string | null) => void
  onNew?: () => void
}

export function NoteList({ notes: externalNotes, selectedId, onSelect, onNew }: NoteListProps) {
  const { notes: storeNotes, addNote, deleteNote } = useNotesStore()
  const notes = externalNotes || storeNotes

  const handleNewNote = () => {
    if (onNew) {
      onNew()
      return
    }
    const newNote: Note = {
      id: "n" + Date.now(),
      title: "Nova nota",
      content: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    addNote(newNote)
    onSelect(newNote.id)
  }

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    deleteNote(id)
    if (selectedId === id) {
      onSelect(null)
    }
  }

  const firstLine = (content: string): string => {
    if (!content) return "Nota vazia"
    const line = content.split("\n")[0]
    return stripMarkdown(line) || "Nota vazia"
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-sm text-slate-700 dark:text-slate-300">
            Minhas Notas
          </h3>
          <span className="inline-flex items-center justify-center h-5 min-w-[20px] rounded-full bg-slate-200 dark:bg-slate-800 px-1.5 text-[10px] font-semibold text-slate-600 dark:text-slate-400">
            {notes.length}
          </span>
        </div>
        <button
          onClick={handleNewNote}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-950/30 transition-colors"
        >
          <Plus className="h-3.5 w-3.5" />
          Nova
        </button>
      </div>

      {/* Note list */}
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto space-y-1">
        {notes.map((note) => {
          const isActive = selectedId === note.id

          return (
            <div
              key={note.id}
              onClick={() => onSelect(note.id)}
              className={cn(
                "group relative p-3 rounded-lg cursor-pointer transition-colors",
                isActive
                  ? "bg-indigo-50 dark:bg-indigo-950/30 border-l-2 border-indigo-500"
                  : "hover:bg-slate-50 dark:hover:bg-slate-800 border-l-2 border-transparent"
              )}
            >
              {/* Title */}
              <p className="font-medium text-sm text-slate-800 dark:text-slate-200 truncate pr-6">
                {note.title}
              </p>

              {/* Preview */}
              <p className="text-xs text-slate-400 mt-0.5 truncate">
                {firstLine(note.content)}
              </p>

              {/* Date */}
              <p className="text-xs text-slate-400 mt-1">
                {note.updatedAt.toLocaleDateString("pt-BR")}
              </p>

              {/* Delete button */}
              <button
                onClick={(e) => handleDelete(e, note.id)}
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 text-rose-500 hover:text-rose-600 transition-opacity"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
