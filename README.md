# Jay Dave — Portfolio

A personal portfolio built specifically for **Jay Dave**, showcasing experience as a **Data Scientist & Backend Engineer** specializing in automation tools, resilient data pipelines, and robust backend architectures. 

**Live Demo:** [jay-dave-portfolio.vercel.app](https://jay-dave-portfolio.vercel.app) *(or your configured Vercel URL)*

## 🚀 Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** lucide-react + custom bare SVG brand icons
- **Deployment:** Vercel

## 🎨 Design Rules & UI Elements
This portfolio employs premium, clean, modern aesthetics fitting for a professional data engineer:
- **Color Palette:** Professional light theme utilizing slate grays and striking `blue-600` / `indigo-600` gradients.
- **Glassmorphism:** A dynamic top sticky navbar adopting a frosted glass aesthetic on scroll.
- **Layout (Bento Grid):** An asymmetric "Bento Grid" card layout applied to the Expertise section for modern visualization.
- **Animations:** Smooth Framer Motion "Scroll Reveal" logic sliding elements up fluidly as they enter the viewport.
- **Filtering:** Instant visual layout transitioning built-in for querying backend vs data science projects.

## 📥 Setup & Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open the browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Repository Structure
```text
src/
├── app/
│   ├── globals.css    # Custom variables, glassmorphism logic, and keyframes
│   ├── layout.tsx     # Next.js root layout, SEO tags, Inter font binding
│   └── page.tsx       # Main Single-Page Application logic & Framer animations
public/
└── Jay_Dave_Resume.pdf # Downloadable resume linked in Hero section
```
