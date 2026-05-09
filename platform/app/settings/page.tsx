"use client"
import { useThemeStore } from "@/lib/store"
import { AnimatedPage } from "@/components/common/animated"
import { SectionTitle } from "@/components/common/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { Sun, Moon, Monitor, User, Palette, Info, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Theme } from "@/lib/types"

const themeOptions: { value: Theme; label: string; icon: React.ElementType; description: string }[] = [
  { value: "light", label: "Claro", icon: Sun, description: "Tema claro para ambientes bem iluminados" },
  { value: "dark", label: "Escuro", icon: Moon, description: "Tema escuro que reduz cansaco visual" },
  { value: "system", label: "Sistema", icon: Monitor, description: "Acompanha a configuracao do sistema operacional" },
]

export default function SettingsPage() {
  const { theme, setTheme } = useThemeStore()

  return (
    <AnimatedPage>
      <SectionTitle title="Configuracoes" description="Personalize sua experiencia na plataforma" />

      <div className="max-w-2xl space-y-6">
        {/* Theme */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="h-5 w-5 text-indigo-500" />
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tema</h2>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {themeOptions.map(opt => {
                const Icon = opt.icon
                const isActive = theme === opt.value
                return (
                  <button
                    key={opt.value}
                    onClick={() => setTheme(opt.value)}
                    className={cn(
                      "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all",
                      isActive
                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30"
                        : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                    )}
                  >
                    <Icon className={cn("h-6 w-6", isActive ? "text-indigo-500" : "text-slate-400")} />
                    <span className={cn("text-sm font-medium", isActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-600 dark:text-slate-400")}>
                      {opt.label}
                    </span>
                    {isActive && <Check className="h-4 w-4 text-indigo-500" />}
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Profile */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <User className="h-5 w-5 text-indigo-500" />
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Perfil</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950/50">
                <User className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">Estudante de IA</h3>
                <p className="text-sm text-slate-500">estudante@centralia.dev</p>
                <p className="text-xs text-slate-400 mt-1">Membro desde Janeiro 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Info className="h-5 w-5 text-indigo-500" />
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Sobre a Plataforma</h2>
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
              <p>
                A Central de Conhecimento IA e uma plataforma educacional focada em Inteligencia Artificial,
                projetada para centralizar estudos, projetos e recursos em um unico lugar.
              </p>
              <p>
                Construida com Next.js 14, TypeScript, TailwindCSS e Framer Motion.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs text-slate-400">Versao 1.0.0</span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-400">MVP</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AnimatedPage>
  )
}
