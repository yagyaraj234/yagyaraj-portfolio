import type { User } from "@/types/user.types"

export const USER: User = {
  firstName: "Yagyaraj",
  lastName: "Lodhi",
  displayName: "Yagyaraj",
  username: "yagyaraj234",
  xUsername: "heyraj__",
  gender: "male",
  pronouns: "he/him",
  bio: "Development Engineer at WaveMaker | Building React runtime and code generation infrastructure",
  address: "India",
  phoneNumber: "", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "aGV5QHlhZ3lhcmFqLmNvbQ==", // base64 encoded for hey@yagyaraj.com
  website: "https://www.yagyaraj.com",
  jobTitle: "Development Engineer",
  jobs: [
    {
      title: "Development Engineer",
      company: "WaveMaker",
      website: "https://wavemaker.com",
    },
  ],
  about: `
- **Development Engineer at WaveMaker** building React runtime and code generation infrastructure for scalable app exports
- Skilled in **React**, **Next.js**, **TypeScript**, **Node.js**, and modern frontend technologies
- Passionate about creating elegant, performant solutions with clean code and intuitive user experiences
- Building [Slides](https://slides.yagyaraj.com) - A voice-first AI presentation maker that turns spoken or typed ideas into editable slides and exports real PowerPoint decks
- Built [Trevyn](https://trevyn.dev) - An AI pull request review platform that combines PR diffs, repository context, and team rules to suggest fixes directly in GitHub
`,
  avatar: "/user.webp",
  ogImage: "https://www.yagyaraj.com/og.png",
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
  lastUpdated: "2026-07-28", // YYYY-MM-DD
}
