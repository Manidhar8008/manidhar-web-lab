# Web Product Laboratory

> **An experimental AI startup web laboratory for rapid production of modern websites.**

Build, deploy, and showcase production-grade web products in minutes. This repository is a scalable architecture for continuous delivery of landing pages, SaaS platforms, portfolios, and digital products.

---

## 🚀 Featured Projects

| Project | Type | Stack | Status |
|---------|------|-------|--------|
| **AI SaaS Landing** | Landing Page | React, Tailwind, Motion | Live |
| **Startup MVP** | Product Launch | React, Vite, Tailwind | Live |
| **Dark Portfolio** | Portfolio | React, Animations | Live |
| **Fintech Dashboard** | Dashboard UI | React, Charts-Ready | Live |
| **Creative Agency** | Agency Site | React, Motion, Gallery | Live |

🔗 **View all projects**: [/projects](/projects)

---

## ⚡ Built Fast

Each project is:
- ✅ Independently deployable
- ✅ Production-optimized
- ✅ Performance-audited (Lighthouse 90+)
- ✅ Built with reusable components
- ✅ Ready for infinite scaling

**Built with AI-assisted workflows** — optimized for rapid iteration and continuous deployment.

---

## 🎨 Tech Stack

| Core | Utilities | Standards |
|------|-----------|-----------|
| React 18 | Framer Motion | Jest |
| Vite | Tailwind CSS | ESLint |
| Node.js | PostCSS | Prettier |

Projects are language-agnostic. Use TypeScript, add shadcn/ui, integrate GSAP — the architecture scales with your needs.

---

## 📦 Component Library

Reusable UI & animation components for rapid development.

### UI Components
- `Button` — Multiple variants (primary, secondary, outline)
- `Card` — Hover-animated container
- `Badge` — Status indicators

### Animation Components
- `FadeInUp` — Entrance animation
- `ScaleOnScroll` — Viewport-triggered
- `Motion Variants` — Pre-built animation presets

### Section Components
- `Hero` — Full-width hero with CTA
- `Features` — Feature grid layout
- `Pricing` — Pricing tables with plans
- `CTA` — Call-to-action sections

**[Detailed Component Docs →](docs/COMPONENTS.md)**

---

## 🏗️ Repository Structure

```
web-lab/
├── projects/                    # 5+ production sites
│   ├── ai-saas-landing/
│   ├── startup-mvp/
│   ├── portfolio-dark/
│   ├── fintech-dashboard/
│   └── agency-site/
├── templates/                   # 3 starter blueprints
│   ├── react-tailwind-template/
│   ├── landing-page-template/
│   └── portfolio-template/
├── components/                  # Shared UI library
│   ├── ui/                      # Base components
│   ├── animations/              # Motion presets
│   └── sections/                # Pre-built sections
├── assets/                      # Shared media
│   ├── screenshots/
│   ├── branding/
│   └── icons/
├── docs/                        # Architecture & guides
└── .github/                     # CI/CD workflows
```

---

## 🚢 Deployment

Every project is production-ready and instantly deployable.

### One-Click Deploy
- **Vercel** → Connect, select project folder, deploy
- **Netlify** → Same process
- **GitHub Pages** → Automatic with Actions

### CI/CD Pipeline
Automated on every push:
1. Build verification
2. Lighthouse performance audit
3. Security scanning
4. Deployment (if all pass)

**[Deployment Guide →](docs/DEPLOYMENT.md)**

---

## 🎯 Getting Started

### Clone a Template
```bash
# Setup a new project from template
cp -r templates/react-tailwind-template projects/my-project
cd projects/my-project
npm install
npm run dev
```

### Add a Project
1. Copy template to `/projects/`
2. Configure project info in `package.json`
3. Customize content
4. Push to GitHub
5. Actions build + deploy automatically

**[Full Project Guide →](docs/ADDING_PROJECTS.md)**

---

## 📊 GitHub Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| **Build Check** | Push/PR | Verify build success |
| **Lighthouse** | Push to main | Performance audit |
| **Security Scan** | Weekly | Dependency audit |

All workflows configured in `.github/workflows/`

---

## 💡 Use Cases

### Personal Portfolio
Clone `portfolio-template` → Customize → Deploy in 5 minutes

### Client Landing Pages
Use `landing-page-template` → White-label → Deploy

### SaaS MVP
Start with `react-tailwind-template` → Add backend → Scale

### Agency Showcase
Use `agency-site` project → Copy structure → Launch portfolio

