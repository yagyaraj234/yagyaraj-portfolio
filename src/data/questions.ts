import { InterviewQuestion } from "@/types/interview"

export const questions: InterviewQuestion[] = [
  // JAVASCRIPT CORE
  {
    id: "js-1-1-1",
    topic: "JavaScript Core",
    subtopic: "Execution Context",
    question: "What is the execution context and how does it work?",
  },
  {
    id: "js-1-1-2",
    topic: "JavaScript Core",
    subtopic: "Execution Context",
    question: "How does the call stack function during execution?",
  },
  {
    id: "js-1-1-3",
    topic: "JavaScript Core",
    subtopic: "Execution Context",
    question: "What are global, functional, and eval execution contexts?",
  },
  {
    id: "js-1-1-4",
    topic: "JavaScript Core",
    subtopic: "Execution Context",
    question: "How does the scope chain work within execution context?",
  },
  {
    id: "js-1-2-1",
    topic: "JavaScript Core",
    subtopic: "Event Loop",
    question:
      "Explain the event loop and how JavaScript handles async operations",
  },
  {
    id: "js-1-2-2",
    topic: "JavaScript Core",
    subtopic: "Event Loop",
    question: "What's the difference between microtasks and macrotasks?",
  },
  {
    id: "js-1-2-3",
    topic: "JavaScript Core",
    subtopic: "Event Loop",
    question: "Why do Promise callbacks run before setTimeout?",
  },
  {
    id: "js-1-2-4",
    topic: "JavaScript Core",
    subtopic: "Event Loop",
    question:
      "What is event-loop starvation and how can it affect responsiveness?",
  },
  {
    id: "js-1-2-5",
    topic: "JavaScript Core",
    subtopic: "Event Loop",
    question: "How does requestAnimationFrame fit into the event loop?",
  },
  {
    id: "js-1-3-1",
    topic: "JavaScript Core",
    subtopic: "Closures",
    question: "What are closures and how do they work?",
  },
  {
    id: "js-1-3-2",
    topic: "JavaScript Core",
    subtopic: "Closures",
    question: "Do closures store values or references?",
  },
  {
    id: "js-1-4-1",
    topic: "JavaScript Core",
    subtopic: "Scope",
    question: "Explain var, let, const differences in scope and hoisting",
  },
  {
    id: "js-1-4-2",
    topic: "JavaScript Core",
    subtopic: "Scope",
    question: "What is the Temporal Dead Zone (TDZ)?",
  },
  {
    id: "js-1-5-1",
    topic: "JavaScript Core",
    subtopic: "this",
    question: "Explain all 4 rules of this binding",
  },
  {
    id: "js-1-6-1",
    topic: "JavaScript Core",
    subtopic: "call/apply/bind",
    question: "How do call and apply differ and when to use each?",
  },
  {
    id: "js-1-7-1",
    topic: "JavaScript Core",
    subtopic: "Arrow Functions",
    question:
      "What are the key differences between arrow and regular functions?",
  },
  {
    id: "js-1-8-1",
    topic: "JavaScript Core",
    subtopic: "Prototypal Inheritance",
    question: "How does prototypal inheritance work in JavaScript?",
  },
  {
    id: "js-1-9-1",
    topic: "JavaScript Core",
    subtopic: "Primitive vs Reference",
    question: "What's the difference between primitives and reference types?",
  },
  {
    id: "js-1-10-1",
    topic: "JavaScript Core",
    subtopic: "Copying",
    question: "What's the difference between shallow and deep copy?",
  },
  {
    id: "js-1-13-1",
    topic: "JavaScript Core",
    subtopic: "Promises",
    question: "What are Promises and how do they work internally?",
  },
  {
    id: "js-1-14-1",
    topic: "JavaScript Core",
    subtopic: "Memory",
    question: "Explain garbage collection in JS (mark-and-sweep).",
  },
  {
    id: "js-1-15-1",
    topic: "JavaScript Core",
    subtopic: "DOM",
    question: "What is event delegation and why is it useful?",
  },

  // REACT FUNDAMENTALS
  {
    id: "react-3-1-1",
    topic: "React Fundamentals",
    subtopic: "Render Phase",
    question: "What's the difference between render phase and commit phase?",
  },
  {
    id: "react-3-2-1",
    topic: "React Fundamentals",
    subtopic: "Virtual DOM",
    question: "What is the Virtual DOM and how does it work?",
  },
  {
    id: "react-3-5-1",
    topic: "React Fundamentals",
    subtopic: "useState",
    question: "How does useState work internally?",
  },
  {
    id: "react-3-6-1",
    topic: "React Fundamentals",
    subtopic: "useEffect",
    question: "How does useEffect lifecycle work?",
  },
  {
    id: "react-3-12-1",
    topic: "React Fundamentals",
    subtopic: "Memoization",
    question: "How does React.memo work?",
  },
  {
    id: "react-3-16-1",
    topic: "React Fundamentals",
    subtopic: "Context API",
    question: "How does Context API work?",
  },
  {
    id: "react-3-31-1",
    topic: "React Fundamentals",
    subtopic: "Suspense",
    question: "How does Suspense work?",
  },
  {
    id: "react-3-32-1",
    topic: "React Fundamentals",
    subtopic: "Concurrent React",
    question: "What is React Concurrent mode?",
  },
  {
    id: "react-3-33-1",
    topic: "React Fundamentals",
    subtopic: "Refs",
    question: "When should you use forwardRef?",
  },

  // MACHINE CODING
  {
    id: "llm-10-1-1",
    topic: "Machine Coding / LLD",
    subtopic: "Dropdown",
    question: "Design a reusable Dropdown component",
  },
  {
    id: "llm-10-2-1",
    topic: "Machine Coding / LLD",
    subtopic: "Modal",
    question: "Design a reusable Modal component",
  },
  {
    id: "llm-10-3-1",
    topic: "Machine Coding / LLD",
    subtopic: "Tabs",
    question: "Design a Tabs component",
  },
  {
    id: "llm-10-6-1",
    topic: "Machine Coding / LLD",
    subtopic: "File Upload",
    question: "Design a file upload component",
  },
  {
    id: "llm-10-7-1",
    topic: "Machine Coding / LLD",
    subtopic: "Data Table",
    question: "Design a Data Table component",
  },
  {
    id: "llm-10-8-1",
    topic: "Machine Coding / LLD",
    subtopic: "Carousel",
    question: "Design an image carousel component",
  },
  {
    id: "llm-10-9-1",
    topic: "Machine Coding / LLD",
    subtopic: "Pagination",
    question: "Implement a client-side pagination system",
  },

  // ALGORITHMS
  {
    id: "ds-11-2-1",
    topic: "Data Structures & Algorithms",
    subtopic: "Cache",
    question: "Implement an LRU cache",
  },
  {
    id: "ds-11-9-1",
    topic: "Data Structures & Algorithms",
    subtopic: "Two Sum",
    question: "Two Sum Problem: Find two numbers that sum to target",
  },
  {
    id: "ds-11-15-1",
    topic: "Data Structures & Algorithms",
    subtopic: "Optimization",
    question: "Implementing Debounce Function",
  },
  {
    id: "ds-11-16-1",
    topic: "Data Structures & Algorithms",
    subtopic: "Optimization",
    question: "Implementing Throttle Function",
  },
  {
    id: "ds-11-17-1",
    topic: "Data Structures & Algorithms",
    subtopic: "Promises",
    question: "Implementing Promise.all",
  },
  {
    id: "ds-11-18-1",
    topic: "Data Structures & Algorithms",
    subtopic: "Arrays",
    question: "Flatten an array with nesting",
  },
  {
    id: "ds-11-19-1",
    topic: "Data Structures & Algorithms",
    subtopic: "Objects",
    question: "Deep merge two objects",
  },

  // SECURITY & BROWSER
  {
    id: "sec-14-1-1",
    topic: "Security",
    subtopic: "XSS",
    question: "What is XSS and how do you prevent it?",
  },
  {
    id: "sec-14-2-1",
    topic: "Security",
    subtopic: "CSRF",
    question: "What is CSRF and how do you prevent it?",
  },
  {
    id: "browser-5-6-1",
    topic: "Browser Fundamentals",
    subtopic: "Storage",
    question: "What are localStorage, sessionStorage, and cookies?",
  },
  {
    id: "browser-5-8-1",
    topic: "Browser Fundamentals",
    subtopic: "CORS",
    question: "What is CORS and why is it necessary?",
  },
  {
    id: "browser-5-9-1",
    topic: "Browser Fundamentals",
    subtopic: "Networking",
    question: "Explain the HTTP request/response cycle.",
  },

  // ADVANCED
  {
    id: "js-2-1-1",
    topic: "JavaScript Advanced",
    subtopic: "Performance",
    question: "How do hidden classes improve JavaScript performance?",
  },
  {
    id: "react-4-1-1",
    topic: "Advanced React Patterns",
    subtopic: "Render Props",
    question: "What are render props and when should you use them?",
  },
  {
    id: "ts-4-1-1",
    topic: "TypeScript",
    subtopic: "Inference",
    question: "How does TypeScript infer types?",
  },
  {
    id: "ts-4-2-1",
    topic: "TypeScript",
    subtopic: "Generics",
    question: "Explain TypeScript Generics and why they are useful.",
  },
  {
    id: "perf-7-1-1",
    topic: "Performance Optimization",
    subtopic: "Code Splitting",
    question: "What is code splitting and why is it important?",
  },
  {
    id: "next-8-1-1",
    topic: "Next.js / SSR / SSG",
    subtopic: "Rendering",
    question: "What are CSR, SSR, SSG, and ISR in Next.js?",
  },
  {
    id: "state-9-1-1",
    topic: "State Management",
    subtopic: "Global State",
    question: "When should you use local vs global state?",
  },
  {
    id: "arch-12-1-1",
    topic: "System Design / Architecture",
    subtopic: "Principles",
    question: "What principles guide component design?",
  },
  {
    id: "test-13-1-1",
    topic: "Testing",
    subtopic: "Unit Testing",
    question: "What makes a good unit test?",
  },
  {
    id: "acc-15-1-1",
    topic: "Accessibility",
    subtopic: "HTML",
    question: "What is semantic HTML and why does it matter?",
  },
]
