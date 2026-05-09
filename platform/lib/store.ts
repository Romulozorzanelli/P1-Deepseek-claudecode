"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Theme, Note, Favorite } from "./types"
import { initialNotes } from "./data"

interface ThemeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "dark" as Theme,
      setTheme: (theme: Theme) => {
        set({ theme })
        const root = document.documentElement
        root.classList.remove("light", "dark")
        if (theme === "system") {
          const mq = window.matchMedia("(prefers-color-scheme: dark)")
          root.classList.add(mq.matches ? "dark" : "light")
        } else {
          root.classList.add(theme)
        }
      },
    }),
    { name: "ia-platform-theme" }
  )
)

interface NotesStore {
  notes: Note[]
  addNote: (note: Note) => void
  updateNote: (id: string, title: string, content: string) => void
  deleteNote: (id: string) => void
}

export const useNotesStore = create<NotesStore>()(
  persist(
    (set) => ({
      notes: initialNotes,
      addNote: (note) => set((s) => ({ notes: [note, ...s.notes] })),
      updateNote: (id, title, content) =>
        set((s) => ({
          notes: s.notes.map((n) =>
            n.id === id
              ? { ...n, title, content, updatedAt: new Date() }
              : n
          ),
        })),
      deleteNote: (id) =>
        set((s) => ({ notes: s.notes.filter((n) => n.id !== id) })),
    }),
    { name: "ia-platform-notes" }
  )
)

interface FavoritesStore {
  favorites: Favorite[]
  isFavorited: (type: string, itemId: string) => boolean
  toggleFavorite: (fav: Favorite) => void
  removeFavorite: (id: string) => void
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      isFavorited: (type, itemId) =>
        get().favorites.some((f) => f.type === type && f.itemId === itemId),
      toggleFavorite: (fav) => {
        const exists = get().favorites.some(
          (f) => f.type === fav.type && f.itemId === fav.itemId
        )
        if (exists) {
          set((s) => ({
            favorites: s.favorites.filter(
              (f) => !(f.type === fav.type && f.itemId === fav.itemId)
            ),
          }))
        } else {
          set((s) => ({ favorites: [...s.favorites, fav] }))
        }
      },
      removeFavorite: (id) =>
        set((s) => ({
          favorites: s.favorites.filter((f) => f.id !== id),
        })),
    }),
    { name: "ia-platform-favorites" }
  )
)