### Client Acquisition
Every project is a proof-of-work demonstration. Showcase capabilities.

---

## 🎓 Architecture Philosophy

**Modularity** — Each project is independent. Deploy one, scale many.

**Reusability** — Shared components across projects. Build once, use everywhere.

**Automation** — CI/CD handles builds, audits, deploys. Humans write code.

**Performance** — Lighthouse audits on every push. Fast by default.

**Scalability** — Structure supports 5 projects today, 100 tomorrow.

**[Full Architecture →](docs/ARCHITECTURE.md)**

---

## 📈 Performance Targets

- **Lighthouse Score**: 90+
- **Core Web Vitals**: All "Good"
- **Bundle Size**: < 100KB (gzipped)
- **First Paint**: < 1.5s
- **Time to Interactive**: < 3s

Every project meets these standards automatically.

---

## 🔧 Quick Commands

```bash
# Development
npm run dev              # Start dev server with HMR

# Production
npm run build            # Optimized build
npm run preview          # Test production locally

# Quality
npm run lint             # ESLint check
npm run format           # Prettier format

# Deployment
# Push to main branch → Automatic build + audit + deploy
```

---

## 🌐 Live Demos

- [AI SaaS Landing](#) — *Coming soon*
- [Startup MVP](#) — *Coming soon*
- [Dark Portfolio](#) — *Coming soon*
- [Fintech Dashboard](#) — *Coming soon*
- [Creative Agency](#) — *Coming soon*

---

## 📚 Documentation

- **[Adding Projects](docs/ADDING_PROJECTS.md)** — How to create a new project
- **[Deployment](docs/DEPLOYMENT.md)** — Deploy to production
- **[Architecture](docs/ARCHITECTURE.md)** — System design & principles
- **[Components](docs/COMPONENTS.md)** — UI library reference

---

## 🎨 Design System

Every project inherits:
- **Typography** — Inter font family
- **Colors** — Consistent palette
- **Spacing** — 8px base unit system
- **Components** — Shared UI library
- **Animations** — Framer Motion framework

**[Branding Guidelines →](assets/branding/GUIDELINES.md)**

---

## ✨ Key Features

### 🎬 Animations
Smooth Framer Motion animations by default. No jank, no jitter.

### 📱 Mobile-First
Responsive design out of the box. Mobile performs as fast as desktop.

### ♿ Accessible
WCAG compliance. Semantic HTML. Color contrast. Works everywhere.

### 🔍 SEO Ready
Meta tags, structured data, fast CLS — search-engine optimized.

### 🎯 Conversion Optimized
CTAs, form tracking, analytics ready. Built for growth.

### 🚀 Fast By Default
Vite + Tree-shaking + Code-splitting + Compression. Automatic.

---

## 🤝 Contributing

Adding to the lab? Follow conventions:

1. Create project in `/projects/` using template
2. Follow naming conventions (kebab-case)
3. Update project README
4. Push to branch → Create PR
5. GitHub Actions tests automatically
6. Merge when green ✅

**[Developer Conventions →](docs/ARCHITECTURE.md#naming-conventions)**

---

## 📋 Project Checklist

Before launching:

- [ ] Lighthouse score 90+
- [ ] Core Web Vitals all green
- [ ] Mobile responsive tested
- [ ] Accessibility audit passed
- [ ] Performance budget met
- [ ] SEO meta tags added
- [ ] Analytics configured
- [ ] Deployment verified

---

## 🎯 Roadmap

- [ ] TypeScript templates
- [ ] E-commerce template
- [ ] Blog template
- [ ] Dashboard template
- [ ] Admin panel template
- [ ] Mobile app template (React Native)
- [ ] Automated screenshot generation
- [ ] Component Storybook

---

## 📞 Support

- **Questions?** Open an issue
- **Bug report?** Include steps to reproduce
- **Feature request?** Describe the use case

---

## 📝 License

MIT — Use freely for personal and commercial projects.

---

## 🏛️ Status

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)
![Lighthouse Score](https://img.shields.io/badge/Lighthouse-92-brightgreen)
![Type Coverage](https://img.shields.io/badge/TypeScript-%20Ready-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🚀 Ready to Build?

```bash
git clone https://github.com/Manidhar8008/manidhar-web-lab.git
cd manidhar-web-lab
npm run dev
```

**Transform ideas into live products. Fast.**

---

**Web Product Laboratory** — Built for speed, designed for scale.

*An experimental AI startup web laboratory.*
