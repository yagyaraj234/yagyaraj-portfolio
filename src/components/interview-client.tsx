"use client"

import { useEffect, useMemo, useState } from "react"
import { useInterviewProgress } from "@/hooks/useInterviewProgress"
import { InterviewQuestion, UserProgress } from "@/types/interview"
import { InterviewFilters } from "@/components/interview/interview-filters"
import { InterviewPagination } from "@/components/interview/interview-pagination"
import { InterviewQuestionCard } from "@/components/interview/interview-question-card"

interface InterviewClientProps {
  initialQuestions: InterviewQuestion[]
}

const PAGE_SIZE = 12

export const InterviewClient = ({ initialQuestions }: InterviewClientProps) => {
  const { progress, updateProgress } = useInterviewProgress()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTopic, setSelectedTopic] = useState<string>("All")
  const [filterStatus, setFilterStatus] = useState<
    "all" | "completed" | "pending"
  >("all")
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const topics = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(initialQuestions.map((question) => question.topic))
      ),
    ],
    [initialQuestions]
  )

  const filteredQuestions = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase()

    return initialQuestions.filter((question) => {
      const matchesQuestion = question.question
        .toLowerCase()
        .includes(lowerSearch)
      const matchesSubQuestions = (question.subQuestions || []).some(
        (subQuestion) => subQuestion.title.toLowerCase().includes(lowerSearch)
      )
      const matchesSearch = matchesQuestion || matchesSubQuestions
      const matchesTopic =
        selectedTopic === "All" || question.topic === selectedTopic
      const questionProgress = progress[question.id]
      const isCompleted =
        (question.subQuestions?.length ?? 0) > 0
          ? question.subQuestions?.every(
              (subQuestion) =>
                !!questionProgress?.subQuestionStatus?.[subQuestion.id]
            )
          : !!questionProgress?.completed
      const matchesStatus =
        filterStatus === "all"
          ? true
          : filterStatus === "completed"
            ? isCompleted
            : !isCompleted

      return matchesSearch && matchesTopic && matchesStatus
    })
  }, [initialQuestions, progress, searchTerm, selectedTopic, filterStatus])

  const totalPages = Math.max(
    1,
    Math.ceil(filteredQuestions.length / PAGE_SIZE)
  )

  useEffect(() => {
    setCurrentPage(1)
    setExpandedId(null)
  }, [searchTerm, selectedTopic, filterStatus])

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  const visibleQuestions = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE
    return filteredQuestions.slice(startIndex, startIndex + PAGE_SIZE)
  }, [filteredQuestions, currentPage])

  const getProgress = (questionId: string): UserProgress => {
    return (
      progress[questionId] || {
        completed: false,
        githubUrl: "",
        notes: "",
        subQuestionStatus: {},
      }
    )
  }

  const updateField = (
    questionId: string,
    field: "githubUrl" | "notes",
    value: string
  ) => {
    const current = getProgress(questionId)
    updateProgress(questionId, { ...current, [field]: value })
  }

  const toggleQuestionCompletion = (questionId: string) => {
    const current = getProgress(questionId)
    updateProgress(questionId, {
      ...current,
      completed: !current.completed,
    })
  }

  const toggleSubQuestion = (
    question: InterviewQuestion,
    subQuestionId: string
  ) => {
    const current = getProgress(question.id)
    const nextSubQuestionStatus = {
      ...(current.subQuestionStatus || {}),
      [subQuestionId]: !current.subQuestionStatus?.[subQuestionId],
    }

    const allSubQuestionsCompleted = (question.subQuestions || []).every(
      (subQuestion) => !!nextSubQuestionStatus[subQuestion.id]
    )

    updateProgress(question.id, {
      ...current,
      subQuestionStatus: nextSubQuestionStatus,
      completed: allSubQuestionsCompleted,
    })
  }

  const handlePreviousPage = () => {
    setCurrentPage((page) => Math.max(1, page - 1))
  }

  const handleNextPage = () => {
    setCurrentPage((page) => Math.min(totalPages, page + 1))
  }

  return (
    <div className="w-full space-y-8 px-6 py-8">
      <InterviewFilters
        topics={topics}
        selectedTopic={selectedTopic}
        onTopicChange={setSelectedTopic}
        selectedStatus={filterStatus}
        onStatusChange={setFilterStatus}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <div className="mx-auto max-w-7xl space-y-4">
        <p className="text-xs font-medium text-gray-500">
          Showing {visibleQuestions.length} of {filteredQuestions.length}{" "}
          questions (Page {currentPage} of {totalPages})
        </p>

        <div className="flex flex-col gap-4">
          {visibleQuestions.map((question) => (
            <InterviewQuestionCard
              key={question.id}
              question={question}
              progress={getProgress(question.id)}
              expanded={expandedId === question.id}
              onToggleExpand={() =>
                setExpandedId((currentId) =>
                  currentId === question.id ? null : question.id
                )
              }
              onToggleQuestionCompletion={toggleQuestionCompletion}
              onToggleSubQuestion={toggleSubQuestion}
              onUpdateField={updateField}
            />
          ))}

          {visibleQuestions.length === 0 && (
            <div className="rounded-xl border border-dashed p-8 text-center text-sm text-gray-500">
              No questions found for selected filters.
            </div>
          )}
        </div>

        <InterviewPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={handlePreviousPage}
          onNext={handleNextPage}
        />
      </div>
    </div>
  )
}
