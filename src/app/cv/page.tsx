import { redirect } from "next/navigation"

const RESUME_URLS = {
  a: "https://ggl.link/aiengineer",
  b: "https://ggl.link/backend",
  fs: "https://ggl.link/fstack",
} as const

const FRONTEND_ROLE = "https://ggl.link/frontend"

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
    Object.keys(searchParams).find((key) => key in RESUME_URLS)

  return resumeType && resumeType in RESUME_URLS
    ? (resumeType as keyof typeof RESUME_URLS)
    : undefined
}

export default async function ResumePage({ searchParams }: ResumePageProps) {
  const resumeType = getResumeType(await searchParams)

  redirect(resumeType ? RESUME_URLS[resumeType] : FRONTEND_ROLE)
}
