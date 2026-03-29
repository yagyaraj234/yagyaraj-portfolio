import { Navbar } from "../components/navbar"
import { UserInfo } from "../components/user-info"
import { Instrument_Serif, DM_Mono } from "next/font/google"

// ─── Font definitions ─────────────────────────────────────────────────────────
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
})

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={` ${instrumentSerif.variable} ${dmMono.variable} mx-auto max-w-3xl`}
    >
      <Navbar />
      <UserInfo />
      {children}
    </div>
  )
}
