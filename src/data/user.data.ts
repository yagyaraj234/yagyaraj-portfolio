import type { User } from "@/types/user.types"

export const USER: User = {
  firstName: "Yagyaraj",
  lastName: "Lodhi",
  displayName: "Yagyaraj",
  username: "yagyaraj234",
  gender: "male",
  pronouns: "he/him",
  bio: "Development Engineer at Wavemaker | Building React runtime and code generation infrastructure",
  flipSentences: [
    "Development Engineer at Wavemaker",
    "React & Next.js Specialist",
    "Building Scalable Solutions",
  ],
  address: "India",
  phoneNumber: "", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "aGV5QHlhZ3lhcmFqLmNvbQ==", // base64 encoded for hey@yagyaraj.com
  website: "https://yagyaraj.com",
  jobTitle: "Development Engineer",
  jobs: [
    {
      title: "Development Engineer",
      company: "Wavemaker",
      website: "https://wavemaker.com",
    },
  ],
  about: `
- **Development Engineer at Wavemaker** building React runtime and code generation infrastructure for scalable app exports
- Skilled in **React**, **Next.js**, **TypeScript**, **Node.js**, and modern frontend technologies
- Passionate about creating elegant, performant solutions with clean code and intuitive user experiences
- Built [Collab](https://collab-neon.vercel.app/) - A Trello-like project management application with Stripe integration
  - Organization and board management system
  - Task tracking with status updates and due dates
  - Integrated payment processing for premium features
- Created [Workbot](https://workbot.site) - An intelligent document processing platform using RAG methodology
  - **Pinecone** vector embeddings for semantic search
  - **Jina AI** for robust data extraction
  - Workspace system for different content types (chat, code reviews, video analysis)
`,
  avatar: "/user.webp",
  ogImage: "https://yagyaraj.com/og.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "yagyaraj",
    "yagyaraj234",
    "yagyaraj lodhi",
    "full stack developer",
    "wavemaker development engineer",
    "platform engineer",
    "react developer",
    "next.js developer",
    "software engineer india",
    "typescript developer",
    "firebase developer",
  ],
  dateCreated: "2023-01-01", // YYYY-MM-DD
  lastUpdated: "2026-05-02", // YYYY-MM-DD
}
