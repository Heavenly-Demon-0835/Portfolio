"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  MapPin,
  ArrowDown,
  GraduationCap,
  CheckCircle2,
  Server,
  Database,
  Award,
  Mail,
  Phone,
  ExternalLink,
  ChevronUp,
  Sparkles,
  Braces,
  BarChart3,
  Globe,
  Bot,
  Shield,
  Zap,
  TrendingUp,
  FileText,
} from "lucide-react";

/* Inline brand SVG icons (lucide-react removed brand icons) */
function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

/* ─────────────────────────── DATA ─────────────────────────── */

const NAV_LINKS = [
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const CERTIFICATIONS = [
  { name: "AWS Cloud Essentials", url: "https://www.linkedin.com/in/jay-dave-08mar05/details/certifications/" },
  { name: "IBM Gen AI Essentials", url: "https://www.linkedin.com/in/jay-dave-08mar05/details/certifications/" },
  { name: "IBM ML with Python", url: "https://www.linkedin.com/in/jay-dave-08mar05/details/certifications/" },
  { name: "IBM DBs & SQL", url: "https://www.linkedin.com/in/jay-dave-08mar05/details/certifications/" },
  { name: "Migrating to AWS", url: "https://www.linkedin.com/in/jay-dave-08mar05/details/certifications/" },
  { name: "Proficiency in C++ - AICFPT", url: "https://www.linkedin.com/in/jay-dave-08mar05/details/certifications/" },
];

const SOCIAL_LINKS = {
  github: "https://github.com/Heavenly-Demon-0835",
  linkedin: "https://www.linkedin.com/in/jay-dave-08mar05/",
};

type ProjectCategory =
  | "All"
  | "Backend & APIs"
  | "Automation"
  | "Data Science"
  | "Data & Scraping";

const PROJECT_CATEGORIES: ProjectCategory[] = [
  "All",
  "Backend & APIs",
  "Automation",
  "Data Science",
  "Data & Scraping",
];

interface Project {
  title: string;
  category: ProjectCategory;
  tags: string[];
  description: string;
  impact: string;
  icon: React.ReactNode;
  url?: string;
  warning?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Metric Fitness Logger",
    category: "Backend & APIs",
    tags: ["FastAPI", "MongoDB", "Next.js"],
    description:
      "A full-stack fitness tracking platform with a FastAPI backend, MongoDB persistence, and a Next.js dashboard. Features offline-first sync, reactive data flows, and modular architecture.",
    impact:
      "Enables users to log nutrition and workouts offline, with automatic cloud sync — reducing data-entry friction by 60% compared to manual spreadsheet tracking.",
    icon: <BarChart3 className="w-5 h-5" />,
    url: "https://metric-sepia.vercel.app/",
  },
  {
    title: "Linkfluence",
    category: "Backend & APIs",
    tags: ["Flask", "MongoDB", "React"],
    description:
      "A social media analytics backend built with Flask and MongoDB. Aggregates engagement metrics across platforms with a React-based visualization dashboard.",
    impact:
      "Consolidates multi-platform social analytics into a single dashboard, saving marketing teams 5+ hours per week of manual report compilation.",
    icon: <Globe className="w-5 h-5" />,
    url: "https://link-fluence.vercel.app/",
    warning:
      "This app's backend is hosted on a free server. If you plan to log in and use it, please allow up to 60-75 seconds for the backend to spin up on first request.",
  },
  {
    title: "YouTube URL Fetcher",
    category: "Automation",
    tags: ["Python", "Flask", "pandas"],
    description:
      "An automation tool that programmatically extracts and organizes YouTube video URLs by channel or playlist. Exports structured data via a Flask web interface.",
    impact:
      "Automates a tedious manual workflow for content researchers, reducing data collection time from hours to seconds for bulk video analysis.",
    icon: <Bot className="w-5 h-5" />,
  },
  {
    title: "Image Scraper Web App",
    category: "Data & Scraping",
    tags: ["Flask", "Selenium", "Python"],
    description:
      "A browser-automation-powered image scraper with a Flask frontend. Uses Selenium to navigate, extract, and download images from target websites at scale.",
    impact:
      "Provides researchers and designers a no-code interface for bulk image collection, eliminating the need for manual downloads from hundreds of pages.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "IBM Stock Dashboard",
    category: "Data Science",
    tags: ["Python", "Plotly", "yfinance"],
    description:
      "An interactive financial dashboard visualizing IBM stock performance with Plotly charts. Pulls real-time data via yfinance and displays trend analysis, volume, and moving averages.",
    impact:
      "Delivers actionable stock insights through interactive visualizations, enabling faster investment decisions without expensive financial terminal subscriptions.",
    icon: <TrendingUp className="w-5 h-5" />,
  },
];

