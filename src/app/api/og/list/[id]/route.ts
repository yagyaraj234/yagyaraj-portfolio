import { ImageResponse } from "next/og"
import React from "react"
import { getListItemMetadata } from "@/lib/list.utils"

export const runtime = "nodejs"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const metadata = getListItemMetadata(id)

  if (!metadata) {
    return new Response("List item not found", { status: 404 })
  }

  const tags = metadata.tags ?? []

  return new ImageResponse(
    React.createElement(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fbfbf8",
          color: "#111111",
          fontFamily: "system-ui, sans-serif",
          padding: 52,
        },
      },
      React.createElement(
        "div",
        {
          style: {
            width: "100%",
            height: "100%",
            display: "flex",
            border: "2px solid #18181b",
            background: "#ffffff",
          },
        },
        React.createElement(
          "div",
          {
            style: {
              width: "62%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "48px 52px",
              borderRight: "2px solid #18181b",
            },
          },
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 14,
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              },
            },
            "Learning List"
          ),
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 22,
              },
            },
            React.createElement(
              "div",
              {
                style: {
                  fontSize: 58,
                  lineHeight: 1.03,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                },
              },
              metadata.title
            ),
            React.createElement(
              "div",
              {
                style: {
                  fontSize: 24,
                  lineHeight: 1.35,
                  color: "#52525b",
                },
              },
              metadata.description
            )
          ),
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 22,
                color: "#3f3f46",
              },
            },
            React.createElement("span", null, "yagyaraj.com"),
            React.createElement("span", null, "copyable prompt + steps")
          )
        ),
        React.createElement(
          "div",
          {
            style: {
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 38,
              background: "#f4f4ef",
            },
          },
          React.createElement(
            "div",
            {
              style: {
                height: 270,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #18181b",
                background: "#0a0a0a",
                color: "#ffffff",
                fontSize: 34,
                fontWeight: 700,
                textAlign: "center",
                lineHeight: 1.1,
                padding: 28,
              },
            },
            "Animated landing page workflow"
          ),
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
              },
            },
            tags.slice(0, 5).map((tag: string) =>
              React.createElement(
                "div",
                {
                  key: tag,
                  style: {
                    border: "1px solid #18181b",
                    background: "#ffffff",
                    padding: "8px 12px",
                    fontSize: 18,
                    fontWeight: 650,
                  },
                },
                `#${tag}`
              )
            )
          )
        )
      )
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
