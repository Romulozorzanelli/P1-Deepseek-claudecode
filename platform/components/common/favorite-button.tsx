"use client"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useFavoritesStore } from "@/lib/store"
import { Favorite } from "@/lib/types"

interface FavoriteButtonProps {
  item: Omit<Favorite, "addedAt">
  className?: string
}

export function FavoriteButton({ item, className }: FavoriteButtonProps) {
  const { isFavorited, toggleFavorite } = useFavoritesStore()
  const favorited = isFavorited(item.type, item.itemId)

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleFavorite({ ...item, addedAt: new Date() })
      }}
      className={cn(
        "rounded-full p-1.5 transition-colors",
        favorited
          ? "text-amber-500 hover:text-amber-600"
          : "text-slate-400 hover:text-amber-500",
        className
      )}
      title={favorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      <Star className={cn("h-4 w-4", favorited && "fill-current")} />
    </button>
  )
}