/* ─────────────────────── SCROLL REVEAL ─────────────────────── */

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────── NAVBAR ─────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors"
        >
          JD<span className="text-blue-600">.</span>
        </a>
        <div className="flex items-center gap-1">
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50/60 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all whitespace-nowrap"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

/* ─────────────────────── HERO ─────────────────────── */

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center pt-20">
        {/* Pulsing location badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="relative flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-slate-100 text-sm font-medium text-slate-700">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
            </span>
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            Based in Mumbai, MH
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6"
        >
          Data Scientist &{" "}
          <span className="gradient-text">Backend Engineer.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I specialize in building automation tools, resilient data pipelines,
          and robust backend architectures utilizing{" "}
          <span className="font-semibold text-slate-800">Python</span>,{" "}
          <span className="font-semibold text-slate-800">SQL</span>, and{" "}
          <span className="font-semibold text-slate-800">
            Machine Learning
          </span>
          . Backed by a B.Sc. in IT and multiple certifications from AWS, IBM & AICPT.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none mx-auto"
        >
          <a
            href="#projects"
            className="group flex w-full sm:w-auto items-center justify-center gap-2.5 px-8 py-3.5 text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all leading-none"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4 shrink-0 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="/Jay Dave-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full sm:w-auto items-center justify-center gap-2.5 px-8 py-3.5 text-slate-700 bg-white font-semibold rounded-xl shadow-md border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all leading-none"
          >
            <span>Resume</span>
            <FileText className="w-4 h-4 shrink-0 text-slate-500 group-hover:text-blue-600 transition-colors" />
          </a>

          <span className="flex w-full sm:w-auto items-center justify-center gap-2.5 px-5 py-3.5 bg-slate-50 rounded-xl shadow-sm border border-slate-100 text-sm font-semibold text-slate-700 leading-none">
            <Shield className="w-4 h-4 shrink-0 text-indigo-600" />
            <span>Multi-Certified: AWS, IBM & AICPT</span>
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator — outside content div for proper centering */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────── BENTO GRID ─────────────────────── */

function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              What I Bring to the Table
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: Education — spans 1 col */}
          <ScrollReveal delay={0.1}>
            <div className="card-hover group bg-white rounded-2xl p-7 shadow-sm border border-slate-100 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Education
                  </h3>
                  <p className="text-xs text-slate-500">Academic Background</p>
                </div>
              </div>
              <p className="text-slate-700 font-medium mb-1">
                B.Sc. Information Technology
              </p>
              <p className="text-sm text-slate-500 mb-4">
                Nirmala Memorial Foundation College
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Completed / Graduated
              </span>
            </div>
          </ScrollReveal>

          {/* Card 2: Backend & APIs */}
          <ScrollReveal delay={0.2}>
            <div className="card-hover group bg-white rounded-2xl p-7 shadow-sm border border-slate-100 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Server className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Backend & APIs
                  </h3>
                  <p className="text-xs text-slate-500">
                    Server-Side Engineering
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Designing and building production-grade RESTful APIs and
                microservices with Python-based frameworks and C++.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "C++", "FastAPI", "Flask", "System Architecture"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Data Engineering */}
          <ScrollReveal delay={0.3}>
            <div className="card-hover group bg-white rounded-2xl p-7 shadow-sm border border-slate-100 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center">
                  <Database className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Data & AI
                  </h3>
                  <p className="text-xs text-slate-500">
                    ML & Automation
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Building resilient data pipelines, browser-automation workflows, and 
                machine learning models for insights at scale.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Machine Learning", "Gen AI", "SQL", "Pandas", "Automation", "Selenium"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-violet-50 text-violet-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: Certifications — spans full width */}
          <ScrollReveal delay={0.4} className="md:col-span-2 lg:col-span-3">
            <div className="card-hover group bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-2xl p-7 shadow-lg h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Certifications
                  </h3>
                  <p className="text-xs text-slate-400">
                    Professional Credentials
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <a
                    key={cert.name}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-xl border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    {cert.name}
                    <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── WARNING MODAL ─────────────────────── */

