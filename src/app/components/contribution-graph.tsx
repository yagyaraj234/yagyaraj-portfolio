"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
} from "@/app/components/kibo-ui/contribution-graph";
import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from "date-fns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import { unstable_cache } from "next/cache";

const maxCount = 20;
const maxLevel = 4;
const now = new Date();
const days = eachDayOfInterval({
  start: startOfYear(now),
  end: endOfYear(now),
});

const data = days.map((date) => {
  const c = Math.round(
    Math.random() * maxCount - Math.random() * (0.8 * maxCount)
  );
  const count = Math.max(0, c);
  const level = Math.ceil((count / maxCount) * maxLevel);

  return {
    date: formatISO(date, { representation: "date" }),
    count,
    level,
  };
});

const ContributionGraphComponent = () => {

  const username = 'yagyaraj234';
  const getCachedContributions = unstable_cache(
    async () => {
      const url = new URL(`/v4/${username}`, 'https://github-contributions-api.jogruber.de');
      const response = await fetch(url);
      const data = (await response.json()) as Response;
      const total = data.total[new Date().getFullYear()];
      return { contributions: data.contributions, total };
    },
    ['github-contributions'],
    { revalidate: 60 * 60 * 24 },
  );


  return (
    <div className="my-12">
      <TooltipProvider>
        <ContributionGraph data={data}>
          <ContributionGraphCalendar>
            {({ activity, dayIndex, weekIndex }) => (
              <Tooltip>
                <TooltipTrigger asChild>
                  <g>
                    <ContributionGraphBlock
                      activity={activity}
                      className="cursor-pointer"
                      dayIndex={dayIndex}
                      weekIndex={weekIndex}
                    />
                  </g>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-semibold">{activity.date}</p>
                  <p>{activity.count} contributions</p>
                </TooltipContent>
              </Tooltip>
            )}
          </ContributionGraphCalendar>
          <ContributionGraphFooter />
        </ContributionGraph>
      </TooltipProvider>
    </div>
  )
};

export default ContributionGraphComponent;
