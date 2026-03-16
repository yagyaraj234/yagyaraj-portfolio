"use client"

import { useState, useEffect, useCallback } from "react"

// ─── Types ───────────────────────────────────────────────────────────────────

type Block = "react" | "design" | "ai" | "comm" | "rest"

interface Resource {
  name: string
  url: string
  type: string
}

interface Task {
  block: Block
  title: string
  desc: string
  resources: Resource[]
}

interface Day {
  day: string
  isSat?: boolean
  isSun?: boolean
  tasks: Task[]
}

interface Week {
  label: string
  days: Day[]
}

// ─── Data ────────────────────────────────────────────────────────────────────

const R = (name: string, url: string, type: string): Resource => ({
  name,
  url,
  type,
})

const WEEKS: Week[] = [
  {
    label: "Week 1",
    days: [
      {
        day: "Monday",
        tasks: [
          {
            block: "react",
            title: "Execution context, call stack & hoisting",
            desc: "Understand how JS creates an execution context (Global + Function) and how the call stack manages function calls in LIFO order. Hoisting moves var declarations and function declarations to the top of their scope at compile time — but not assignments. Try logging a var before it's declared.",
            resources: [
              R(
                "Execution Context – javascript.info",
                "https://javascript.info/closure",
                "Article"
              ),
              R(
                "JS Visualizer 9000 (interactive)",
                "https://www.jsv9000.app/",
                "Tool"
              ),
              R(
                "Hoisting – MDN",
                "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting",
                "Article"
              ),
              R(
                "YDKJS – Scope & Closures (free)",
                "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md",
                "Book"
              ),
            ],
          },
          {
            block: "design",
            title: "Clone Vercel landing page layout",
            desc: "Pick the Vercel.com hero section. Recreate it using HTML + TailwindCSS. Focus on spacing, font weights, and button styles. Don't copy-paste — type every line to build muscle memory. Goal: train your eye for spacing precision.",
            resources: [
              R("Vercel.com (reference)", "https://vercel.com", "Website"),
              R("TailwindCSS Docs", "https://tailwindcss.com/docs", "Docs"),
              R(
                "Kevin Powell – CSS layout tips",
                "https://www.youtube.com/@KevinPowell",
                "YouTube"
              ),
              R(
                "Refactoring UI (book)",
                "https://www.refactoringui.com/",
                "Book"
              ),
            ],
          },
          {
            block: "ai",
            title: "AI product ideation — brainstorm 5 ideas",
            desc: "Spend this session thinking about what problem you want to solve with AI. Write 5 ideas, each with: problem, target user, core AI feature, and how you'd build it. Pick the one that excites you most. Keep it small enough to ship in 3 weeks.",
            resources: [
              R("Anthropic API Docs", "https://docs.anthropic.com", "Docs"),
              R("OpenAI API Docs", "https://platform.openai.com/docs", "Docs"),
              R("Mastra – AI orchestration", "https://mastra.ai/", "Docs"),
              R(
                "Indie Hackers – product ideas",
                "https://www.indiehackers.com/",
                "Community"
              ),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 1 + write 5 sentences",
            desc: "Ask Claude for 12 new professional English words with meaning, Hindi translation, and example. After reading all 12, write 5 original sentences using words from the set. Focus on words you'd use in emails or standups.",
            resources: [
              R(
                "Merriam-Webster Word of the Day",
                "https://www.merriam-webster.com/word-of-the-day",
                "Daily"
              ),
              R(
                "Ludwig.guru – sentence examples",
                "https://ludwig.guru/",
                "Tool"
              ),
              R("Power Thesaurus", "https://www.powerthesaurus.org/", "Tool"),
            ],
          },
        ],
      },
      {
        day: "Tuesday",
        tasks: [
          {
            block: "react",
            title: "Closures, scope chain & lexical environment",
            desc: "A closure is a function that remembers its outer scope even after the outer function returns. The scope chain is how JS looks up variables from inner to outer scope. The lexical environment stores variable bindings — it's what closures hold onto. These are the foundation of React hooks.",
            resources: [
              R(
                "Closures – javascript.info",
                "https://javascript.info/closure",
                "Article"
              ),
              R(
                "YDKJS – Scope & Closures (free)",
                "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md",
                "Book"
              ),
              R(
                "Closure visualized – ui.dev",
                "https://ui.dev/javascript-visualized-scope",
                "Article"
              ),
            ],
          },
          {
            block: "design",
            title: "Recreate a Stripe card component",
            desc: "Go to stripe.com/payments and pick one product card. Recreate it with exact border radius, shadow, padding, icon placement, and font sizing. Goal: train your eye to notice tiny details like 1px borders, 4px corner radiuses, and 14px/16px font size differences.",
            resources: [
              R("Stripe.com (reference)", "https://stripe.com", "Website"),
              R("Box shadow generator", "https://shadows.brumm.af/", "Tool"),
              R(
                "CSS Tricks – card patterns",
                "https://css-tricks.com/",
                "Article"
              ),
            ],
          },
          {
            block: "ai",
            title: "Research tools & frameworks for your product",
            desc: "Based on your chosen idea, research what tech you'll use. Explore Anthropic/OpenAI APIs, vector DBs (Pinecone, Supabase pgvector), and orchestration options. Write your final stack decision with reasoning.",
            resources: [
              R("Anthropic API Docs", "https://docs.anthropic.com", "Docs"),
              R(
                "Supabase Vector Docs",
                "https://supabase.com/docs/guides/ai",
                "Docs"
              ),
              R("LangChain JS Docs", "https://js.langchain.com/docs/", "Docs"),
              R("Vercel AI SDK", "https://sdk.vercel.ai/docs", "Docs"),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 2 + write 5 sentences",
            desc: "New 12 words. Before starting, revise yesterday's 12 words for 5 minutes. Then read new set and write 5 sentences. Try to use words from both sets in your sentences if possible.",
            resources: [
              R(
                "Merriam-Webster",
                "https://www.merriam-webster.com",
                "Website"
              ),
              R(
                "BBC Learning English",
                "https://www.bbc.co.uk/learningenglish",
                "Website"
              ),
              R("Ludwig.guru", "https://ludwig.guru/", "Tool"),
            ],
          },
        ],
      },
      {
        day: "Wednesday",
        tasks: [
          {
            block: "react",
            title: "Event loop, microtasks, macrotasks & async/await",
            desc: "The event loop processes: call stack first, then microtask queue (Promises, queueMicrotask), then macrotask queue (setTimeout, setInterval). Async/await is syntactic sugar over Promises. Understand why `await` pauses execution without blocking the thread. Use Loupe to visualise it.",
            resources: [
              R(
                "Event Loop – javascript.info",
                "https://javascript.info/event-loop",
                "Article"
              ),
              R(
                "Jake Archibald: In the Loop (talk)",
                "https://www.youtube.com/watch?v=cCOL7MC4Pl0",
                "YouTube"
              ),
              R(
                "Loupe – event loop visualiser",
                "http://latentflip.com/loupe/",
                "Tool"
              ),
              R(
                "Microtasks – javascript.info",
                "https://javascript.info/microtask-queue",
                "Article"
              ),
            ],
          },
          {
            block: "design",
            title: "Build a responsive navbar with hover animations",
            desc: "Build a navbar from scratch: logo left, nav links center, CTA button right. Add smooth underline hover on links using CSS ::after pseudo-element with width transition. Make it responsive with a hamburger menu for mobile. No libraries.",
            resources: [
              R(
                "Kevin Powell – navbar tutorial",
                "https://www.youtube.com/@KevinPowell",
                "YouTube"
              ),
              R(
                "CSS Transitions – MDN",
                "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions",
                "Docs"
              ),
              R(
                "CSS Tricks – hamburger menu",
                "https://css-tricks.com/",
                "Article"
              ),
            ],
          },
          {
            block: "ai",
            title: "Define product scope and tech stack",
            desc: "Write a 1-page product spec: problem, solution, max 3 features, tech stack, and what you will NOT build. Keeping scope tight is the hardest and most important skill for solo builders. Share the spec with Claude and get feedback.",
            resources: [
              R(
                "Shape Up – Basecamp (free book)",
                "https://basecamp.com/shapeup",
                "Book"
              ),
              R(
                "Anthropic prompt engineering guide",
                "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
                "Docs"
              ),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 3 + write 5 sentences",
            desc: "New 12 words + 5 sentences. Today's challenge: use 3 words from this set in a short paragraph (4–5 sentences) about something you're learning this week. Writing connected paragraphs is harder — and better — than isolated sentences.",
            resources: [
              R(
                "Merriam-Webster",
                "https://www.merriam-webster.com",
                "Website"
              ),
              R(
                "Oxford Learner's Dictionary",
                "https://www.oxfordlearnersdictionaries.com/",
                "Website"
              ),
            ],
          },
        ],
      },
      {
        day: "Thursday",
        tasks: [
          {
            block: "react",
            title: "Prototypes, prototype chain & the `this` keyword",
            desc: "Every JS object has a hidden [[Prototype]] link. When you access a property, JS walks up the prototype chain until it finds it or hits null. The `this` keyword depends on how a function is called — not where it's defined. Master: implicit, explicit (call/apply/bind), new binding, and arrow functions (no own `this`).",
            resources: [
              R(
                "Prototypes – javascript.info",
                "https://javascript.info/prototype-inheritance",
                "Article"
              ),
              R(
                "this keyword – javascript.info",
                "https://javascript.info/object-methods",
                "Article"
              ),
              R(
                "Prototype chain visualised – ui.dev",
                "https://ui.dev/javascript-visualized-prototypal-inheritance",
                "Article"
              ),
              R(
                "YDKJS – this & Object Prototypes",
                "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/README.md",
                "Book"
              ),
            ],
          },
          {
            block: "design",
            title: "Clone Linear's dashboard sidebar layout",
            desc: "Go to linear.app and study the sidebar + main content layout. Recreate the sidebar navigation structure with icons, labels, and active states. Focus on how they use subtle backgrounds, tight spacing, and muted colors to create a clean, information-dense UI.",
            resources: [
              R("Linear.app (reference)", "https://linear.app", "Website"),
              R(
                "CSS Grid – MDN",
                "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",
                "Docs"
              ),
              R(
                "Sidebar layout patterns – Flowbite",
                "https://flowbite.com/docs/components/sidebar/",
                "Docs"
              ),
            ],
          },
          {
            block: "ai",
            title: "Set up project repo and initial file structure",
            desc: "Scaffold your project: create the GitHub repo, set up Next.js + Tailwind, connect your AI API key via .env, write a README.md with product description. Deploy a blank version to Vercel. Having your pipeline ready from day 1 saves hours later.",
            resources: [
              R(
                "Next.js getting started",
                "https://nextjs.org/docs/getting-started",
                "Docs"
              ),
              R("Vercel deployment guide", "https://vercel.com/docs", "Docs"),
              R(
                "Anthropic API Quickstart",
                "https://docs.anthropic.com/en/api/getting-started",
                "Docs"
              ),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 4 + write 5 sentences",
            desc: "New set + revise sets 1–3 (10 min). Write 5 sentences. Then pick your 3 favourite words from this week and explain each one out loud or in writing — in your own words, no copy-pasting the definition.",
            resources: [
              R(
                "Anki – spaced repetition flashcards",
                "https://apps.ankiweb.net/",
                "Tool"
              ),
              R("Vocabulary.com", "https://www.vocabulary.com/", "Website"),
            ],
          },
        ],
      },
      {
        day: "Friday",
        tasks: [
          {
            block: "react",
            title: "ES6+ internals — generators, iterators & WeakMap",
            desc: "The iterator protocol: an object with next() returning {value, done}. for...of uses iterators. Generators are pausable functions using yield — they return an iterator. WeakMap holds weak object references (GC-friendly). These show up in library internals and advanced patterns.",
            resources: [
              R(
                "Iterators & Generators – javascript.info",
                "https://javascript.info/generators",
                "Article"
              ),
              R(
                "WeakMap – MDN",
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap",
                "Docs"
              ),
              R(
                "ES6 Features overview",
                "http://es6-features.org/",
                "Reference"
              ),
            ],
          },
          {
            block: "design",
            title: "Weekly design review — fix 2 things",
            desc: "Open all 4 UIs from this week. For each, write down 1 thing to improve. Then actually fix at least 2. Compare your work to the original reference. Look for: spacing inconsistencies, font size mismatches, color contrast issues, and alignment problems.",
            resources: [
              R(
                "Dribbble – design inspiration",
                "https://dribbble.com",
                "Website"
              ),
              R(
                "Checklist Design – best practices",
                "https://www.checklist.design/",
                "Website"
              ),
              R(
                "Contrast checker – WebAIM",
                "https://webaim.org/resources/contrastchecker/",
                "Tool"
              ),
            ],
          },
          {
            block: "ai",
            title: "Build the first feature of your AI product",
            desc: "Build one end-to-end: user input → API call → display result. Keep it simple but working. Don't worry about UI polish yet — focus on the core AI interaction loop. Add basic error handling and a loading state. Commit and push.",
            resources: [
              R(
                "Anthropic Messages API",
                "https://docs.anthropic.com/en/api/messages",
                "Docs"
              ),
              R("Vercel AI SDK", "https://sdk.vercel.ai/docs", "Docs"),
              R(
                "Next.js API Route Handlers",
                "https://nextjs.org/docs/app/building-your-application/routing/route-handlers",
                "Docs"
              ),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 5 + full week review",
            desc: "Final set of the week. Write 5 sentences. Then do a full week review: go through all 60 words from sets 1–5. Mark any you've forgotten. Write 3 sentences using the words you found hardest this week.",
            resources: [
              R(
                "Anki – spaced repetition",
                "https://apps.ankiweb.net/",
                "Tool"
              ),
              R("WordReference", "https://www.wordreference.com/", "Website"),
            ],
          },
        ],
      },
      {
        day: "Saturday",
        isSat: true,
        tasks: [
          {
            block: "comm",
            title: "Hour 1 — Vocabulary deep review (all week sets)",
            desc: "Go through all 60 words. Cover the meaning and try to recall before looking. Score yourself. Re-read all example sentences you wrote this week and note any grammatical mistakes.",
            resources: [
              R("Anki", "https://apps.ankiweb.net/", "Tool"),
              R("Quizlet", "https://quizlet.com", "Tool"),
            ],
          },
          {
            block: "comm",
            title: "Hour 2 — Read 1–2 tech articles, study sentence structure",
            desc: "Read slowly. For each paragraph notice: sentence length variation, connective words (however, therefore, consequently), and how technical terms are introduced. Pick 2 sentence structures you like and write your own versions.",
            resources: [
              R("Hacker News", "https://news.ycombinator.com", "Website"),
              R(
                "The Pragmatic Engineer",
                "https://newsletter.pragmaticengineer.com/",
                "Newsletter"
              ),
              R(
                "Paul Graham Essays",
                "https://paulgraham.com/articles.html",
                "Blog"
              ),
            ],
          },
          {
            block: "comm",
            title: "Hour 3 — Write a short blog intro or LinkedIn post",
            desc: "Write 150–200 words about something you learned this week. Write a first draft, then improve it once. Focus on: clear opening sentence, 2–3 supporting points, closing thought.",
            resources: [
              R(
                "Hemingway App – readability",
                "https://hemingwayapp.com/",
                "Tool"
              ),
              R("Grammarly", "https://grammarly.com", "Tool"),
            ],
          },
          {
            block: "comm",
            title: "Hour 4 — YouTube shadowing (TED / tech talk)",
            desc: "Shadowing technique: play a sentence, pause, repeat out loud mimicking the speaker's rhythm and tone exactly. Do this for 20–30 min. Then watch one full video at normal speed.",
            resources: [
              R("TED Talks", "https://www.ted.com/talks", "YouTube"),
              R(
                "Fireship – fast-paced tech",
                "https://www.youtube.com/@Fireship",
                "YouTube"
              ),
              R(
                "English with Lucy",
                "https://www.youtube.com/@EnglishwithLucy",
                "YouTube"
              ),
            ],
          },
          {
            block: "comm",
            title: "Hour 5 — Conversation practice with Claude",
            desc: "Open Claude and say: 'Let's have a 30-minute English conversation. Correct my grammar naturally. Topic: my learnings this week.' Review all corrections at the end.",
            resources: [R("Claude.ai", "https://claude.ai", "Tool")],
          },
          {
            block: "comm",
            title: "Hour 6 — Review mistakes + plan next Saturday",
            desc: "Write: words you keep forgetting, grammar patterns you made errors in, and 1 communication goal for next week. Plan Saturday's article topic and YouTube video in advance.",
            resources: [R("Notion", "https://notion.so", "Tool")],
          },
        ],
      },
      {
        day: "Sunday",
        isSun: true,
        tasks: [
          {
            block: "rest",
            title: "Rest day — light revision only if needed",
            desc: "Rest is part of learning. Your brain consolidates memories during sleep and downtime. If you want to do something, spend max 20 mins re-reading notes — no new content today.",
            resources: [
              R(
                "Huberman Lab – why rest improves learning",
                "https://www.hubermanlab.com/",
                "Podcast"
              ),
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Week 2",
    days: [
      {
        day: "Monday",
        tasks: [
          {
            block: "react",
            title: "JSX compilation & React.createElement",
            desc: "JSX is syntactic sugar that Babel transforms into React.createElement(type, props, ...children) calls. Understanding this helps you debug weird JSX errors. Try writing a component in pure createElement calls — no JSX.",
            resources: [
              R(
                "JSX in depth – React docs",
                "https://react.dev/learn/writing-markup-with-jsx",
                "Docs"
              ),
              R(
                "Babel REPL – see JSX compiled live",
                "https://babeljs.io/repl",
                "Tool"
              ),
              R(
                "React.createElement – React docs",
                "https://react.dev/reference/react/createElement",
                "Docs"
              ),
            ],
          },
          {
            block: "design",
            title: "Typography deep dive — pair fonts creatively",
            desc: "3 rules of font pairing: contrast in style (serif + sans), consistency in mood, and hierarchy in size. Build a typography demo page with a display heading, subheading, body, and caption. Avoid Inter and Roboto.",
            resources: [
              R("Google Fonts", "https://fonts.google.com", "Tool"),
              R("Fontpair.co", "https://www.fontpair.co/", "Website"),
              R("Typescale tool", "https://typescale.com/", "Tool"),
            ],
          },
          {
            block: "ai",
            title: "Build the core AI feature (prompt + API)",
            desc: "Write your system prompt carefully — this is the most impactful thing you'll write. Test multiple prompt versions. Build the full request/response cycle with error handling. Add a loading state. Stream the response if possible.",
            resources: [
              R(
                "Anthropic prompt engineering guide",
                "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
                "Docs"
              ),
              R(
                "Vercel AI SDK streaming",
                "https://sdk.vercel.ai/docs/ai-sdk-ui/streaming",
                "Docs"
              ),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 6 + write 5 sentences",
            desc: "New week, new set. Spend 5 mins revising last week's hardest words first. Then 12 new words + 5 sentences. This week's challenge: use the vocabulary in a short product description for your AI project.",
            resources: [
              R(
                "Merriam-Webster",
                "https://www.merriam-webster.com",
                "Website"
              ),
              R("Ludwig.guru", "https://ludwig.guru/", "Tool"),
            ],
          },
        ],
      },
      {
        day: "Tuesday",
        tasks: [
          {
            block: "react",
            title: "Virtual DOM, diffing algorithm & reconciliation",
            desc: "React maintains a virtual DOM — a JS object tree representing the UI. On state change, React creates a new virtual tree and diffs it using a heuristic O(n) algorithm: same type = update props, different type = replace, lists use the key prop. Only real differences get applied to the DOM.",
            resources: [
              R(
                "Reconciliation – React docs",
                "https://legacy.reactjs.org/docs/reconciliation.html",
                "Docs"
              ),
              R(
                "Why React renders – ui.dev",
                "https://ui.dev/why-react-renders",
                "Article"
              ),
              R(
                "Inside React – Overreacted",
                "https://overreacted.io/",
                "Blog"
              ),
            ],
          },
          {
            block: "design",
            title: "Color theory — build a cohesive palette",
            desc: "Learn the 60-30-10 rule: 60% dominant, 30% secondary, 10% accent. Build a 5-color palette using Coolors. Apply it to a simple card layout. Ensure WCAG AA contrast ratio (4.5:1) for all text.",
            resources: [
              R("Coolors.co – palette generator", "https://coolors.co", "Tool"),
              R(
                "Radix UI colors",
                "https://www.radix-ui.com/colors",
                "Reference"
              ),
              R(
                "WebAIM contrast checker",
                "https://webaim.org/resources/contrastchecker/",
                "Tool"
              ),
            ],
          },
          {
            block: "ai",
            title: "Build the first UI screens for your product",
            desc: "Design and build the main screen where the user interacts with your AI feature. Focus on: input area, output display, and loading state. It doesn't need to be beautiful yet — focus on the interaction flow being clear and usable.",
            resources: [
              R("Shadcn/ui components", "https://ui.shadcn.com/", "Docs"),
              R(
                "Tailwind UI components",
                "https://tailwindcss.com/docs",
                "Docs"
              ),
              R(
                "Vercel AI SDK UI hooks",
                "https://sdk.vercel.ai/docs/ai-sdk-ui",
                "Docs"
              ),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 7 + write 5 sentences",
            desc: "New 12 words + 5 sentences. Extra challenge: record yourself reading your sentences out loud on your phone. Listen back and notice any pronunciation issues. This is uncomfortable but very effective.",
            resources: [
              R("Forvo – word pronunciation", "https://forvo.com/", "Website"),
              R(
                "YouGlish – words in real context",
                "https://youglish.com/",
                "Tool"
              ),
            ],
          },
        ],
      },
      {
        day: "Wednesday",
        tasks: [
          {
            block: "react",
            title: "React Fiber architecture — deep dive",
            desc: "Fiber is React's reimplementation of the reconciler (React 16+). Each component maps to a fiber node — a unit of work. Fiber enables incremental rendering: React can pause, abort, or reuse work. This enables Suspense, Concurrent Mode, and useTransition.",
            resources: [
              R(
                "React Fiber Architecture – GitHub",
                "https://github.com/acdlite/react-fiber-architecture",
                "Article"
              ),
              R(
                "Inside Fiber – Indepth.dev",
                "https://indepth.dev/posts/1008/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react",
                "Article"
              ),
              R(
                "Lin Clark – A Cartoon Guide to Fiber",
                "https://www.youtube.com/watch?v=ZCuYPiUIONs",
                "YouTube"
              ),
            ],
          },
          {
            block: "design",
            title: "Spacing and layout — 8px grid practice",
            desc: "Most great design systems use a base-8 spacing scale (4, 8, 12, 16, 24, 32, 48, 64). Build a page layout using only multiples of 8 for all padding, margin, and gap values. Notice how it creates natural visual rhythm.",
            resources: [
              R(
                "8-Point Grid System",
                "https://spec.fm/specifics/8-pt-grid",
                "Article"
              ),
              R(
                "Tailwind spacing scale",
                "https://tailwindcss.com/docs/customizing-spacing",
                "Docs"
              ),
            ],
          },
          {
            block: "ai",
            title: "Test your AI product end-to-end",
            desc: "Test as a new user would. Check: edge cases in prompts, empty states, error states, slow network (throttle in DevTools), and mobile view. Write down every bug and UX issue. Fix the top 3 most impactful ones today.",
            resources: [
              R(
                "Chrome DevTools – network throttling",
                "https://developer.chrome.com/docs/devtools/network/",
                "Docs"
              ),
              R(
                "Empty states gallery – emptystat.es",
                "https://emptystat.es/",
                "Website"
              ),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 8 + write 5 sentences",
            desc: "New 12 words + 5 sentences. Mid-week challenge: write a 3-sentence professional email to a hypothetical client explaining a project update. Use professional vocabulary naturally.",
            resources: [
              R(
                "BBC English at Work",
                "https://www.bbc.co.uk/learningenglish/english/features/english-at-work",
                "Website"
              ),
              R("Grammarly", "https://grammarly.com", "Tool"),
            ],
          },
        ],
      },
      {
        day: "Thursday",
        tasks: [
          {
            block: "react",
            title: "Hooks internals — useState & useEffect under the hood",
            desc: "Hooks are stored as a linked list on the fiber node. This is why hooks can't be called conditionally — React relies on the same call order every render. useState stores state in a hook object. useEffect schedules effects after paint. The dependency array is compared with Object.is().",
            resources: [
              R(
                "Why hooks rely on call order – Overreacted",
                "https://overreacted.io/why-do-hooks-rely-on-call-order/",
                "Blog"
              ),
              R(
                "A complete guide to useEffect",
                "https://overreacted.io/a-complete-guide-to-useeffect/",
                "Blog"
              ),
              R(
                "How hooks work – ui.dev",
                "https://ui.dev/why-react-hooks",
                "Article"
              ),
            ],
          },
          {
            block: "design",
            title: "Clone a section from Raycast's website",
            desc: "Raycast.com has exceptional typography and UI. Pick the features grid or command palette section. Recreate it focusing on: font size hierarchy, icon usage, and subtle border/background patterns. Pay attention to how much whitespace they use.",
            resources: [
              R(
                "Raycast.com (reference)",
                "https://www.raycast.com",
                "Website"
              ),
              R(
                "CSS Grid – complete guide",
                "https://css-tricks.com/snippets/css/complete-guide-grid/",
                "Article"
              ),
              R(
                "Heroicons – SVG icon library",
                "https://heroicons.com/",
                "Tool"
              ),
            ],
          },
          {
            block: "ai",
            title: "Iterate on UI — polish interactions and fix bugs",
            desc: "Focus on: better empty states, clearer loading indicators, helpful error messages (not technical ones). Verify your UI works on mobile. Test on actual phone if possible.",
            resources: [
              R(
                "Empty states gallery – emptystat.es",
                "https://emptystat.es/",
                "Website"
              ),
              R(
                "Error message guidelines – NN Group",
                "https://www.nngroup.com/articles/error-message-guidelines/",
                "Article"
              ),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 9 + write 5 sentences",
            desc: "New 12 words + 5 sentences. This session: speak your 5 sentences out loud before writing them. Saying something before writing helps with both retention and spoken fluency.",
            resources: [
              R("Forvo", "https://forvo.com/", "Website"),
              R(
                "BBC Learning English",
                "https://www.bbc.co.uk/learningenglish",
                "Website"
              ),
            ],
          },
        ],
      },
      {
        day: "Friday",
        tasks: [
          {
            block: "react",
            title: "Re-render triggers, batching & flushSync",
            desc: "React re-renders when: state changes, parent re-renders, or context value changes. In React 18+, automatic batching groups multiple state updates in the same event handler into one render. flushSync forces synchronous rendering outside the normal batching (use sparingly).",
            resources: [
              R(
                "React re-renders guide – ui.dev",
                "https://ui.dev/why-react-renders",
                "Article"
              ),
              R(
                "Automatic batching – React 18 blog",
                "https://react.dev/blog/2022/03/29/react-v18",
                "Docs"
              ),
              R(
                "flushSync – React docs",
                "https://react.dev/reference/react-dom/flushSync",
                "Docs"
              ),
            ],
          },
          {
            block: "design",
            title: "Weekly design review — compare with Dribbble",
            desc: "Find 3 Dribbble shots in your product category. Compare them to your work. For each, identify one specific technique you haven't tried: gradient borders, glassmorphism, illustrated backgrounds, etc. Implement one of them.",
            resources: [
              R("Dribbble", "https://dribbble.com", "Website"),
              R("Mobbin – mobile UI patterns", "https://mobbin.com", "Website"),
              R(
                "Screenlane – UI inspiration",
                "https://screenlane.com/",
                "Website"
              ),
            ],
          },
          {
            block: "ai",
            title: "Add a second AI feature or improve the existing one",
            desc: "Add either: a second feature (history, export, settings) or meaningfully improve your core feature (streaming response, better prompt, richer output). Deploy the update by end of session.",
            resources: [
              R(
                "Streaming with Anthropic API",
                "https://docs.anthropic.com/en/api/streaming",
                "Docs"
              ),
              R(
                "Next.js API routes",
                "https://nextjs.org/docs/app/building-your-application/routing/route-handlers",
                "Docs"
              ),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 10 + full week review",
            desc: "New set + 5 sentences. Then review all sets 6–10 (60 words). Write a short paragraph (5–6 sentences) about your week using as many vocabulary words as naturally fit.",
            resources: [
              R("Anki", "https://apps.ankiweb.net/", "Tool"),
              R("Hemingway App", "https://hemingwayapp.com/", "Tool"),
            ],
          },
        ],
      },
      {
        day: "Saturday",
        isSat: true,
        tasks: [
          {
            block: "comm",
            title: "Hour 1 — Vocabulary deep review (sets 6–10)",
            desc: "Cover all 60 words. Self-test: hide the meaning and try to recall. For words you miss, write a new example sentence on the spot.",
            resources: [
              R("Quizlet", "https://quizlet.com", "Tool"),
              R("Anki", "https://apps.ankiweb.net/", "Tool"),
            ],
          },
          {
            block: "comm",
            title: "Hour 2 — Read and analyse 2 well-written articles",
            desc: "Read once for content, then again to underline: sentence openers, transition phrases, and vocabulary from your sets. Write down 5 phrases you want to reuse.",
            resources: [
              R("Stratechery", "https://stratechery.com/", "Newsletter"),
              R(
                "Paul Graham Essays",
                "https://paulgraham.com/articles.html",
                "Blog"
              ),
            ],
          },
          {
            block: "comm",
            title: "Hour 3 — Write a product description for your AI product",
            desc: "Write 200 words: what your product does, who it's for, why it's useful. No jargon. Write as if explaining to a smart non-technical friend. Edit twice, then share with Claude for feedback.",
            resources: [
              R("Hemingway App", "https://hemingwayapp.com/", "Tool"),
              R("Claude.ai", "https://claude.ai", "Tool"),
            ],
          },
          {
            block: "comm",
            title: "Hour 4 — YouTube shadowing session",
            desc: "Same technique as last week. Try a slightly faster speaker. After shadowing, pick one 2-minute clip and repeat it 3 times trying to perfectly match the speaker's natural rhythm.",
            resources: [
              R("TED Talks", "https://www.ted.com/talks", "YouTube"),
              R("Fireship", "https://www.youtube.com/@Fireship", "YouTube"),
            ],
          },
          {
            block: "comm",
            title: "Hour 5 — Conversation practice with Claude",
            desc: "Explain one technical concept you learned this week (event loop, Fiber, etc.) in plain English to Claude as if teaching a junior developer. Ask Claude to point out unclear explanations or grammar issues.",
            resources: [R("Claude.ai", "https://claude.ai", "Tool")],
          },
          {
            block: "comm",
            title: "Hour 6 — Mistakes review + week 3 planning",
            desc: "Log grammar corrections from this week. Look for patterns — same mistake repeatedly? Plan next Saturday in advance: pick the article and video now.",
            resources: [R("Notion", "https://notion.so", "Tool")],
          },
        ],
      },
      {
        day: "Sunday",
        isSun: true,
        tasks: [
          {
            block: "rest",
            title: "Rest day — optional light review",
            desc: "If you want to do something, re-read vocabulary sentences from the week or watch one short tech video. Keep it under 20 minutes.",
            resources: [],
          },
        ],
      },
    ],
  },
  {
    label: "Week 3",
    days: [
      {
        day: "Monday",
        tasks: [
          {
            block: "react",
            title: "memo, useMemo & useCallback — when and why",
            desc: "React.memo prevents re-rendering if props haven't changed (shallow comparison). useMemo memoizes an expensive computed value. useCallback memoizes a function reference. Critical insight: these have a cost — only apply when you've profiled a real performance issue.",
            resources: [
              R(
                "useMemo – React docs",
                "https://react.dev/reference/react/useMemo",
                "Docs"
              ),
              R(
                "useCallback – React docs",
                "https://react.dev/reference/react/useCallback",
                "Docs"
              ),
              R(
                "When to useMemo – Kent C. Dodds",
                "https://kentcdodds.com/blog/usememo-and-usecallback",
                "Blog"
              ),
              R(
                "React DevTools Profiler",
                "https://react.dev/learn/react-developer-tools",
                "Tool"
              ),
            ],
          },
          {
            block: "design",
            title: "Build a full landing page from scratch",
            desc: "No cloning this time — design and build your own original landing page. Include: hero, features section, social proof, and CTA. Apply everything from weeks 1–2: 8px spacing system, font pairing, cohesive color palette, and responsive layout.",
            resources: [
              R(
                "Landing page examples – Lapa Ninja",
                "https://www.lapa.ninja/",
                "Website"
              ),
              R("Laws of UX", "https://lawsofux.com/", "Website"),
            ],
          },
          {
            block: "ai",
            title: "Deploy your AI product to production",
            desc: "Deploy to Vercel. Set up proper environment variables — ensure API keys are never exposed on the client side. Test the deployed version thoroughly on mobile and desktop. Share the live URL.",
            resources: [
              R(
                "Vercel deployment docs",
                "https://vercel.com/docs/deployments/overview",
                "Docs"
              ),
              R(
                "Next.js environment variables",
                "https://nextjs.org/docs/app/building-your-application/configuring/environment-variables",
                "Docs"
              ),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 11 + write 5 sentences",
            desc: "New 12 words + 5 sentences. From this week onwards: try to use new vocabulary naturally in your daily messages — Slack, WhatsApp, emails. Organic usage is the best reinforcement.",
            resources: [
              R(
                "Merriam-Webster",
                "https://www.merriam-webster.com",
                "Website"
              ),
              R("Power Thesaurus", "https://www.powerthesaurus.org/", "Tool"),
            ],
          },
        ],
      },
      {
        day: "Tuesday",
        tasks: [
          {
            block: "react",
            title: "Custom hooks — patterns and composability",
            desc: "Custom hooks let you extract stateful logic into reusable functions. A custom hook must call at least one built-in hook. Master common patterns: useDebounce, useFetch, useLocalStorage, useMediaQuery.",
            resources: [
              R(
                "Building custom hooks – React docs",
                "https://react.dev/learn/reusing-logic-with-custom-hooks",
                "Docs"
              ),
              R(
                "usehooks.com – custom hook recipes",
                "https://usehooks.com/",
                "Website"
              ),
              R(
                "Custom hooks patterns – Kent C. Dodds",
                "https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks",
                "Blog"
              ),
            ],
          },
          {
            block: "design",
            title: "Add micro-animations to your landing page",
            desc: "Add 2–3 purposeful animations: fade-in on scroll (Intersection Observer), satisfying button hover state, smooth underline on nav links. Rule: animations should reinforce interactions, not distract.",
            resources: [
              R(
                "CSS animations – MDN",
                "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations",
                "Docs"
              ),
              R(
                "Intersection Observer – MDN",
                "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API",
                "Docs"
              ),
              R("Animate.css", "https://animate.style/", "Tool"),
            ],
          },
          {
            block: "ai",
            title: "Write README and product description",
            desc: "A great README has: product name + one-liner, screenshot or demo GIF, features list, tech stack, setup instructions, and live link. Use Loom for a quick demo recording.",
            resources: [
              R("Readme.so – README builder", "https://readme.so/", "Tool"),
              R(
                "Awesome README examples – GitHub",
                "https://github.com/matiassingers/awesome-readme",
                "GitHub"
              ),
              R("Loom – screen recording", "https://www.loom.com", "Tool"),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 12 + write 5 sentences",
            desc: "New 12 words + 5 sentences. This week's challenge: draft a 3-sentence LinkedIn post about something you shipped or learned. Use professional vocabulary naturally.",
            resources: [
              R("Hemingway App", "https://hemingwayapp.com/", "Tool"),
              R("Grammarly", "https://grammarly.com", "Tool"),
            ],
          },
        ],
      },
      {
        day: "Wednesday",
        tasks: [
          {
            block: "react",
            title: "Context internals — when it causes re-renders",
            desc: "Every component calling useContext re-renders when the context value reference changes — even if the specific data it uses didn't change. Solutions: split contexts by update frequency, memoize the value with useMemo, or use Zustand.",
            resources: [
              R(
                "useContext – React docs",
                "https://react.dev/reference/react/useContext",
                "Docs"
              ),
              R(
                "Context performance – Kent C. Dodds",
                "https://kentcdodds.com/blog/how-to-use-react-context-effectively",
                "Blog"
              ),
              R(
                "Before you use context – React docs",
                "https://react.dev/learn/passing-data-deeply-with-context",
                "Docs"
              ),
            ],
          },
          {
            block: "design",
            title: "Dark mode — adapt your landing page",
            desc: "Add a dark mode toggle. Use CSS custom properties and toggle a class on the html element. Study how Vercel and Linear handle dark mode — they use different shades for dark surfaces, not just color inversions.",
            resources: [
              R(
                "Dark mode in CSS – web.dev",
                "https://web.dev/prefers-color-scheme/",
                "Article"
              ),
              R(
                "CSS custom properties – MDN",
                "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
                "Docs"
              ),
              R(
                "Radix UI dark mode colors",
                "https://www.radix-ui.com/colors",
                "Reference"
              ),
            ],
          },
          {
            block: "ai",
            title: "Share product and gather feedback",
            desc: "Share your product with at least 3 people. Ask specific questions: 'What was confusing?', 'Did you understand what it does immediately?', 'Would you use this again?' Write down every piece of feedback.",
            resources: [
              R(
                "Indie Hackers community",
                "https://www.indiehackers.com/",
                "Community"
              ),
              R("Product Hunt", "https://www.producthunt.com/", "Website"),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 13 + write 5 sentences",
            desc: "New 12 words + 5 sentences. Extra: rewrite one of your sentences from earlier this week using 2 words from today's new set. Combining old and new vocabulary accelerates retention.",
            resources: [
              R("Vocabulary.com", "https://www.vocabulary.com/", "Website"),
              R("WordReference", "https://www.wordreference.com/", "Website"),
            ],
          },
        ],
      },
      {
        day: "Thursday",
        tasks: [
          {
            block: "react",
            title: "Zustand & Redux basics — state management internals",
            desc: "Redux: single store, pure reducer functions, flux pattern (action → reducer → state → view). Zustand: simpler — a store is just a hook backed by a closure with set and get. Know when to reach for external state vs lifting state up.",
            resources: [
              R(
                "Zustand docs",
                "https://docs.pmnd.rs/zustand/getting-started/introduction",
                "Docs"
              ),
              R(
                "Redux fundamentals – official",
                "https://redux.js.org/tutorials/fundamentals/part-1-overview",
                "Docs"
              ),
              R(
                "When do you need Redux? – Overreacted",
                "https://overreacted.io/",
                "Blog"
              ),
            ],
          },
          {
            block: "design",
            title: "Mobile responsiveness — deep practice",
            desc: "Make your landing page fully mobile-responsive. Test at: 375px (iPhone SE), 390px (iPhone 14), 768px (tablet). Common issues: text too small, tap targets too close (min 44px), images overflow, nav needs mobile menu.",
            resources: [
              R(
                "Responsive design – MDN",
                "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
                "Docs"
              ),
              R(
                "Mobile-first CSS – Kevin Powell",
                "https://www.youtube.com/@KevinPowell",
                "YouTube"
              ),
            ],
          },
          {
            block: "ai",
            title: "Prioritise and implement feedback improvements",
            desc: "Sort your feedback by impact vs effort. Pick the 2–3 highest impact / lowest effort improvements and implement them. Ship an updated version. Write a one-paragraph changelog.",
            resources: [
              R(
                "Impact vs effort matrix – NN Group",
                "https://www.nngroup.com/articles/prioritization-matrices/",
                "Article"
              ),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 14 + write 5 sentences",
            desc: "New 12 words + 5 sentences. Also: create a personal top-20 cheat sheet — your favourite words from all sets that you want to actively use in daily communication.",
            resources: [
              R("Anki", "https://apps.ankiweb.net/", "Tool"),
              R("Notion", "https://notion.so", "Tool"),
            ],
          },
        ],
      },
      {
        day: "Friday",
        tasks: [
          {
            block: "react",
            title: "Code splitting, lazy loading & Suspense",
            desc: "Code splitting breaks your bundle into smaller chunks loaded on demand. React.lazy() + Suspense lets you lazy-load components. In Next.js, use dynamic(). Route-level splitting is almost always worth it — component-level only when the component is large and not used on first render.",
            resources: [
              R(
                "React.lazy – React docs",
                "https://react.dev/reference/react/lazy",
                "Docs"
              ),
              R(
                "Next.js dynamic imports",
                "https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading",
                "Docs"
              ),
              R(
                "Suspense – React docs",
                "https://react.dev/reference/react/Suspense",
                "Docs"
              ),
            ],
          },
          {
            block: "design",
            title: "Weekly design review — before/after comparison",
            desc: "Take screenshots of your Week 1 design work. Compare side-by-side with this week's work. Write down 3 concrete things that improved. Find one area still weak and make a plan.",
            resources: [
              R(
                "Screely – beautiful screenshots",
                "https://screely.com/",
                "Tool"
              ),
              R("Figma – for mockups", "https://figma.com", "Tool"),
            ],
          },
          {
            block: "ai",
            title: "Plan product 2 or add a major feature to product 1",
            desc: "Either scope your second AI product (repeat the Week 1 ideation process) or add a major feature: user auth, saving history, export, or a dashboard. Whatever you choose, commit to it and start scaffolding today.",
            resources: [
              R("Supabase – auth + DB", "https://supabase.com", "Docs"),
              R("Clerk – authentication", "https://clerk.com", "Docs"),
              R("NextAuth.js", "https://next-auth.js.org/", "Docs"),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 15 + full week review",
            desc: "New set + 5 sentences. Review all sets 11–15. Write a 100-word paragraph about your AI product journey so far — use as much vocabulary from your sets as naturally fits.",
            resources: [
              R("Hemingway App", "https://hemingwayapp.com/", "Tool"),
              R("Grammarly", "https://grammarly.com", "Tool"),
            ],
          },
        ],
      },
      {
        day: "Saturday",
        isSat: true,
        tasks: [
          {
            block: "comm",
            title: "Hour 1 — Vocabulary deep review (sets 11–15)",
            desc: "Full 60-word review. Sort into 3 groups: know well / shaky / forgotten. Focus remaining time on the last two groups.",
            resources: [R("Anki", "https://apps.ankiweb.net/", "Tool")],
          },
          {
            block: "comm",
            title: "Hour 2 — Read and take notes on 2 long articles",
            desc: "Pick articles 1500+ words. Read actively: underline topic sentences, note paragraph transitions, identify the thesis. Write a 3-sentence summary of each in your own words.",
            resources: [
              R(
                "Paul Graham Essays",
                "https://paulgraham.com/articles.html",
                "Blog"
              ),
              R("Stratechery", "https://stratechery.com/", "Newsletter"),
            ],
          },
          {
            block: "comm",
            title: "Hour 3 — Write a blog post about your AI product",
            desc: "Write 300–400 words: what you built, why, what you learned, what was hardest. Publish it on Dev.to or LinkedIn.",
            resources: [
              R("Dev.to – developer blog", "https://dev.to", "Website"),
              R("Hemingway App", "https://hemingwayapp.com/", "Tool"),
            ],
          },
          {
            block: "comm",
            title: "Hour 4 — YouTube shadowing + product pitch practice",
            desc: "After shadowing, practice explaining your AI product out loud as if presenting to an interviewer. 2 minutes max. Record yourself and listen back.",
            resources: [
              R("TED Talks", "https://www.ted.com/talks", "YouTube"),
              R(
                "Y Combinator startup talks",
                "https://www.youtube.com/@ycombinator",
                "YouTube"
              ),
            ],
          },
          {
            block: "comm",
            title: "Hour 5 — Mock interview with Claude (explain your product)",
            desc: "Tell Claude: 'Play a senior engineer interviewing me. Ask about my AI product: what it does, how I built it, what challenges I faced.' Answer everything in English. Ask for a communication assessment at the end.",
            resources: [R("Claude.ai", "https://claude.ai", "Tool")],
          },
          {
            block: "comm",
            title: "Hour 6 — Mistakes log + plan final week",
            desc: "Review all mistakes from 3 weeks. What patterns repeat? Plan week 4's Saturday content in advance. Set one specific communication goal for the final week.",
            resources: [R("Notion", "https://notion.so", "Tool")],
          },
        ],
      },
      {
        day: "Sunday",
        isSun: true,
        tasks: [
          {
            block: "rest",
            title: "Rest day — optional light review",
            desc: "Take a genuine break. If you want to do something, re-read your Week 1 notes and appreciate how much ground you've covered in 3 weeks.",
            resources: [],
          },
        ],
      },
    ],
  },
  {
    label: "Week 4",
    days: [
      {
        day: "Monday",
        tasks: [
          {
            block: "react",
            title: "SSR, SSG & ISR internals in Next.js",
            desc: "SSR: HTML on every request — fresh data, higher TTFB. SSG: HTML at build time — fastest delivery, potentially stale. ISR: static + background revalidation after N seconds — best of both. In App Router: fetch with cache: 'no-store' = SSR, cache: 'force-cache' = SSG, revalidate: N = ISR.",
            resources: [
              R(
                "Next.js rendering strategies",
                "https://nextjs.org/docs/app/building-your-application/rendering",
                "Docs"
              ),
              R(
                "SSR vs SSG vs ISR – Vercel blog",
                "https://vercel.com/blog/nextjs-server-side-rendering-vs-static-generation",
                "Article"
              ),
            ],
          },
          {
            block: "design",
            title: "Polish your best UI from past 3 weeks",
            desc: "Take your favourite piece from weeks 1–3. Spend the entire session on polish only: pixel-perfect spacing, consistent font sizes, correct color contrast (4.5:1 minimum), smooth transitions, and mobile layout. Run a Lighthouse audit.",
            resources: [
              R(
                "Lighthouse audit – Chrome",
                "https://developer.chrome.com/docs/lighthouse/overview/",
                "Tool"
              ),
              R(
                "WebAIM contrast checker",
                "https://webaim.org/resources/contrastchecker/",
                "Tool"
              ),
              R(
                "Screely – beautiful screenshot",
                "https://screely.com/",
                "Tool"
              ),
            ],
          },
          {
            block: "ai",
            title: "Start or continue product 2",
            desc: "If starting fresh: apply all learnings from product 1 — better prompt design, cleaner code structure, faster MVP approach. Start with the core AI interaction loop before building anything else.",
            resources: [
              R("Anthropic API Docs", "https://docs.anthropic.com", "Docs"),
              R("Vercel AI SDK", "https://sdk.vercel.ai/docs", "Docs"),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 16 + write 5 sentences",
            desc: "New 12 words + 5 sentences. Final month push — consciously use new vocabulary in any message you write this week: Slack, WhatsApp, emails, code comments.",
            resources: [
              R(
                "Merriam-Webster",
                "https://www.merriam-webster.com",
                "Website"
              ),
              R("Ludwig.guru", "https://ludwig.guru/", "Tool"),
            ],
          },
        ],
      },
      {
        day: "Tuesday",
        tasks: [
          {
            block: "react",
            title: "Server components vs client components & hydration",
            desc: "Server components: render on server only, no JS sent to client, direct DB/API access, no interactivity. Client components ('use client'): run on both server and client, handle events and hooks. Hydration: attaching event listeners to server-rendered HTML. Mismatches cause hydration errors.",
            resources: [
              R(
                "Server components – React docs",
                "https://react.dev/reference/rsc/server-components",
                "Docs"
              ),
              R(
                "Next.js server vs client components",
                "https://nextjs.org/docs/app/building-your-application/rendering/server-components",
                "Docs"
              ),
              R(
                "Perils of rehydration – Josh Comeau",
                "https://www.joshwcomeau.com/react/the-perils-of-rehydration/",
                "Blog"
              ),
            ],
          },
          {
            block: "design",
            title: "Build a dashboard UI — tables, charts, metrics",
            desc: "Dashboards are the most common UI pattern in SaaS. Build: a metrics row (3–4 stat cards), a data table, and a basic bar or line chart. Focus on data density without visual clutter — every element must earn its place.",
            resources: [
              R(
                "Tremor – React dashboard components",
                "https://tremor.so/",
                "Docs"
              ),
              R("Chart.js docs", "https://www.chartjs.org/docs/", "Docs"),
              R(
                "Shadcn/ui data table",
                "https://ui.shadcn.com/docs/components/data-table",
                "Docs"
              ),
            ],
          },
          {
            block: "ai",
            title: "Build the core feature of product 2",
            desc: "Apply lesson from product 1: get the AI interaction loop working first, then build UI around it. Don't over-engineer the data layer before the AI part works. Aim for a working end-to-end demo by end of session.",
            resources: [
              R(
                "Anthropic Messages API",
                "https://docs.anthropic.com/en/api/messages",
                "Docs"
              ),
              R(
                "Vercel AI SDK streaming",
                "https://sdk.vercel.ai/docs",
                "Docs"
              ),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 17 + write 5 sentences",
            desc: "New 12 words + 5 sentences. Write them in professional email format (greeting, body, closing). Practicing format alongside vocabulary improves both at once.",
            resources: [
              R(
                "Business English Pod",
                "https://www.businessenglishpod.com/",
                "Website"
              ),
              R("Grammarly", "https://grammarly.com", "Tool"),
            ],
          },
        ],
      },
      {
        day: "Wednesday",
        tasks: [
          {
            block: "react",
            title: "Next.js App Router — routing internals",
            desc: "App Router uses React Server Components by default. Understand the file conventions: layout.js (wraps children, persists on navigation), page.js (route UI), loading.js (Suspense fallback), error.js (error boundary). Know route groups (folder), parallel routes @slot, and intercepting routes.",
            resources: [
              R(
                "App Router docs – Next.js",
                "https://nextjs.org/docs/app",
                "Docs"
              ),
              R(
                "Next.js official learning course",
                "https://nextjs.org/learn",
                "Course"
              ),
              R(
                "Layouts and templates – Next.js",
                "https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates",
                "Docs"
              ),
            ],
          },
          {
            block: "design",
            title: "Refine and finalise your portfolio pieces",
            desc: "Select your 3 best UI pieces from 4 weeks. For each: fix remaining issues, take clean screenshots with Screely, write a 2-sentence description of what you built and what you focused on.",
            resources: [
              R("Screely – screenshot tool", "https://screely.com/", "Tool"),
              R("Read.cv – developer portfolio", "https://read.cv", "Website"),
            ],
          },
          {
            block: "ai",
            title: "Deploy product 2 or finalise product 1",
            desc: "Get product 2 live on Vercel. Both products should now have: live URL, clean README, and a demo GIF or screenshot. Your GitHub is now a portfolio.",
            resources: [
              R("Vercel deployment", "https://vercel.com/docs", "Docs"),
              R(
                "ScreenToGif – demo recording",
                "https://www.screentogif.com/",
                "Tool"
              ),
              R("Loom – screen recording", "https://www.loom.com", "Tool"),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 18 + write 5 sentences",
            desc: "New 12 words + 5 sentences. Write a paragraph describing one of your AI products for a technical audience, then rewrite it for a non-technical audience. Switching register is an advanced communication skill.",
            resources: [
              R(
                "Plain English guide",
                "https://www.plainenglish.co.uk/how-to-write-in-plain-english.html",
                "Website"
              ),
              R("Hemingway App", "https://hemingwayapp.com/", "Tool"),
            ],
          },
        ],
      },
      {
        day: "Thursday",
        tasks: [
          {
            block: "react",
            title: "React interview questions — full revision sprint",
            desc: "Practise explaining each in 60 seconds as if in an interview: virtual DOM vs real DOM, reconciliation, why hooks can't be conditional, useState vs useReducer, controlled vs uncontrolled, useEffect cleanup, React.memo usage, key prop purpose, and Fiber in simple terms.",
            resources: [
              R(
                "React interview questions – ui.dev",
                "https://ui.dev/react-interview-questions",
                "Article"
              ),
              R(
                "Top React interview questions – GitHub",
                "https://github.com/sudheerj/reactjs-interview-questions",
                "GitHub"
              ),
              R(
                "Great Frontend – React practice",
                "https://www.greatfrontend.com/",
                "Website"
              ),
            ],
          },
          {
            block: "design",
            title: "Design system — document your components",
            desc: "Pick 5–6 components you built: button, card, navbar, input, badge. Document each with: usage rules, color variants, spacing, and don'ts. Showing a mini design system in an interview demonstrates senior-level thinking.",
            resources: [
              R(
                "Storybook – component docs tool",
                "https://storybook.js.org/",
                "Tool"
              ),
              R(
                "Atlassian design system (reference)",
                "https://atlassian.design/",
                "Reference"
              ),
              R(
                "IBM Carbon design system",
                "https://carbondesignsystem.com/",
                "Reference"
              ),
            ],
          },
          {
            block: "ai",
            title: "Write case studies for both products",
            desc: "For each product: problem, solution, key tech decisions, biggest challenge and how you solved it, and what you'd do differently. 200–300 words each. These become the narrative for your portfolio and interviews.",
            resources: [
              R("How to write a case study", "https://uxdesign.cc/", "Article"),
              R("Hemingway App", "https://hemingwayapp.com/", "Tool"),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 19 + write 5 sentences",
            desc: "New 12 words + 5 sentences. Also: review your favourite 30 words from all previous sets. Make sure you can use each one in a sentence without looking up the meaning.",
            resources: [
              R("Anki", "https://apps.ankiweb.net/", "Tool"),
              R("Vocabulary.com", "https://www.vocabulary.com/", "Website"),
            ],
          },
        ],
      },
      {
        day: "Friday",
        tasks: [
          {
            block: "react",
            title: "Mock teach React internals to Claude — get feedback",
            desc: "Open Claude and say: 'I'll teach you React internals. Give me feedback on accuracy, depth, and clarity as if evaluating a senior engineer.' Then explain: JSX compilation, virtual DOM, reconciliation, Fiber, hooks linked list, and re-render triggers.",
            resources: [
              R("Claude.ai", "https://claude.ai", "Tool"),
              R(
                "Overreacted – Dan Abramov's blog",
                "https://overreacted.io/",
                "Blog"
              ),
            ],
          },
          {
            block: "design",
            title: "Final design retrospective",
            desc: "Compare your Week 1 Day 1 work with your best piece from this week. Write down 5 specific improvements and 2 things still to work on. Set 2 design goals for next month.",
            resources: [
              R("Dribbble", "https://dribbble.com", "Website"),
              R("Figma", "https://figma.com", "Tool"),
            ],
          },
          {
            block: "ai",
            title: "Full review — update READMEs, test deployments",
            desc: "Final session: update both READMEs with case study content, add live demo links, verify environment variables are documented, test both deployments one final time, and clean up any dead code.",
            resources: [
              R("Readme.so", "https://readme.so/", "Tool"),
              R(
                "GitHub profile README guide",
                "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile",
                "Docs"
              ),
            ],
          },
          {
            block: "comm",
            title: "Vocabulary set 20 + grand final review",
            desc: "Final set of the plan. Write 5 sentences. Then the grand review: all 20 sets, all 240 words. Write a 200-word reflection on your 4-week communication journey — what improved, what still needs work.",
            resources: [
              R("Anki", "https://apps.ankiweb.net/", "Tool"),
              R("Hemingway App", "https://hemingwayapp.com/", "Tool"),
            ],
          },
        ],
      },
      {
        day: "Saturday",
        isSat: true,
        tasks: [
          {
            block: "comm",
            title: "Hour 1 — Full vocabulary review (all 20 sets)",
            desc: "All 240 words. Sort into: know well / shaky / forgotten. Create a final Anki deck with your weakest 30 words to continue reviewing in month 2.",
            resources: [
              R("Anki", "https://apps.ankiweb.net/", "Tool"),
              R("Quizlet", "https://quizlet.com", "Tool"),
            ],
          },
          {
            block: "comm",
            title: "Hour 2 — Read and summarise a long article",
            desc: "Re-read a favourite article from the past 4 weeks. Write a 100-word summary in your own words — without looking at the original while writing. Then compare to the article.",
            resources: [
              R(
                "Paul Graham Essays",
                "https://paulgraham.com/articles.html",
                "Blog"
              ),
              R(
                "The Pragmatic Engineer",
                "https://newsletter.pragmaticengineer.com/",
                "Newsletter"
              ),
            ],
          },
          {
            block: "comm",
            title: "Hour 3 — Write a 4-week progress reflection",
            desc: "Write 300–400 words: what you committed to, what you did, what surprised you, what was hardest, and what you'll continue. Publish on LinkedIn.",
            resources: [
              R("LinkedIn", "https://linkedin.com", "Website"),
              R("Dev.to", "https://dev.to", "Website"),
            ],
          },
          {
            block: "comm",
            title: "Hour 4 — Shadowing + self-introduction drill",
            desc: "Final shadowing session. Then do a 2-minute self-introduction out loud: your name, background, what you've built, and what you're looking for. Record and listen back.",
            resources: [
              R("TED Talks", "https://www.ted.com/talks", "YouTube"),
              R(
                "Simon Sinek talks",
                "https://www.youtube.com/@SimonSinek",
                "YouTube"
              ),
            ],
          },
          {
            block: "comm",
            title: "Hour 5 — Mock technical interview with Claude",
            desc: "Tell Claude: 'Interview me for a frontend/full-stack role. Ask about my experience, projects, and React knowledge. I'll answer in English. Give me honest feedback on communication clarity and grammar.' Do a full 30-minute session.",
            resources: [R("Claude.ai", "https://claude.ai", "Tool")],
          },
          {
            block: "comm",
            title: "Hour 6 — Plan month 2 (DSA starts)",
            desc: "Write your month 2 plan: DSA starts (arrays, strings, hashmaps first — covers 80% of frontend interviews), continue communication daily, keep building. Update your resume and identify 5 target companies for the $30K switch.",
            resources: [
              R(
                "NeetCode DSA roadmap",
                "https://neetcode.io/roadmap",
                "Website"
              ),
              R("LeetCode", "https://leetcode.com", "Website"),
              R(
                "Blind 75 – top interview questions",
                "https://neetcode.io/practice",
                "Website"
              ),
            ],
          },
        ],
      },
      {
        day: "Sunday",
        isSun: true,
        tasks: [
          {
            block: "rest",
            title: "Rest and celebrate — 4 weeks done!",
            desc: "You've completed 4 weeks of consistent work across React/JS internals, design, AI products, and communication. That's genuinely hard to do. Take the day off completely. Come back tomorrow — and start DSA.",
            resources: [],
          },
        ],
      },
    ],
  },
]

// ─── Constants ───────────────────────────────────────────────────────────────

const BLOCK_STYLES: Record<Block, { badge: string; label: string }> = {
  react: { badge: "bg-blue-100 text-blue-700", label: "React/JS" },
  design: { badge: "bg-amber-100 text-amber-700", label: "Design" },
  ai: { badge: "bg-emerald-100 text-emerald-700", label: "AI Product" },
  comm: { badge: "bg-violet-100 text-violet-700", label: "Comm" },
  rest: { badge: "bg-stone-100 text-stone-500", label: "Rest" },
}

const RESOURCE_ICON: Record<string, string> = {
  Article: "📄",
  Docs: "📘",
  YouTube: "▶",
  Tool: "🔧",
  Book: "📚",
  Website: "🌐",
  Blog: "✍",
  GitHub: "⬡",
  Course: "🎓",
  Daily: "📅",
  Newsletter: "📬",
  Podcast: "🎙",
  Community: "👥",
  Reference: "📖",
}

const LS_KEY = "study_tracker_4w"
const LS_EXP_KEY = "study_tracker_4w_exp"

// ─── Component ───────────────────────────────────────────────────────────────

export default function StudyTracker() {
  const [activeWeek, setActiveWeek] = useState(0)
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [mounted, setMounted] = useState(false)

  // Load from localStorage after mount
  useEffect(() => {
    try {
      const c = localStorage.getItem(LS_KEY)
      const e = localStorage.getItem(LS_EXP_KEY)
      if (c) setChecked(JSON.parse(c))
      if (e) setExpanded(JSON.parse(e))
    } catch {}
    setMounted(true)
  }, [])

  const taskKey = (w: number, d: number, t: number) => `${w}_${d}_${t}`
  const expKey = (w: number, d: number, t: number) => `e_${w}_${d}_${t}`

  const toggleCheck = useCallback(
    (e: React.MouseEvent, w: number, d: number, t: number) => {
      e.stopPropagation()
      setChecked((prev) => {
        const k = taskKey(w, d, t)
        const next = { ...prev, [k]: !prev[k] }
        try {
          localStorage.setItem(LS_KEY, JSON.stringify(next))
        } catch {}
        return next
      })
    },
    []
  )

  const toggleExpand = useCallback((w: number, d: number, t: number) => {
    setExpanded((prev) => {
      const k = expKey(w, d, t)
      const next = { ...prev, [k]: !prev[k] }
      try {
        localStorage.setItem(LS_EXP_KEY, JSON.stringify(next))
      } catch {}
      return next
    })
  }, [])

  const resetAll = () => {
    if (!confirm("Reset all progress?")) return
    setChecked({})
    setExpanded({})
    try {
      localStorage.removeItem(LS_KEY)
      localStorage.removeItem(LS_EXP_KEY)
    } catch {}
  }

  // Stats
  const allKeys = WEEKS.flatMap((w, wi) =>
    w.days.flatMap((d, di) => d.tasks.map((_, ti) => taskKey(wi, di, ti)))
  )
  const blockKeys = (block: Block) =>
    WEEKS.flatMap((w, wi) =>
      w.days.flatMap(
        (d, di) =>
          d.tasks
            .map((t, ti) => (t.block === block ? taskKey(wi, di, ti) : null))
            .filter(Boolean) as string[]
      )
    )
  const pct = (keys: string[]) =>
    keys.length === 0
      ? 0
      : Math.round((keys.filter((k) => checked[k]).length / keys.length) * 100)
  const doneCount = allKeys.filter((k) => checked[k]).length

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white px-4 py-10 font-sans">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-2 flex items-start justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-stone-900">
              4-week study tracker
            </h1>
            <p className="mt-0.5 text-sm text-stone-400">
              Mon–Fri · 4–5 hrs/day &nbsp;·&nbsp; Sat · 5–6 hrs communication
              &nbsp;·&nbsp; Sun · rest
            </p>
          </div>
          <button
            onClick={resetAll}
            className="mt-1 rounded-lg border border-stone-200 px-3 py-1.5 text-xs text-stone-400 transition-colors hover:bg-stone-100"
          >
            Reset all
          </button>
        </div>

        {/* Overall progress */}
        <div className="mt-4 mb-5">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-200">
            <div
              className="h-1.5 rounded-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${pct(allKeys)}%` }}
            />
          </div>
          <p className="mt-1.5 text-xs text-stone-400">
            {doneCount} / {allKeys.length} tasks completed
          </p>
        </div>

        {/* Stat cards */}
        <div className="mb-6 grid grid-cols-4 gap-2.5">
          {(["react", "design", "ai", "comm"] as Block[]).map((b) => (
            <div key={b} className="rounded-xl bg-stone-100 p-3">
              <p className="mb-1 text-[11px] text-stone-400">
                {BLOCK_STYLES[b].label}
              </p>
              <p className="text-lg font-semibold text-stone-800">
                {pct(blockKeys(b))}%
              </p>
            </div>
          ))}
        </div>

        {/* Week tabs */}
        <div className="mb-5 flex flex-wrap gap-2">
          {WEEKS.map((w, i) => (
            <button
              key={i}
              onClick={() => setActiveWeek(i)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                i === activeWeek
                  ? "border-stone-300 bg-stone-200 text-stone-900"
                  : "border-stone-200 bg-white text-stone-400 hover:bg-stone-50"
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>

        {/* Days */}
        <div className="flex flex-col gap-3">
          {WEEKS[activeWeek].days.map((day, di) => (
            <div
              key={di}
              className="rounded-2xl border border-stone-100 bg-white px-5 py-4 shadow-sm"
            >
              <p
                className={`mb-3 text-xs font-semibold tracking-wide ${day.isSat ? "text-blue-500" : day.isSun ? "text-stone-300" : "text-stone-400"}`}
              >
                {day.day.toUpperCase()}
              </p>
              <div className="flex flex-col divide-y divide-stone-50">
                {day.tasks.map((task, ti) => {
                  const ck = taskKey(activeWeek, di, ti)
                  const ek = expKey(activeWeek, di, ti)
                  const isChecked = !!checked[ck]
                  const isExpanded = !!expanded[ek]
                  const hasDetail = task.desc || task.resources.length > 0

                  return (
                    <div key={ti}>
                      {/* Task row */}
                      <div
                        className={`flex items-start gap-3 py-2.5 ${hasDetail ? "cursor-pointer" : ""}`}
                        onClick={() =>
                          hasDetail && toggleExpand(activeWeek, di, ti)
                        }
                      >
                        {/* Checkbox */}
                        <div
                          onClick={(e) => toggleCheck(e, activeWeek, di, ti)}
                          className={`mt-0.5 flex h-4 w-4 min-w-[16px] cursor-pointer items-center justify-center rounded border transition-all ${
                            isChecked
                              ? "border-emerald-500 bg-emerald-500"
                              : "border-stone-300 bg-white hover:border-stone-400"
                          }`}
                        >
                          {isChecked && (
                            <svg
                              width="9"
                              height="7"
                              viewBox="0 0 9 7"
                              fill="none"
                            >
                              <path
                                d="M1 3.5L3.5 6L8 1"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex min-w-0 flex-1 items-start justify-between gap-2">
                          <div className="min-w-0">
                            <span
                              className={`mr-1.5 inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold ${BLOCK_STYLES[task.block].badge}`}
                            >
                              {BLOCK_STYLES[task.block].label}
                            </span>
                            <span
                              className={`text-sm leading-relaxed ${isChecked ? "text-stone-300 line-through" : "text-stone-700"}`}
                            >
                              {task.title}
                            </span>
                          </div>
                          {hasDetail && (
                            <span
                              className={`mt-1 flex-shrink-0 text-[10px] text-stone-300 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                            >
                              ▼
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Expandable detail */}
                      {hasDetail && isExpanded && (
                        <div className="pr-1 pb-3 pl-7">
                          {task.desc && (
                            <p className="mb-3 text-[13px] leading-relaxed text-stone-500">
                              {task.desc}
                            </p>
                          )}
                          {task.resources.length > 0 && (
                            <>
                              <p className="mb-2 text-[10px] font-bold tracking-widest text-stone-300 uppercase">
                                Resources
                              </p>
                              <div className="flex flex-col gap-1.5">
                                {task.resources.map((r, ri) => (
                                  <a
                                    key={ri}
                                    href={r.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 rounded-lg border border-stone-100 bg-stone-50 px-3 py-2 transition-colors hover:border-blue-100 hover:bg-blue-50"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <span className="w-5 text-center text-sm">
                                      {RESOURCE_ICON[r.type] || "🔗"}
                                    </span>
                                    <span className="flex-1 text-[13px] font-medium text-blue-600 group-hover:text-blue-700">
                                      {r.name}
                                    </span>
                                    <span className="text-[11px] text-stone-300">
                                      {r.type}
                                    </span>
                                  </a>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-stone-300">
          Progress saved automatically · Good luck Raj 🚀
        </p>
      </div>
    </div>
  )
}
