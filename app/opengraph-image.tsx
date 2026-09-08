import { ImageResponse } from "next/og";
import { person, seo } from "@/data/portfolio";

export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#090a0c",
          color: "#ece8df",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#c6a36a",
          }}
        >
          {person.location.full}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
            }}
          >
            {person.name}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              color: "#8f8a80",
            }}
          >
            {person.roles.join("  ·  ")}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
