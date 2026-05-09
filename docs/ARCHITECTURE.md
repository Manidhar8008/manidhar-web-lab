# Web Product Laboratory - Architecture Guide

## Overview

The Web Product Laboratory is a scalable, modular system for rapid web product development and deployment.

```
web-lab/
├── projects/              # Independent production sites
├── templates/             # Starter blueprints
├── components/            # Reusable UI library
├── assets/                # Shared media and branding
├── docs/                  # Documentation
└── .github/workflows/     # CI/CD automation
```

## Core Principles

1. **Modularity**: Each project is independent
2. **Reusability**: Shared components across projects
3. **Scalability**: Easy to add new projects
4. **Automation**: CI/CD handles builds and audits
5. **Performance**: Lighthouse audits on every push
6. **Production-Ready**: Every project is deployable

## Project Types

### Landing Pages
- Quick deploy showcases
- Heavy on hero, features, CTA sections
- Use: `landing-page-template`

### Portfolios
- Personal/professional showcases
- Focus on project grids and case studies
- Use: `portfolio-template`

### Dashboards
- Data visualization and analytics
- Real-time updates
- Use: `react-tailwind-template`

### SaaS Products
- Complex interactive UIs
- User authentication
- Use: `react-tailwind-template`

## Shared Components Library

### UI Components
- `Button.jsx` - CTA, primary, secondary, outline variants
- `Card.jsx` - Content container with hover effects
- `Badge.jsx` - Status and tag displays

### Animation Components
- `FadeInUp.jsx` - Vertical entrance animation
- `ScaleOnScroll.jsx` - Scale animation on viewport
- `variants.js` - Reusable Framer Motion configs

### Section Components
- `Hero.jsx` - Hero section with image
- `Features.jsx` - Feature grid layout
- `Pricing.jsx` - Pricing table with plans
- `CTA.jsx` - Call-to-action section

## Tech Stack

**Default**: React + Vite + Tailwind CSS

**Included in all projects**:
- Framer Motion (animations)
- PostCSS (CSS processing)
- ESLint (linting)
- Prettier (formatting)

**Optional adds**:
- TypeScript
- shadcn/ui
- GSAP
- D3.js
- Next.js (for SSR)

## Project Lifecycle

### 1. Initialize
```bash
cp -r templates/react-tailwind-template projects/new-project
cd projects/new-project
npm install
```

### 2. Develop
```bash
npm run dev
```

### 3. Build
```bash
npm run build  # Optimized production build
npm run preview  # Test production build locally
```

### 4. Deploy
- Push to GitHub
- Actions automatically build and audit
- Deploy with Vercel/Netlify one-click

### 5. Monitor
- GitHub Actions status badges
- Lighthouse audit reports
- Deployment logs

## File Organization

### Within Projects
```
projects/my-project/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── images/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

### Shared Components
```
components/
├── ui/              # Base UI components
├── animations/      # Animation utilities
└── sections/        # Pre-built page sections
```

## Build Process

1. **Development**: Vite dev server with HMR
2. **Build**: Optimized production bundle
   - Tree-shaking
   - Code splitting
   - Minification
   - Asset optimization

3. **Deploy**: 
   - Automatic with GitHub Actions
   - Vercel/Netlify handles caching
   - CDN distribution

## Performance Targets

- Lighthouse score: 90+
- Core Web Vitals: All "Good"
- Bundle size: < 100KB (gzipped)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## CI/CD Pipeline

```
Push to main
  ↓
Build check (npm run build)
  ↓
Lint check
  ↓
Lighthouse audit
  ↓
Security scan
  ↓
Deploy (if all pass)
```

## Naming Conventions

### Projects
- Format: `kebab-case`
- Example: `ai-saas-landing`, `fintech-dashboard`
- Template: `{product-type}-{descriptor}`

### Components
- Format: `PascalCase`
- Example: `HeroSection.jsx`, `PricingCard.jsx`

### CSS Classes
- Format: `lowercase-with-hyphens`
- Example: `hero-section`, `pricing-card`

### Variables & Functions
- Format: `camelCase`
- Example: `handleClick`, `getUserData`

## Scalability Strategy

### Adding 10 Projects
No changes needed. Structure inherits.

### Adding 100 Projects
Consider monorepo tooling:
- Nx
- Turborepo
- Yarn workspaces

### Team Collaboration
- Protect `main` branch
- Require PR reviews
- Enforce linting/tests
- Branch naming: `feature/project-name`, `fix/issue-name`

## Environment Variables

Create `.env.local` in project (never commit):

```
VITE_API_URL=https://api.example.com
VITE_GA_ID=G-XXXXX
```

Use in code:
```jsx
const apiUrl = import.meta.env.VITE_API_URL;
```

## Security

- No secrets in code
- Use GitHub Actions secrets for deployment
- Enable branch protection
- Two-factor authentication for deployments
- Regular dependency audits

## Maintenance

### Weekly
- Monitor deployment errors
- Check Lighthouse scores

### Monthly
- Update dependencies
- Review and prune old projects
- Audit performance

### Quarterly
- Update templates
- Discuss tech stack upgrades
- Plan new features

## Related Docs
- [Adding New Projects](./ADDING_PROJECTS.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Component Library](./COMPONENTS.md)
