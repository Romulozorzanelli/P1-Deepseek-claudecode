"use client"
import { useState } from "react"
import { useNotesStore } from "@/lib/store"
import { NoteList } from "@/components/notes/note-list"
import { NoteEditor } from "@/components/notes/note-editor"
import { AnimatedPage } from "@/components/common/animated"
import { SectionTitle } from "@/components/common/section-title"

export default function NotesPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const { notes, addNote } = useNotesStore()

  const selectedNote = notes.find(n => n.id === selectedId) || null

  const handleNewNote = () => {
    const id = "n" + Date.now()
    addNote({
      id,
      title: "Nova nota",
      content: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    setSelectedId(id)
  }

  return (
    <AnimatedPage className="h-[calc(100vh-6rem)]">
      <SectionTitle
        title="Anotacoes"
        description="Capture ideias, resumos e lembretes com suporte a markdown"
      />

      <div className="flex gap-0 h-full -mx-6">
        {/* Sidebar list */}
        <div className="w-72 border-r border-slate-200 dark:border-slate-800 shrink-0 px-4">
          <NoteList
            notes={notes}
            selectedId={selectedId}
            onSelect={setSelectedId}
            onNew={handleNewNote}
          />
        </div>

        {/* Editor area */}
        <div className="flex-1 overflow-auto">
          <NoteEditor note={selectedNote} />
        </div>
      </div>
    </AnimatedPage>
  )
}
