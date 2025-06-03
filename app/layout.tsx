import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

// Load fonts with CSS variable names
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "WriteFlow - Where Words Meet Intelligence",
  description: "Effortless AI-powered content creation for blogs, marketing, and storytelling. Turn ideas into words with WriteFlow.",
  keywords: [
    "AI content generator",
    "AI writing tool",
    "content creation",
    "WriteFlow",
    "AI writer",
    "automated writing",
    "blog writing AI",
    "marketing copy generator",
    "write with AI",
    "GPT writing assistant"
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "WriteFlow - Where Words Meet Intelligence",
    description: "Effortless AI-powered content creation for blogs, marketing, and storytelling.",
    url: "https://write-flow-ten.vercel.app/",
    siteName: "WriteFlow",
    images: [
      {
        url: "./writeflow-opengraph.png",
        width: 1280,
        height: 720,
        alt: "WriteFlow AI Content Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head />
        <body className={`${outfit.variable} ${poppins.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
