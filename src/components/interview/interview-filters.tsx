type FilterValue = "all" | "completed" | "pending"

interface InterviewFiltersProps {
  topics: string[]
  selectedTopic: string
  onTopicChange: (topic: string) => void
  selectedStatus: FilterValue
  onStatusChange: (status: FilterValue) => void
  searchTerm: string
  onSearchChange: (value: string) => void
}

const Chip = ({
  active,
  label,
  onClick,
}: {
  active: boolean
  label: string
  onClick: () => void
}) => (
  <button
    aria-pressed={active}
    onClick={onClick}
    className={`rounded-full border px-3 py-1 text-[13px] font-medium transition-colors duration-150 ease-out ${
      active
        ? "border-gray-900 bg-gray-900 text-white"
        : "border-gray-200 bg-white text-gray-600 hover:border-gray-400"
    }`}
  >
    {label}
  </button>
)

export const InterviewFilters = ({
  topics,
  selectedTopic,
  onTopicChange,
  selectedStatus,
  onStatusChange,
  searchTerm,
  onSearchChange,
}: InterviewFiltersProps) => {
  const statusFilters: FilterValue[] = ["all", "completed", "pending"]

  return (
    <header className="mx-auto max-w-7xl space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Frontend Roadmap</h1>

      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Chip
            key={topic}
            label={topic}
            active={selectedTopic === topic}
            onClick={() => onTopicChange(topic)}
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {statusFilters.map((status) => (
          <Chip
            key={status}
            label={status[0].toUpperCase() + status.slice(1)}
            active={selectedStatus === status}
            onClick={() => onStatusChange(status)}
          />
        ))}
      </div>

      <input
        type="search"
        aria-label="Filter by question"
        onKeyDown={(event) => {
          if (event.key === "Escape") onSearchChange("")
        }}
        placeholder="Filter by question..."
        className="w-full rounded-lg border bg-gray-50 p-3 text-base transition-colors duration-150 ease-out focus:bg-white"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </header>
  )
}
