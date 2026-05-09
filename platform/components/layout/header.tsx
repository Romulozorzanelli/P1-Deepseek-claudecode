"use client"

import { Search, Sun, Moon, Monitor, User } from "lucide-react"
import { useThemeStore } from "@/lib/store"
import { cn } from "@/lib/utils"

interface HeaderProps {
  sidebarCollapsed: boolean
  onToggleSidebar?: () => void
  onOpenSearch?: () => void
  pageTitle: string
}

export function Header({
  sidebarCollapsed,
  onOpenSearch,
  pageTitle,
}: HeaderProps) {
  const { theme, setTheme } = useThemeStore()

  const cycleTheme = () => {
    if (theme === "dark") setTheme("light")
    else if (theme === "light") setTheme("system")
    else setTheme("dark")
  }

  const ThemeIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor

  return (
    <header
      className={cn(
        "fixed top-0 right-0 z-30 flex h-16 items-center justify-between glass border-b border-slate-200 dark:border-slate-800 px-6 transition-all duration-300",
        sidebarCollapsed ? "left-16" : "left-64"
      )}
    >
      {/* Page title */}
      <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        {pageTitle}
      </h1>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        {/* Search button */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200 transition-colors"
        >
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">Buscar...</span>
          <kbd className="hidden sm:inline-flex items-center rounded border border-slate-300 bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-400">
            Ctrl+K
          </kbd>
        </button>

        {/* Theme toggle */}
        <button
          onClick={cycleTheme}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
          title={`Tema: ${theme}`}
        >
          <ThemeIcon className="h-5 w-5" />
        </button>

        {/* User avatar placeholder */}
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 transition-colors">
          <User className="h-4 w-4" />
        </button>
      </div>
    </header>
  )
}
