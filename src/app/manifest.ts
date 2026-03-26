import type { MetadataRoute } from "next"
import { USER } from "@/data/user.data"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: USER.displayName,
    short_name: USER.firstName,
    description: USER.bio,
    start_url: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui", "browser"],
    scope: "/",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icons/192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
