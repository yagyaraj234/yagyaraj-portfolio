import { ImageResponse } from "next/og"
import { USER } from "@/data/user.data"

export const runtime = "nodejs"

const VALID_SIZES = new Set(["192", "512"])

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ size: string }> }
) {
  const { size } = await params

  if (!VALID_SIZES.has(size)) {
    return new Response("Icon not found", { status: 404 })
  }

  const dimension = Number(size)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #111827 0%, #27272a 55%, #f59e0b 100%)",
          color: "#ffffff",
          borderRadius: dimension * 0.22,
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: dimension * 0.08,
            border: `${Math.max(4, Math.round(dimension * 0.02))}px solid rgba(255,255,255,0.18)`,
            borderRadius: dimension * 0.18,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: dimension * 0.03,
          }}
        >
          <div
            style={{
              fontSize: Math.round(dimension * 0.34),
              fontWeight: 800,
              letterSpacing: -dimension * 0.02,
              lineHeight: 1,
            }}
          >
            {USER.firstName.slice(0, 1)}
          </div>
          <div
            style={{
              fontSize: Math.round(dimension * 0.09),
              fontWeight: 600,
              opacity: 0.88,
              textTransform: "uppercase",
              letterSpacing: dimension * 0.01,
            }}
          >
            {USER.displayName}
          </div>
        </div>
      </div>
    ),
    {
      width: dimension,
      height: dimension,
    }
  )
}
