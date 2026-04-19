import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jay Dave — Data Scientist & Backend Engineer",
  description:
    "Portfolio of Jay Dave, a Data Scientist & Backend Engineer specializing in automation tools, resilient data pipelines, and robust backend architectures using Python, SQL, and Machine Learning.",
  keywords: [
    "Jay Dave",
    "Data Scientist",
    "Backend Engineer",
    "Python",
    "FastAPI",
    "Machine Learning",
    "Mumbai",
  ],
  authors: [{ name: "Jay Dave" }],
  openGraph: {
    title: "Jay Dave — Data Scientist & Backend Engineer",
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
