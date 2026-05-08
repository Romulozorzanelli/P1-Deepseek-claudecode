import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Central de Treinamento de IA",
  description:
    "Plataforma educacional para aprender Inteligencia Artificial na pratica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {/* Header */}
        <header className="border-b border-zinc-800">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="/" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-bold text-white">
                IA
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Central de Treinamento de IA
              </span>
            </a>
            <nav className="flex items-center gap-6 text-sm text-zinc-400">
              <a href="#" className="hover:text-zinc-100 transition-colors">
                Cursos
              </a>
              <a href="#" className="hover:text-zinc-100 transition-colors">
                Laboratorio
              </a>
              <a href="#" className="hover:text-zinc-100 transition-colors">
                Sobre
              </a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-zinc-800 py-8">
          <div className="mx-auto max-w-6xl px-6 text-center text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Central de Treinamento de IA.
            Todos os direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
