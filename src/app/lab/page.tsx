import Link from "next/link"
import {
  Card,
  CardDescription,
  CardImage,
  CardList,
  CardListItem,
  CardTitle,
  CardContent,
} from "./_components/card"
import VirtualizedListExample from "./_components/virtualised-list-example"

export default function LabPage() {
  return (
    <main role="main">
      <div className="my-8">
        <h1 className="mb-1 text-3xl font-bold tracking-tight">My Lab</h1>
        <p className="text-gray-500 dark:text-gray-400">
          A space where I experiment with components, AI workflows, agents, and
          whatever else catches my curiosity.
        </p>
      </div>

      <div className="flex flex-col gap-6 space-y-4">
        <Card>
          <CardContent>
            <VirtualizedListExample height={300} className="" />
          </CardContent>
          <div className="z-10 flex flex-col gap-4 overflow-hidden border-l border-zinc-200 pl-6 dark:border-zinc-700">
            <CardTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-handwriting mb-4 max-sm:text-4xl!"
            >
              Virtualized List
            </CardTitle>
            <CardDescription>
              A high-performance virtualization implementation that handles
              large datasets with ease. Maintains buttery smooth 60fps scrolling
              by only rendering visible items.
            </CardDescription>
            <CardList>
              <CardListItem>Zero external dependencies</CardListItem>
              <CardListItem>Fully type-safe implementation</CardListItem>
            </CardList>
            <Link href="/lab/virtual-list" className="text-lg">
              VIEW
            </Link>
          </div>
        </Card>
        <Card className="hidden">
          <CardImage
            src="/tooltip/ravaai.webp"
            alt="Virtualized List"
            width={500}
            height={500}
          />
          <div className="flex flex-col gap-4 border-l border-zinc-200 pl-6 dark:border-zinc-700">
            <CardTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-handwriting mb-4 max-sm:text-4xl!"
            >
              Virtualized List
            </CardTitle>
            <CardDescription>
              A custom built basic virtualized list component that renders only
              the items that are visible in the viewport.
            </CardDescription>
            <CardList>
              <CardListItem>~ No external depCndencies</CardListItem>
              <CardListItem>~ 100% Typesafe</CardListItem>
              <CardListItem>~ Customizable</CardListItem>
            </CardList>
          </div>
        </Card>
      </div>
    </main>
  )
}
