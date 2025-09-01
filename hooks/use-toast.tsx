import { useState } from "react"

type Toast = {
  title: string
  description?: string
  variant?: "default" | "destructive"
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = ({ title, description, variant = "default" }: Toast) => {
    // Simple alert implementation for now
    if (variant === "destructive") {
      alert(`Error: ${title}\n${description || ""}`)
    } else {
      alert(`${title}\n${description || ""}`)
    }
  }

  return { toast }
}
