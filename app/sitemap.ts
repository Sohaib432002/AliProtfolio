import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getSiteUrl(),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
