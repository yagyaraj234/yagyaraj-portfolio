import { redirect } from "next/navigation"
import { USER } from "@/data/user.data"

export default function XPage() {
  redirect(`https://x.com/${USER.xUsername}`)
}
