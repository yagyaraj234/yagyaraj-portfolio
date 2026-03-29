import type { Metadata } from "next"
import "./style.css"

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Yagyaraj — Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer from Hyderabad, India. Building the platform engine at WaveMaker. Previously at Rava AI — took product from zero to production. Specialising in React, Next.js, TypeScript, Node.js, and AI integrations.",
  keywords: [
    "Yagyaraj",
    "Full-Stack Engineer",
    "Software Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Hyderabad",
    "India",
    "WaveMaker",
    "Rava AI",
  ],
  authors: [{ name: "Yagyaraj", url: "https://yagyaraj.com" }],
  creator: "Yagyaraj",
  metadataBase: new URL("https://yagyaraj.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://yagyaraj.com",
    title: "Yagyaraj — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer from Hyderabad, India. Building platform infrastructure at WaveMaker. Open to new opportunities.",
    siteName: "yagyaraj.com",
    images: [
      {
        url: "/og-image.png", // add a 1200×630 image to /public
        width: 1200,
        height: 630,
        alt: "Yagyaraj — Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yagyaraj — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer from Hyderabad. React, Next.js, TypeScript, Node.js, AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

// ─── Static data (no DB / API calls → fully static at build time) ────────────
const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "TailwindCSS",
  "Docker",
  "GCP",
  "AI / LLMs",
]

const PROJECTS = [
  {
    num: "01",
    title: "Preap",
    desc: "Mock interview platform with live call recording, behavioral analysis, and tiered pricing.",
    tags: ["Next.js 15", "Framer Motion", "AI"],
    href: "#",
  },
  {
    num: "02",
    title: "AI Blog Agent",
    desc: "Mastra-powered writing agent with tools for research, drafting, and keyword analysis.",
    tags: ["Mastra", "LLM", "Node.js"],
    href: "#",
  },
  {
    num: "03",
    title: "Low-code Builder",
    desc: "Browser-based UI preview system that renders designs from a JSON schema.",
    tags: ["React", "TypeScript", "JSON Schema"],
    href: "#",
  },
]

const BLOG_POSTS = [
  {
    title: "Core Web Vitals Explained: LCP, CLS, and INP Complete Guide",
    href: "/blog/core-web-vitals",
  },
  {
    title: "Your Images Are Killing Your LCP — Here's How to Fix It",
    href: "/blog/images-lcp",
  },
  {
    title: "The CORS Delusion: Why Postman Doesn't Care About Your Headers",
    href: "/blog/cors-delusion",
  },
]

const JOURNEY = [
  {
    date: "jan 2025 – present",
    role: "Development Engineer",
    company: "WaveMaker",
    detail:
      "Contributing to the React runtime and code generation architecture for scalable app exports.",
  },
  {
    date: "2023 – 2024",
    role: "Full-stack Engineer",
    company: "Rava AI",
    detail:
      "Took product from zero to production frontend, backend, DevOps, and AI integrations end-to-end.",
  },
]

// ─── JSON-LD structured data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yagyaraj",
  url: "https://yagyaraj.com",
  jobTitle: "Full-Stack Software Engineer",
  worksFor: { "@type": "Organization", name: "WaveMaker" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/yagyaraj",
    "https://linkedin.com/in/yagyaraj",
    "https://twitter.com/yagyaraj",
  ],
  knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "AI"],
}

// ─── Page component ───────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* JSON-LD for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="port">
        {/* NAV */}
        <nav className="nav">
          <a href="/" className="nav-logo">
            yagyaraj.com
          </a>
          <ul className="nav-links">
            <li>
              <a href="/" className="active" aria-current="page">
                home
              </a>
            </li>
            <li>
              <a href="#work">work</a>
            </li>
            <li>
              <a href="#writing">writing</a>
            </li>
          </ul>
        </nav>

        {/* HERO */}
        <section className="hero" aria-label="Introduction">
          <p className="hero-tag">Full-stack engineer · Hyderabad, India</p>
          <h1 className="hero-name">
            Yagyaraj
            <br />
            <em>builds for the web.</em>
          </h1>
          <p className="hero-desc">
            Building the platform engine at <strong>WaveMaker</strong> that
            powers React application generation. Previously at{" "}
            <strong>Rava AI</strong> took product from zero to production,
            end-to-end. Passionate about platform engineering, scalable systems,
            and developer tooling.
          </p>
          <div className="hero-actions">
            <span className="open-badge" aria-label="Currently open to work">
              open to work
            </span>
            <a
              href="/resume.pdf"
              className="btn-primary"
              aria-label="View resume PDF"
            >
              view resume
            </a>
            <a href="mailto:hello@yagyaraj.com" className="btn-ghost">
              get in touch
            </a>
          </div>
        </section>

        {/* STACK */}
        <section className="section" aria-label="Tech stack">
          <p className="section-label">stack</p>
          <ul className="stack-grid" aria-label="Technologies">
            {STACK.map((tech) => (
              <li key={tech} className="stack-chip">
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {/* PROJECTS */}
        <section className="section" id="work" aria-label="Selected projects">
          <p className="section-label">selected work</p>
          <ul className="project-grid">
            {PROJECTS.map((p) => (
              <li key={p.num}>
                <a
                  href={p.href}
                  className="project-card"
                  aria-label={`Project: ${p.title}`}
                >
                  <p className="project-num" aria-hidden="true">
                    {p.num}
                  </p>
                  <h2 className="project-title">{p.title}</h2>
                  <p className="project-desc">{p.desc}</p>
                  <ul className="project-tags" aria-label="Technologies used">
                    {p.tags.map((t) => (
                      <li key={t} className="project-tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* BLOG */}
        <section className="section" id="writing" aria-label="Blog posts">
          <p className="section-label">writing</p>
          <ul className="blog-list">
            {BLOG_POSTS.map((post) => (
              <li key={post.href}>
                <a href={post.href} className="blog-item">
                  <span className="blog-title">{post.title}</span>
                  <span className="blog-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* JOURNEY */}
        <section className="section" aria-label="Work history">
          <p className="section-label">journey</p>
          <ol className="journey-list">
            {JOURNEY.map((j) => (
              <li key={j.company} className="journey-item">
                <time className="journey-date">{j.date}</time>
                <div>
                  <p className="journey-role">{j.role}</p>
                  <p className="journey-company">{j.company}</p>
                  <p className="journey-detail">{j.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FOOTER */}
        <footer>
          <span className="footer-left">let&apos;s build something.</span>
          <nav className="footer-links" aria-label="Social links">
            <a
              href="https://github.com/yagyaraj"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/yagyaraj"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <a
              href="https://twitter.com/yagyaraj"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
            <a href="mailto:hello@yagyaraj.com">email</a>
          </nav>
        </footer>
      </div>
    </>
  )
}
