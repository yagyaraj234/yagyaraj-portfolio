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
  activeClassName,
  inactiveClassName,
}: {
  active: boolean
  label: string
  onClick: () => void
  activeClassName?: string
  inactiveClassName?: string
}) => (
  <button
    onClick={onClick}
    className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
      active
        ? (activeClassName ?? "border-black bg-black text-white")
        : (inactiveClassName ??
          "border-gray-200 bg-white text-gray-600 hover:border-gray-400")
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
            label={status.toUpperCase()}
            active={selectedStatus === status}
            onClick={() => onStatusChange(status)}
            activeClassName={
              status === "completed"
                ? "border-emerald-600 bg-emerald-600 text-white"
                : status === "pending"
                  ? "border-amber-500 bg-amber-500 text-white"
                  : "border-sky-700 bg-sky-700 text-white"
            }
            inactiveClassName={
              status === "completed"
                ? "border-emerald-200 bg-emerald-50 text-emerald-700 hover:border-emerald-300"
                : status === "pending"
                  ? "border-amber-200 bg-amber-50 text-amber-700 hover:border-amber-300"
                  : "border-sky-200 bg-sky-50 text-sky-700 hover:border-sky-300"
            }
          />
        ))}
      </div>

      <input
        placeholder="Filter by question..."
        className="w-full rounded-lg border bg-gray-50 p-3 text-sm transition focus:bg-white"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </header>
  )
}
