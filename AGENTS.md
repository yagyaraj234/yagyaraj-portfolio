# Project Guidelines for AI Agents

This file contains essential information for AI agents working in this repository. Please adhere to these guidelines to ensure consistency, quality, and maintainability.

## 1. Commands

Use the following commands for development and maintenance.

### Build & Development

- **Start dev server:** `npm run dev`
- **Build for production:** `npm run build`
- **Start production build:** `npm run start`

### Code Quality

- **Lint:** `npm run lint`
- **Format:** `npm run format`

### Testing

There are currently no explicit test commands defined in `package.json`. If you need to add tests, please setup a framework (e.g., Vitest or Jest) and update `package.json` accordingly.

## 2. Code Style & Conventions

### General

- **Language:** TypeScript (`.ts`, `.tsx`). Always use explicit types.
- **Framework:** Next.js (App Router).
- **Styling:** Tailwind CSS. Use `cn` utility from `@/lib/utils` for merging classes.
- **Formatting:** Prettier is used for formatting. Run `npm run format` before committing.

### React Components

- Use functional components.
- Prefer explicit prop types or interfaces.
- Keep components small and focused.
- Use `lucide-react` for icons.
- Use `next/font` for font loading.

### Imports

- Use path aliases: `@/` for `src/`.
- Organize imports logically: React/external packages first, then internal modules.

### Error Handling

- Use standard `try/catch` blocks for asynchronous operations.
- Handle edge cases gracefully.
- Do not suppress errors without a documented reason.

### Naming

- Components: PascalCase.
- Functions/Variables: camelCase.
- Constants: UPPER_CASE.
- Types/Interfaces: PascalCase.

### TypeScript

- Avoid `any`. Define interfaces or types for all props and data structures.
- Use `type` for simple type aliases, `interface` for object shapes/classes.

### Data Fetching & State

- Use Next.js data fetching patterns (Server Components, Server Actions).
- Use `nuqs` for URL query state management.

---

When making changes, please ensure that they align with these standards. Run `npm run lint` and `npm run format` to ensure adherence to established conventions.
