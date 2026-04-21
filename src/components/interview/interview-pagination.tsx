interface InterviewPaginationProps {
  currentPage: number
  totalPages: number
  onPrevious: () => void
  onNext: () => void
}

export const InterviewPagination = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}: InterviewPaginationProps) => {
  return (
    <div className="mt-2 flex items-center justify-between gap-3">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="rounded-md border px-3 py-1.5 text-xs font-semibold text-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-xs font-semibold text-gray-500">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="rounded-md border px-3 py-1.5 text-xs font-semibold text-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}
