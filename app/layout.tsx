import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit, Geist_Mono } from "next/font/google";
import { CustomCursor } from "@/components/custom-cursor";
import { SceneCanvas } from "@/components/3d/canvas";
import { ScrollProgress } from "@/components/scroll-progress";
import { person, seo } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/utils";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: "#090a0c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s · ${person.name}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: person.name, url: siteUrl }],
  creator: person.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: person.name,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: person.profileAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SceneCanvas />
        <div className="vignette" aria-hidden />
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
