export type DifficultyLevel = "basic" | "medium" | "hard" | "advance"

export interface InterviewQuestion {
  id: string
  topic: string
  subtopic: string
  question: string
  difficulty?: DifficultyLevel
  subQuestions?: InterviewSubQuestion[]
}

export interface InterviewSubQuestion {
  id: string
  title: string
}

export interface UserProgress {
  githubUrl: string
  notes: string
  completed: boolean
  subQuestionStatus?: Record<string, boolean>
}

export interface ProgressState {
  [questionId: string]: UserProgress
}
