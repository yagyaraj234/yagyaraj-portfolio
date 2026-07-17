import { redirect } from "next/navigation"

const FRONTEND_ROLE = "https://ggl.link/frontend"

export default async function ResumePage() {
  redirect(FRONTEND_ROLE)
}
