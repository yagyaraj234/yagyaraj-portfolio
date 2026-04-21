import { InterviewClient } from "@/components/interview-client"
import { DifficultyLevel, InterviewQuestion } from "@/types/interview"
import interviewData from "./questions.json"

export const dynamic = "force-static"

interface RawInterviewQuestion {
  id: number
  category: string
  title: string
  type: string
  subQuestions?: {
    id: string
    title: string
  }[]
}

const getDifficulty = (question: RawInterviewQuestion): DifficultyLevel => {
  const category = question.category.toLowerCase()
  const type = question.type.toLowerCase()

  if (type === "machine-coding") return "hard"
  if (category.includes("advanced")) return "advance"
  if (type === "blog-worthy") return "medium"
  if (
    category.includes("javascript core") ||
    category.includes("react fundamentals") ||
    category.includes("browser fundamentals")
  ) {
    return "basic"
  }

  return "medium"
}

const questions: InterviewQuestion[] = (
  interviewData.questions as RawInterviewQuestion[]
).map((question) => ({
  id: String(question.id),
  topic: question.category,
  subtopic: question.type,
  question: question.title,
  difficulty: getDifficulty(question),
  subQuestions: question.subQuestions,
}))

// This is a Server Component, it fetches the static data and passes it to the Client Component
export default function Page() {
  return (
    <div className="min-h-0 flex-1">
      <InterviewClient initialQuestions={questions} />
    </div>
  )
}
