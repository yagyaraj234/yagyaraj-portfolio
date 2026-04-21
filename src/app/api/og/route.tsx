import { ImageResponse } from "next/og"
import React from "react"

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "#fafaf8",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 70,
          left: 80,
          right: 80,
          bottom: 70,
          backgroundColor: "#ffffff",
          border: "1px solid #e8e8e3",
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* header */}
        <div
          style={{
            backgroundColor: "#f7f7f4",
            borderBottom: "1px solid #e8e8e3",
            padding: "32px 40px",
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          <img
            src="https://avatars.githubusercontent.com/yagyaraj234"
            width={100}
            height={100}
            style={{
              borderRadius: 50,
              border: "1.5px solid #e2e2de",
              flexShrink: 0,
              objectFit: "cover",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <span
              style={{
                fontSize: 52,
                fontFamily: "Georgia, serif",
                color: "#111111",
                letterSpacing: -1,
                lineHeight: 1,
              }}
            >
              Yagyaraj
            </span>
            <span
              style={{
                fontSize: 17,
                fontFamily: "monospace",
                color: "#9ca3af",
                marginTop: 8,
              }}
            >
              @yagyaraj234
            </span>
            <div
              style={{
                height: 1,
                backgroundColor: "#e8e8e3",
                margin: "12px 0",
              }}
            />
            <span
              style={{
                fontSize: 19,
                fontFamily: "system-ui, sans-serif",
                color: "#6b7280",
              }}
            >
              Turning ideas into fast, thoughtful web experiences.
            </span>
          </div>
        </div>

        {/* info grid */}
        <div style={{ display: "flex", flex: 1, padding: "28px 40px" }}>
          {/* col 1 */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {/* role — briefcase */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  backgroundColor: "#f4f4f2",
                  border: "1px solid #e8e8e3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 3,
                      border: "1.5px solid #9ca3af",
                      borderBottom: "none",
                      borderRadius: "2px 2px 0 0",
                    }}
                  />
                  <div
                    style={{
                      width: 14,
                      height: 9,
                      border: "1.5px solid #9ca3af",
                      borderRadius: 2,
                    }}
                  />
                </div>
              </div>
              <span
                style={{
                  fontSize: 18,
                  fontFamily: "monospace",
                  color: "#374151",
                }}
              >
                Software Engineer
              </span>
              <div
                style={{
                  padding: "3px 10px",
                  borderRadius: 4,
                  backgroundColor: "#f0fdf4",
                  border: "0.5px solid #bbf7d0",
                  fontSize: 13,
                  fontFamily: "system-ui",
                  color: "#16a34a",
                }}
              >
                2+ years
              </div>
            </div>

            {/* location — pin */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  backgroundColor: "#f4f4f2",
                  border: "1px solid #e8e8e3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 6,
                      border: "1.5px solid #9ca3af",
                    }}
                  />
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "4px solid transparent",
                      borderRight: "4px solid transparent",
                      borderTop: "5px solid #9ca3af",
                      marginTop: -1,
                    }}
                  />
                </div>
              </div>
              <span
                style={{
                  fontSize: 18,
                  fontFamily: "monospace",
                  color: "#374151",
                }}
              >
                Hyderabad, India
              </span>
            </div>

            {/* skills — </> */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  backgroundColor: "#f4f4f2",
                  border: "1px solid #e8e8e3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: "#9ca3af",
                    fontFamily: "monospace",
                  }}
                >{`</>`}</span>
              </div>
              <span
                style={{
                  fontSize: 18,
                  fontFamily: "monospace",
                  color: "#374151",
                }}
              >
                React · Next.js · Node.js · TS
              </span>
            </div>

            {/* open to work */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  backgroundColor: "#f4f4f2",
                  border: "1px solid #e8e8e3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    border: "1.5px solid #9ca3af",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: 3,
                      backgroundColor: "#22c55e",
                    }}
                  />
                </div>
              </div>
              <span
                style={{
                  fontSize: 18,
                  fontFamily: "monospace",
                  color: "#374151",
                }}
              >
                Open to work
              </span>
              <div
                style={{
                  padding: "3px 10px",
                  borderRadius: 4,
                  backgroundColor: "#eff6ff",
                  border: "0.5px solid #bfdbfe",
                  fontSize: 13,
                  fontFamily: "system-ui",
                  color: "#2563eb",
                }}
              >
                Available now
              </div>
            </div>
          </div>

          {/* vertical divider */}
          <div
            style={{
              width: 1,
              backgroundColor: "#e8e8e3",
              margin: "0 40px",
              flexShrink: 0,
            }}
          />

          {/* col 2 */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {/* github */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  backgroundColor: "#f4f4f2",
                  border: "1px solid #e8e8e3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 7,
                    border: "1.5px solid #9ca3af",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: 3,
                      border: "1px solid #9ca3af",
                    }}
                  />
                </div>
              </div>
              <span
                style={{
                  fontSize: 18,
                  fontFamily: "monospace",
                  color: "#374151",
                }}
              >
                github.com/yagyaraj234
              </span>
            </div>

            {/* email */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  backgroundColor: "#f4f4f2",
                  border: "1px solid #e8e8e3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 16,
                    height: 12,
                    border: "1.5px solid #9ca3af",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "7px solid transparent",
                      borderRight: "7px solid transparent",
                      borderTop: "5px solid #9ca3af",
                    }}
                  />
                </div>
              </div>
              <span
                style={{
                  fontSize: 18,
                  fontFamily: "monospace",
                  color: "#374151",
                }}
              >
                hey@yagyaraj.com
              </span>
            </div>

            {/* linkedin */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  backgroundColor: "#f4f4f2",
                  border: "1px solid #e8e8e3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: "#9ca3af",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                  }}
                >
                  in
                </span>
              </div>
              <span
                style={{
                  fontSize: 18,
                  fontFamily: "monospace",
                  color: "#374151",
                }}
              >
                linkedin.com/in/yagyaraj234
              </span>
            </div>

            {/* twitter */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  backgroundColor: "#f4f4f2",
                  border: "1px solid #e8e8e3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontSize: 14,
                    color: "#9ca3af",
                    fontFamily: "monospace",
                  }}
                >
                  @
                </span>
              </div>
              <span
                style={{
                  fontSize: 18,
                  fontFamily: "monospace",
                  color: "#374151",
                }}
              >
                @yagyaraj234
              </span>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div
          style={{
            borderTop: "1px solid #e8e8e3",
            padding: "14px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fafaf9",
          }}
        >
          <span
            style={{ fontSize: 15, fontFamily: "monospace", color: "#d1d5db" }}
          >
            yagyaraj.com
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                padding: "4px 14px",
                borderRadius: 6,
                backgroundColor: "#f7f7f4",
                border: "1px solid #e8e8e3",
                fontSize: 13,
                fontFamily: "system-ui",
                color: "#9ca3af",
              }}
            >
              React
            </div>
            <div
              style={{
                padding: "4px 14px",
                borderRadius: 6,
                backgroundColor: "#f7f7f4",
                border: "1px solid #e8e8e3",
                fontSize: 13,
                fontFamily: "system-ui",
                color: "#9ca3af",
              }}
            >
              Next.js
            </div>
            <div
              style={{
                padding: "4px 14px",
                borderRadius: 6,
                backgroundColor: "#f7f7f4",
                border: "1px solid #e8e8e3",
                fontSize: 13,
                fontFamily: "system-ui",
                color: "#9ca3af",
              }}
            >
              TypeScript
            </div>
            <div
              style={{
                padding: "4px 14px",
                borderRadius: 6,
                backgroundColor: "#f7f7f4",
                border: "1px solid #e8e8e3",
                fontSize: 13,
                fontFamily: "system-ui",
                color: "#9ca3af",
              }}
            >
              Node.js
            </div>
          </div>
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 }
  )
}
