import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PageLayout } from "@/components/PageLayout";
import { BRAND } from "@/lib/nex-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s | ${BRAND.short}`,
  },
  description:
    "NEX Robotix builds humanoid robotics systems, fleet software, and task intelligence for commercial physical work. Concept and pilot-stage systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-nex-black text-nex-white">
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
