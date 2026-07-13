import { Suspense } from "react"

import { getGitHubContributions } from "@/app/api/github-contribution"
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph"
import { Section } from "../ui/section"

export default function GitHubContributions() {
  const contributions = getGitHubContributions()

  return (
    <Section id="github">
      <div className="my-8">
        <Suspense fallback={<GitHubContributionFallback />}>
          <GitHubContributionGraph contributions={contributions} />
        </Suspense>
      </div>
    </Section>
  )
}
