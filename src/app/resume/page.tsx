import { redirect } from "next/navigation"

const RESUME_URLS = {
  a: "https://ggl.link/aiengineer",
  b: "https://ggl.link/backend",
  f: "https://ggl.link/frontend",
} as const

const FULL_STACK_RESUME_URL = "https://ggl.link/fstack"

const VALID_KEYS = new Set(Object.keys(RESUME_URLS))

type ResumePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

function getResumeType(
  searchParams: Record<string, string | string[] | undefined>
): keyof typeof RESUME_URLS | undefined {
  const namedParam =
    searchParams.role ?? searchParams.type ?? searchParams.resume
  const value = Array.isArray(namedParam) ? namedParam[0] : namedParam
  const resumeType =
    value?.toLowerCase() ??
    Object.keys(searchParams).find((key) => VALID_KEYS.has(key.toLowerCase()))

  return resumeType && VALID_KEYS.has(resumeType.toLowerCase())
    ? (resumeType.toLowerCase() as keyof typeof RESUME_URLS)
    : undefined
}

export default async function ResumePage({ searchParams }: ResumePageProps) {
  const resumeType = getResumeType(await searchParams)

  redirect(resumeType ? RESUME_URLS[resumeType] : FULL_STACK_RESUME_URL)
}
