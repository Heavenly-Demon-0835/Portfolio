import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jay Dave — Python Backend Engineer | FastAPI, MongoDB, Automation",
  description:
    "Python backend engineer based in Mumbai, MH. Specialising in FastAPI, MongoDB, and automation pipelines. Open to SDE / backend engineering roles. Available for full-time opportunities.",
  keywords: [
    "Jay Dave",
    "Python backend engineer Mumbai",
    "FastAPI developer",
    "SDE backend engineer",
    "MongoDB developer",
    "automation engineer",
    "backend engineer India",
    "open to work SDE",
    "Python developer Mumbai",
    "FastAPI MongoDB",
  ],
  authors: [{ name: "Jay Dave" }],
  openGraph: {
    title: "Jay Dave — Python Backend Engineer | FastAPI, MongoDB, Automation",
    description:
      "Python backend engineer based in Mumbai. FastAPI, MongoDB, automation pipelines. Open to full-time SDE roles.",
    type: "website",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jay Dave",
  jobTitle: "Python Backend Engineer",
  url: "https://jaydave.dev",
  sameAs: [
    "https://github.com/Heavenly-Demon-0835",
    "https://www.linkedin.com/in/jay-dave-08mar05/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
