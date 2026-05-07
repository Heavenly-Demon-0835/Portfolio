import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jay Dave —Backend Developer",
  description:
    "Portfolio of Jay Dave, Backend Developer specializing in backend architectures using Python, SQL, and Machine Learning.",
  keywords: [
    "Jay Dave",
    "Backend Developer",
    "Python",
    "FastAPI",
    "Machine Learning",
    "Mumbai",
  ],
  authors: [{ name: "Jay Dave" }],
  openGraph: {
    title: "Jay Dave — Backend Developer",
    description:
      "Building automation tools, resilient data pipelines, and robust backend architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
