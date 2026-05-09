"use client"

import { Inter } from "next/font/google"
import { useState, useCallback, useEffect } from "react"
import { usePathname } from "next/navigation"
import { ThemeProvider } from "@/components/layout/theme-provider"
import Sidebar from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { SearchDialog } from "@/components/layout/search-dialog"
import { useThemeStore } from "@/lib/store"
import "../globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/knowledge": "Base de Conhecimento",
  "/study": "Area de Estudos",
  "/prompts": "Biblioteca de Prompts",
  "/projects": "Projetos",
  "/automation": "Automacao IA",
  "/notes": "Anotacoes",
  "/docs": "Documentacao",
  "/favorites": "Favoritos",
  "/settings": "Configuracoes",
}

function getPageTitle(pathname: string): string {
  if (pathname.startsWith("/knowledge/")) return "Base de Conhecimento"
  return pageTitles[pathname] || "Dashboard"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Apply theme on mount
  const { theme } = useThemeStore()
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)")
      root.classList.add(mq.matches ? "dark" : "light")
    } else {
      root.classList.add(theme)
    }
  }, [theme])

  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">
        <ThemeProvider>
          <div className="flex min-h-screen">
            <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${collapsed ? "ml-16" : "ml-64"}`}>
              <Header
                sidebarCollapsed={collapsed}
                pageTitle={getPageTitle(pathname)}
                onToggleSidebar={() => setCollapsed(!collapsed)}
                onOpenSearch={() => setSearchOpen(true)}
              />
              <main className="flex-1 p-6 pt-20">
                {children}
              </main>
            </div>
          </div>
          <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        </ThemeProvider>
      </body>
    </html>
  )
}
