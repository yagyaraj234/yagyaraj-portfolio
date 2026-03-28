import { InterviewQuestion, UserProgress } from "@/types/interview"
import { ChevronDown } from "lucide-react"

interface InterviewQuestionCardProps {
  question: InterviewQuestion
  progress: UserProgress
  expanded: boolean
  onToggleExpand: () => void
  onToggleQuestionCompletion: (questionId: string) => void
  onToggleSubQuestion: (
    question: InterviewQuestion,
    subQuestionId: string
  ) => void
  onUpdateField: (
    questionId: string,
    field: "githubUrl" | "notes",
    value: string
  ) => void
}

type Theme = {
  accent: string
  soft: string
  border: string
  text: string
}

const getTheme = (topic: string): Theme => {
  const normalized = topic.toLowerCase()

  if (normalized.includes("react")) {
    return {
      accent: "#0ea5e9",
      soft: "#e0f2fe",
      border: "#7dd3fc",
      text: "#0369a1",
    }
  }

  if (normalized.includes("javascript")) {
    return {
      accent: "#f59e0b",
      soft: "#fef3c7",
      border: "#fcd34d",
      text: "#b45309",
    }
  }

  if (normalized.includes("machine")) {
    return {
      accent: "#8b5cf6",
      soft: "#ede9fe",
      border: "#c4b5fd",
      text: "#6d28d9",
    }
  }

  if (normalized.includes("security")) {
    return {
      accent: "#ef4444",
      soft: "#fee2e2",
      border: "#fca5a5",
      text: "#b91c1c",
    }
  }

  if (normalized.includes("performance")) {
    return {
      accent: "#14b8a6",
      soft: "#ccfbf1",
      border: "#5eead4",
      text: "#0f766e",
    }
  }

  if (normalized.includes("type")) {
    return {
      accent: "#6366f1",
      soft: "#e0e7ff",
      border: "#a5b4fc",
      text: "#4338ca",
    }
  }

  return {
    accent: "#64748b",
    soft: "#e2e8f0",
    border: "#cbd5e1",
    text: "#475569",
  }
}

const getDifficultyStyles = (difficulty?: string): string => {
  switch (difficulty) {
    case "basic":
      return "bg-green-100 text-green-700"
    case "medium":
      return "bg-yellow-100 text-yellow-700"
    case "hard":
      return "bg-orange-100 text-orange-700"
    case "advance":
      return "bg-rose-100 text-rose-700"
    default:
      return "bg-slate-100 text-slate-700"
  }
}

export const InterviewQuestionCard = ({
  question,
  progress,
  expanded,
  onToggleExpand,
  onToggleQuestionCompletion,
  onToggleSubQuestion,
  onUpdateField,
}: InterviewQuestionCardProps) => {
  const theme = getTheme(question.topic)
  const hasSubQuestions = (question.subQuestions?.length ?? 0) > 0
  const completedSubQuestions =
    question.subQuestions?.filter(
      (subQuestion) => !!progress.subQuestionStatus?.[subQuestion.id]
    ).length ?? 0
  const isCompleted = hasSubQuestions
    ? completedSubQuestions === question.subQuestions?.length
    : progress.completed

  return (
    <article className="w-full rounded-xl border bg-white shadow-sm transition hover:border-gray-300">
      <div className="flex items-start gap-3 p-4">
        <input
          type="checkbox"
          checked={isCompleted}
          disabled={hasSubQuestions}
          onChange={() => onToggleQuestionCompletion(question.id)}
          title={
            hasSubQuestions
              ? "Auto-completed from sub questions"
              : "Mark question complete"
          }
          className="mt-1 h-4 w-4 shrink-0 rounded-lg focus:ring-0 disabled:cursor-not-allowed"
          style={{ accentColor: "#4ade80", borderRadius: "8px" }}
        />

        <button onClick={onToggleExpand} className="min-w-0 flex-1 text-left">
          <p className="text-sm font-medium text-gray-900">
            {question.question}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <p className="text-[10px] font-semibold text-gray-400 uppercase">
              {question.topic} • {question.subtopic}
            </p>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase ${getDifficultyStyles(
                question.difficulty
              )}`}
            >
              {question.difficulty ?? "medium"}
            </span>

            <span
              className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase ${
                isCompleted
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {isCompleted ? "Completed" : "Pending"}
            </span>
          </div>
        </button>

        <button
          onClick={onToggleExpand}
          aria-label={expanded ? "Collapse question" : "Expand question"}
          className="shrink-0 rounded-lg p-1.5 text-gray-600 outline-none hover:bg-gray-100 hover:text-gray-900 focus:ring-0 focus:outline-none"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>

      {expanded && (
        <div className="border-t p-4 pt-3">
          {hasSubQuestions && question.subQuestions && (
            <div className="mb-4 rounded-xl bg-gray-50 p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                    Sub Questions
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Check all items to complete the parent question.
                  </p>
                </div>
                <span
                  className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold shadow-sm ring-1"
                  style={{ color: theme.text, borderColor: theme.border }}
                >
                  {completedSubQuestions}/{question.subQuestions.length} done
                </span>
              </div>

              <div className="space-y-2">
                {question.subQuestions.map((subQuestion) => {
                  const isChecked =
                    !!progress.subQuestionStatus?.[subQuestion.id]

                  return (
                    <label
                      key={subQuestion.id}
                      className="flex items-start gap-3 rounded-lg border px-3 py-2.5 transition"
                      style={{
                        borderColor: isChecked ? theme.border : "#e5e7eb",
                        boxShadow: isChecked
                          ? `inset 3px 0 0 ${theme.accent}`
                          : undefined,
                        backgroundColor: isChecked ? theme.soft : "white",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() =>
                          onToggleSubQuestion(question, subQuestion.id)
                        }
                        className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-lg focus:ring-0"
                        style={{ accentColor: "#4ade80", borderRadius: "8px" }}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {subQuestion.title}
                        </p>
                        <p
                          className="mt-0.5 text-[11px]"
                          style={{ color: theme.text }}
                        >
                          Sub question {subQuestion.id}
                        </p>
                      </div>
                    </label>
                  )
                })}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <input
              type="text"
              placeholder="GitHub Solution URL"
              className="w-full rounded-lg border p-3 text-sm"
              value={progress.githubUrl}
              onChange={(event) =>
                onUpdateField(question.id, "githubUrl", event.target.value)
              }
            />
            <textarea
              placeholder="What did you learn?"
              className="h-28 w-full resize-none rounded-lg border p-3 text-sm"
              value={progress.notes}
              onChange={(event) =>
                onUpdateField(question.id, "notes", event.target.value)
              }
            />
          </div>
        </div>
      )}
    </article>
  )
}
