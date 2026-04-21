import { useState, useEffect } from "react"
import { ProgressState, UserProgress } from "@/types/interview"

export const useInterviewProgress = () => {
  const [progress, setProgress] = useState<ProgressState>({})

  useEffect(() => {
    const saved = localStorage.getItem("interview-progress")
    if (saved) {
      try {
        setProgress(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to parse progress from localStorage", e)
      }
    }
  }, [])

  const updateProgress = (questionId: string, data: UserProgress) => {
    const newProgress = { ...progress, [questionId]: data }
    setProgress(newProgress)
    localStorage.setItem("interview-progress", JSON.stringify(newProgress))
  }

  return { progress, updateProgress }
}
