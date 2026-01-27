import type { Activity } from "@/app/components/kibo-ui/contribution-graph";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

// Filter contributions to show only last 6 months
export function filterLastSixMonths(contributions: Activity[]): Activity[] {
  if (contributions.length === 0) return [];

  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  return contributions.filter((activity) => {
    const activityDate = new Date(activity.date);
    return activityDate >= sixMonthsAgo;
  });
}

export async function getGitHubContributions() {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${"yagyaraj234"}?y=last`,
      {
        next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
      },
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch contributions: ${res.statusText}`);
    }
    const data = (await res.json()) as GitHubContributionsResponse;
    return data.contributions;
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return [];
  }
}
