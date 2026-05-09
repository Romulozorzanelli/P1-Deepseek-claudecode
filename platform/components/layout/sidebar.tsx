"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Brain,
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Wand2,
  Kanban,
  Workflow,
  StickyNote,
  FileText,
  Star,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
  Menu,
  X,
} from "lucide-react"

const navItems = [
  { icon: LayoutDashboard, label: "Home", href: "/" },
  { icon: BookOpen, label: "Conhecimento", href: "/knowledge" },
  { icon: GraduationCap, label: "Estudos", href: "/study" },
  { icon: Wand2, label: "Prompts", href: "/prompts" },
  { icon: Kanban, label: "Projetos", href: "/projects" },
  { icon: Workflow, label: "Automacao", href: "/automation" },
  { icon: StickyNote, label: "Anotacoes", href: "/notes" },
  { icon: FileText, label: "Documentacao", href: "/docs" },
  { icon: Star, label: "Favoritos", href: "/favorites" },
  { icon: Settings, label: "Configuracoes", href: "/settings" },
]

const sidebarVariants = {
  expanded: { width: 256 },
  collapsed: { width: 64 },
}

const staggerItem = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.03, duration: 0.2 },
  }),
}

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    if (isMobile) {
      setMobileOpen(false)
    }
  }, [isMobile])

  const sidebarContent = (
    <motion.aside
      initial="expanded"
      animate={collapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="fixed left-0 top-0 z-40 flex h-screen flex-col glass border-r border-slate-200 dark:border-slate-800 overflow-hidden"
    >
      {/* Logo / Brand */}
      <div className="flex h-16 items-center gap-3 px-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white">
          <Brain className="h-5 w-5" />
        </div>
        <motion.span
          animate={{ opacity: collapsed ? 0 : 1 }}
          transition={{ duration: 0.15 }}
          className="whitespace-nowrap text-sm font-semibold text-slate-900 dark:text-slate-100"
        >
          Central IA
        </motion.span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {navItems.map((item, i) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href)
          const Icon = item.icon

          return (
            <motion.div
              key={item.href}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={staggerItem}
            >
              <Link
                href={item.href}
                onClick={() => isMobile && setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <motion.span
                  animate={{ opacity: collapsed ? 0 : 1 }}
                  transition={{ duration: 0.15 }}
                  className="whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              </Link>
            </motion.div>
          )
        })}
      </nav>

      {/* Collapse Toggle (desktop) */}
      {!isMobile && (
        <div className="border-t border-slate-200 dark:border-slate-800 p-3 shrink-0">
          <button
            onClick={onToggle}
            className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            {collapsed ? (
              <PanelLeftOpen className="h-4 w-4" />
            ) : (
              <>
                <PanelLeftClose className="h-4 w-4" />
                <span className="text-xs">Recolher</span>
              </>
            )}
          </button>
        </div>
      )}
    </motion.aside>
  )

  return (
    <>
      {/* Mobile hamburger button */}
      {isMobile && (
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed left-3 top-3 z-50 flex h-10 w-10 items-center justify-center rounded-lg glass border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
        >
          <Menu className="h-5 w-5" />
        </button>
      )}

      {/* Mobile overlay + sidebar */}
      <AnimatePresence>
        {isMobile && mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            {/* Sidebar */}
            <motion.div
              initial={{ x: -256 }}
              animate={{ x: 0 }}
              exit={{ x: -256 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="fixed left-0 top-0 z-50 h-screen w-64"
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      {!isMobile && sidebarContent}
    </>
  )
}
