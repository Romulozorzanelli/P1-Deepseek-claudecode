// Knowledge Base
export interface KnowledgeItem {
  id: string
  title: string
  description: string
  category: "fundamentos" | "machine-learning" | "deep-learning" | "llms" | "etica" | "aplicacoes"
  tags: string[]
  difficulty: "iniciante" | "intermediario" | "avancado"
  content: string
  createdAt: Date
  updatedAt: Date
}

export type CategoryId = KnowledgeItem["category"]

export interface CategoryInfo {
  id: CategoryId
  name: string
  icon: string
  color: string
  count: number
}

// Study
export interface Lesson {
  id: string
  title: string
  duration: string
  completed: boolean
}

export interface StudyModule {
  id: string
  title: string
  description: string
  category: string
  lessons: Lesson[]
  progress: number
  estimatedTime: string
}

// Prompts
export interface Prompt {
  id: string
  title: string
  description: string
  prompt: string
  category: "texto" | "programacao" | "dados" | "criatividade" | "produtividade"
  tags: string[]
}

export interface PromptCollection {
  id: string
  name: string
  description: string
  category: Prompt["category"]
  prompts: Prompt[]
}

// Projects (Kanban)
export interface Task {
  id: string
  title: string
  completed: boolean
}

export type ProjectStatus = "backlog" | "progresso" | "concluido"

export interface Project {
  id: string
  title: string
  description: string
  status: ProjectStatus
  tasks: Task[]
  dueDate: string
  color: string
}

// Automation
export interface AutomationWorkflow {
  id: string
  title: string
  description: string
  trigger: string
  action: string
  active: boolean
  icon: string
}

// Docs
export interface DocSubPage {
  id: string
  title: string
  content: string
}

export interface DocSection {
  id: string
  title: string
  icon: string
  pages: DocSubPage[]
}

// Activities
export interface Activity {
  id: string
  type: "knowledge" | "study" | "prompt" | "project" | "note"
  action: string
  target: string
  time: Date
}

// Notes
export interface Note {
  id: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}

// Favorites (unified)
export interface Favorite {
  id: string
  type: "knowledge" | "prompt" | "project"
  itemId: string
  title: string
  description: string
  addedAt: Date
}

// Theme
export type Theme = "light" | "dark" | "system"
