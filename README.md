# Eduvia — AI-Powered Adaptive Learning Platform for NEET & JEE

> **Smart Prep. Personal Path. One Goal – Success.**  
> An autonomous adaptive learning companion engineered to replace factory coaching batches with hyper-personalized diagnostic paths, cognitive error remediation, and authentic NTA exam simulations.

---

## 🌟 Executive Overview

Every year, over **3.7 million students** contest for medical (NEET-UG) and engineering (JEE Main & Advanced) seats across India. The prevailing preparation model relies heavily on 100+ student coaching factories, generic PDF dumps, and blunt scoring metrics that fail to diagnose *why* a student dropped marks.

**Eduvia** is designed to solve this systemic flaw. By continuously tracking topic-level cognitive retention, separating conceptual gaps from calculation slips, and generating a dynamic daily high-yield study queue, Eduvia provides students in metro cities and remote towns alike with a private, top-tier AI learning partner.

---

## 🚀 Flagship Features

### 1. 🧠 AI Learning Paths
- Replaces morning decision paralysis with an automated 3-task priority study queue.
- Knowledge-graph mapped across 130+ Physics, Chemistry, and Biology/Mathematics chapters.
- Dynamic re-calibration that adjusts without penalty if a student misses a study day.

### 2. 🎯 Adaptive Mock Tests
- Questions dynamically scale in difficulty based on live submission speed and confidence.
- Real-time computer-based testing (CBT) interface matching NTA examination specifications.
- Deep time-per-question analytics to identify speed traps and negative marking pitfalls.

### 3. 🔬 Deep Diagnostic Telemetry (Cognitive Friction Inspector)
- 3-dimensional error classification: **Conceptual Misconception**, **Calculation Trap**, or **Formula Recall Under Pressure**.
- Instant Next Best Action recommendations with predicted score yields (+4 to +8 marks).
- Spaced repetition intervals scheduled automatically for every flagged weakness.

### 4. 💬 Expert Mentorship & 24/7 AI Reasoning
- Socratic step-by-step guidance that teaches students how to derive solutions rather than spoiling answers.
- Routine check-ins and peer accountability to prevent prep burnout.

### 5. ⚡ Pure Interactive Hero Dashboard Mockup
- Live toggle between **NEET Mode** and **JEE Mode**.
- Real-time syllabus health matrix and All-India Rank (AIR) band projection.
- Zero reliance on generic stock images — built entirely with accessible, responsive React & CSS.

---

## 🛠️ Actual Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | Type-safe, component-driven reactive architecture |
| **Build Tool** | [Vite 5](https://vitejs.dev/) | Lightning-fast HMR and optimized production bundling |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + Custom CSS Tokens | Sleek dark-mode aesthetic, glowing glassmorphism, responsive grids |
| **Icons** | [Lucide React](https://lucide.dev/) | Consistent, lightweight vector iconography |
| **Celebration** | [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) | Interactive micro-delight on early access submission |
| **Fonts** | Outfit, Plus Jakarta Sans, JetBrains Mono | Modern, accessible typographic hierarchy |

---

## 📁 Project Structure

```
Eduvia/
├── index.html                  # SEO-optimized HTML5 shell with Google Fonts & OG meta
├── package.json                # Project dependencies and npm scripts
├── postcss.config.js           # PostCSS configuration for Tailwind
├── tailwind.config.js          # Custom theme tokens, palette, and keyframe animations
├── tsconfig.json               # Strict TypeScript configuration
├── vite.config.ts              # Vite server & build settings
├── src/
│   ├── main.tsx                # Application root entry point
│   ├── App.tsx                 # Core layout integrating all 10 page sections
│   ├── index.css               # Design system tokens, glassmorphism utilities & reduced-motion
│   ├── types/
│   │   └── index.ts            # Data models (ExamTrack, DiagnosticData, Features, Waitlist)
│   ├── data/
│   │   └── eduviaData.ts       # Authentic NTA question scenarios, metrics & syllabus items
│   └── components/
│       ├── Navbar.tsx          # Sticky glass header with live exam switcher & mobile drawer
│       ├── Hero.tsx            # Headline, CTA buttons, and interactive CSS/React AI dashboard
│       ├── Problem.tsx         # Factory coaching pitfalls vs Eduvia comparison matrix
│       ├── Features.tsx        # 4 core feature tabs with simulated telemetry views
│       ├── HowItWorks.tsx      # 4-stage interactive learning loop (Assess → Personalize → Practice → Improve)
│       ├── AIIntelligence.tsx  # Cognitive error inspector with NEET/JEE diagnostic breakdowns
│       ├── Benefits.tsx        # 6 core rank-improvement value cards
│       ├── Testimonials.tsx    # Transparent demo aspirant journeys & beta feedback
│       ├── EarlyAccess.tsx     # Client-side validated waitlist form with confetti & localStorage
│       └── Footer.tsx          # Dynamic copyright year, syllabus navigation, and founders info
└── README.md                   # Complete documentation and roadmap
```

---

## 🏃 Setup & Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or later recommended)
- `npm` (bundled with Node.js)

### Installation Steps

1. **Clone or navigate to the repository:**
   ```bash
   cd Eduvia
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Run production build & typecheck:**
   ```bash
   npm run build
   ```
   Generates optimized static assets in `./dist`.

---

## 🔮 Future Product Roadmap

- [ ] **Phase 1 (Current)**: High-converting landing page, interactive diagnostic demonstrations, client-validated waitlist management.
- [ ] **Phase 2**: Full Next.js / Supabase backend integration for persistent user accounts and real-time diagnostic testing.
- [ ] **Phase 3**: Multi-modal photo-to-solution OCR doubt engine powered by Gemini Flash / Vision APIs.
- [ ] **Phase 4**: Full-length 3-hour NTA CBT simulated exam engine with national rank percentile percentile prediction.
- [ ] **Phase 5**: Mobile application (React Native / Flutter) for offline-first revision flashcards.

---

## ⚖️ Transparent Demo & Prototype Disclaimer

> [!NOTE]
> **Educational & Portfolio Prototype Notice:**  
> This project represents a startup concept and educational prototype designed and developed by **Shaikh Mohammed Sohail** (B.Tech CSE, VIT-AP). Testimonials and cohort metrics featured on this landing page illustrate representative student user journeys derived from qualitative aspirant research and are transparently labeled as demo simulations. No fabricated statistics, false affiliations, or manipulative marketing claims are present.

---

## 👨‍💻 Founders & Credits

- **Founder & Lead Developer**: Shaikh Mohammed Sohail  
  *B.Tech Computer Science & Engineering, VIT-AP University*  
  Email: `sohail.24bca8165@vitapstudent.ac.in`
- **Core Contributor**: Mohammed Khaleeluddin (VIT-AP)

---

*© 2026 Eduvia. Built with dedication for NEET & JEE aspirants.*
