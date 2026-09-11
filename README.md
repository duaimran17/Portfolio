# 🎀 Dua Imran — Personal Developer Portfolio

[![Live Portfolio](https://img.shields.io/badge/Website-Live_Demo-brightgreen?style=for-the-badge)](https://your-portfolio.vercel.app)

Welcome to the official repository for my personal developer portfolio! This platform highlights my journey as a **Full-Stack AI Engineer**, combining frontend user interfaces with solid web architectures, full-stack applications, and machine learning models.

---

## 🌟 Overview & Personal Identity

I am a Computer Science student at the **University of Central Punjab (UCP)** in Lahore, Pakistan. My engineering focus sits at the intersection of full-stack web development and artificial intelligence—building responsive, motion-rich web interfaces powered by scalable backend logic and deep learning capabilities.

### What This Portfolio Highlights:
* **Featured Projects:** Interactive, animated showcase featuring deep learning diagnostics (*Synora Health*, *Chest X-Ray Pneumonia AI*), full-stack web platforms (*10Pearls Notes App*, *Hues by Momina*), database systems (*Pet Adoption Management*), and data structures (*Tridictionary*).
* **Leadership & Impact:** Experience as Joint Secretary for IEEE UCP, Head of Communication for the International Students Association, Co-Director for Techathon 2.0 (11 competitions across 4 tracks), and Robotics Category Lead for TAAKRA.
* **Honors & Extracurriculars:** 1st Runner Up at the OOTA 48-hour Game Jam, national competition achievements, and silver medals & trophies in Futsal and Throwball representing the IT Department at the UCP Sports Gala.
* **Verified Credentials:** Course certifications, technical skill breakdowns without arbitrary percentage bars, and recommendations from academic and industry peers.

---

## ✨ Key Portfolio Features

* **Single-Page Smooth Navigation:** Seamless section scrolling with scroll reveal animations and active navbar indicators.
* **Dual Theme Engine (Dark / Light Mode):** Built with CSS custom variables, smooth color transitions, `localStorage` preference memory, and automated system color-scheme detection.
* **Interactive Project Modals:** Category filterable project grid (`All`, `AI`, `Full Stack`, `Database`, `Computer Graphics`) opening animated modal dialogs with video demo embeds, GitHub links, live URLs, and tech stacks.
* **Data-Driven Architecture:** All dynamic content (Projects, Experience, Skills, Achievements, Recommendations) is decoupled into JavaScript data modules, allowing quick updates without touching layout logic.
* **Responsive Layout:** Optimized across desktop, laptop, tablet, and mobile screens with custom navigation menus and touch-friendly controls.
* **Serverless Contact System:** Accessible contact form equipped with client-side validation, direct social links (Email, LinkedIn, GitHub, Discord), and easy integration for services like EmailJS or Formspree.

---

## 🛠️ Tech Stack & Dependencies

### Core Frameworks & Libraries
* **Frontend:** [React.js](https://react.dev/) (v18+)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)

### Tools & Deployment
* **IDE & Tools:** VS Code, Git, GitHub
* **Hosting & CI/CD:** [Vercel](https://vercel.com/) (Automated builds via GitHub main branch triggers)

---

## 📂 Detailed File Tree & Architecture

The codebase follows a modular component structure to prevent large monolithic files and maintain clean code separation:

```text
Portfolio/
├── public/
│   ├── images/              # Profile photos (e.g., dua.jpeg) and screenshots
│   └── cv/                  # Downloadable resume PDF (Dua-Khan-CV.pdf)
├── src/
│   ├── assets/              # Static media, custom icons, and video demos
│   ├── components/          # Reusable UI component building blocks
│   │   ├── Navbar/          # Fixed top navigation with theme toggle & CV link
│   │   ├── ProjectCard/     # Grid project item cards
│   │   ├── ProjectModal/    # Animated Framer Motion overlay modal
│   │   ├── ExperienceItem/  # Reusable vertical timeline items
│   │   ├── SkillCard/       # Categorized skill badges
│   │   ├── AchievementCard/ # Award cards with trophy highlights
│   │   ├── RecommendationCard/ # Endorsement carousel/grid cards
│   │   ├── ThemeToggle/     # Light/Dark mode switch button
│   │   └── ContactForm/     # Validated contact form component
│   ├── data/                # Data JS files driving section content
│   │   ├── projects.js      # Project metadata, video/image URLs, and links
│   │   ├── experience.js    # Internship, leadership, and event history
│   │   ├── skills.js        # Categorized skill sets (Languages, Web, AI, Tools)
│   │   ├── achievements.js  # Hackathons, sports trophies, and certificates
│   │   └── recommendations.js # LinkedIn endorsements & testimonials
│   ├── hooks/               # Custom React hooks
│   │   └── useTheme.js      # Dark/light theme management hook
│   ├── sections/            # Portfolio page sections (single-page flow)
│   │   ├── Home/            # Hero section with introduction & quick links
│   │   ├── About/           # Bio, picture, education, and location
│   │   ├── Experience/      # Work & leadership timeline
│   │   ├── Skills/          # Organized tech stack grids
│   │   ├── Achievements/    # Awards, sports, and certifications
│   │   ├── Projects/        # Category filtered projects grid
│   │   ├── KindWords/       # Recommendation showcase
│   │   ├── CV/              # Dedicated resume view & download section
│   │   ├── Contact/         # Interactive message form & social media
│   │   └── Footer/          # Copyright and final personal direction statement
│   ├── App.jsx              # Main layout assembler
│   ├── App.css              # App-level utility styling
│   ├── index.css            # CSS variables, reset rules, and typography
│   └── main.jsx             # React DOM entry point
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md