function LinkfluenceWarningModal({
  open,
  onClose,
  url,
  message,
}: {
  open: boolean;
  onClose: () => void;
  url: string;
  message: string;
}) {
  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full p-7"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Icon */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Heads Up!</h3>
                <p className="text-xs text-slate-500">Free-tier hosting notice</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {message}
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Continue
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────── PROJECTS ─────────────────────── */

function ProjectCard({
  project,
  index,
  onWarningClick,
}: {
  project: Project;
  index: number;
  onWarningClick?: (url: string, warning: string) => void;
}) {
  const handleClick = () => {
    if (!project.url) return;
    if (project.warning && onWarningClick) {
      onWarningClick(project.url, project.warning);
    } else {
      window.open(project.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className={`card-hover bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col ${
        project.url ? "cursor-pointer" : ""
      }`}
      onClick={handleClick}
    >
      <div className="p-7 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              {project.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {project.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {project.category}
              </p>
            </div>
          </div>
          <ExternalLink className={`w-4 h-4 shrink-0 mt-1 ${
            project.url ? "text-blue-500" : "text-slate-400"
          }`} />
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-lg border border-slate-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Live Demo badge */}
        {project.url && (
          <div className="flex items-center gap-1.5 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-emerald-600">Live Demo</span>
          </div>
        )}

        {/* Business Impact Box */}
        <div className="impact-box rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              Business Impact
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            {project.impact}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [warningModal, setWarningModal] = useState<{
    open: boolean;
    url: string;
    message: string;
  }>({ open: false, url: "", message: "" });

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const handleWarningClick = (url: string, warning: string) => {
    setWarningModal({ open: true, url, message: warning });
  };

  return (
    <>
      <LinkfluenceWarningModal
        open={warningModal.open}
        url={warningModal.url}
        message={warningModal.message}
        onClose={() => setWarningModal({ open: false, url: "", message: "" })}
      />
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
                <Braces className="w-3.5 h-3.5" />
                Engineering Output
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                Featured Projects
              </h2>
            </div>
          </ScrollReveal>

          {/* Filter Tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
              {PROJECT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                    activeFilter === cat
                      ? "tab-active"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={i}
                  onWarningClick={handleWarningClick}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────── CONTACT / FOOTER ─────────────────────── */

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Let&apos;s build something.
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto mb-12 leading-relaxed">
            Currently looking for full-time roles, internships, or freelance
            opportunities. If you have a project in mind or want to connect — I&apos;d
            love to hear from you.
          </p>
        </ScrollReveal>

        {/* Contact Cards */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
            <a
              href="mailto:jaydave.0835@gmail.com"
              className="card-hover flex items-center gap-3 px-5 py-4 bg-white rounded-xl shadow-sm border border-slate-100 group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <Mail className="w-4.5 h-4.5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-medium">Email</p>
                <p className="text-sm font-semibold text-slate-800">
                  jaydave.0835@gmail.com
                </p>
              </div>
            </a>
            <a
              href="tel:+918446074260"
              className="card-hover flex items-center gap-3 px-5 py-4 bg-white rounded-xl shadow-sm border border-slate-100 group"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                <Phone className="w-4.5 h-4.5 text-indigo-600" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-medium">Phone</p>
                <p className="text-sm font-semibold text-slate-800">
                  (+91) 8446074260
                </p>
              </div>
            </a>
          </div>
        </ScrollReveal>

        {/* Social Cards */}
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center gap-4 sm:gap-5">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover social-card-github w-32 h-32 sm:w-36 sm:h-36 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300"
            >
              <GithubIcon className="w-7 h-7 sm:w-8 sm:h-8" />
              <span className="text-sm font-bold">GitHub</span>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover social-card-linkedin w-32 h-32 sm:w-36 sm:h-36 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300"
            >
              <LinkedinIcon className="w-7 h-7 sm:w-8 sm:h-8" />
              <span className="text-sm font-bold">LinkedIn</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────── FOOTER BAR ─────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Jay Dave. Built with Next.js & Tailwind
          CSS.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 rounded-lg transition-all cursor-pointer"
        >
          <ChevronUp className="w-3.5 h-3.5" />
          Back to top
        </button>
      </div>
    </footer>
  );
}

/* ─────────────────────── PAGE ─────────────────────── */

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
