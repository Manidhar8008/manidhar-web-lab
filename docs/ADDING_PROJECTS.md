# Adding New Projects

This guide explains how to add a new project to the Web Product Laboratory.

## Quick Start

### 1. Clone a Template

```bash
cp -r templates/react-tailwind-template projects/my-new-project
cd projects/my-new-project
npm install
```

### 2. Project Structure

```
projects/my-new-project/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── public/
└── README.md
```

### 3. Configure Your Project

Edit `package.json`:
- Update name, description, version
- Add custom scripts if needed

Edit `vite.config.js`:
- Customize build options

Edit `tailwind.config.js`:
- Extend theme colors and animations

### 4. Add to Repository

1. Create project in `/projects/`
2. Add README.md with project description
3. Commit changes
4. GitHub Actions will automatically build and audit

## Naming Conventions

- Project folders: `kebab-case` (e.g., `ai-saas-landing`)
- Component files: `PascalCase` (e.g., `HeroSection.jsx`)
- Utility functions: `camelCase` (e.g., `formatDate.js`)
- CSS classes: lowercase with hyphens (e.g., `hero-section`)

## Project Metadata

Each project should include:

**projects/my-project/package.json**
```json
{
  "name": "my-project",
  "description": "Brief description",
  "version": "1.0.0",
  "author": "Your Name",
  "homepage": "https://my-project.vercel.app"
}
```

**projects/my-project/README.md**
```markdown
# My Project

Brief description.

## Live Demo
[View Live](https://my-project.vercel.app)

## Features
- Feature 1
- Feature 2

## Tech Stack
- React, Vite, Tailwind CSS

## Getting Started
```

## Deployment

Each project is independently deployable:

1. **Vercel**: Connect repository, select project folder
2. **Netlify**: Same approach
3. **GitHub Pages**: Configure in settings

## Reusable Components

Use shared components from `/components/`:

```jsx
import Button from '../../components/ui/Button';
import Hero from '../../components/sections/Hero';
import Features from '../../components/sections/Features';
```

## Screenshots

Add screenshots to `/assets/screenshots/`:
```
assets/screenshots/
├── ai-saas-landing/
│   ├── hero.png
│   ├── features.png
│   └── pricing.png
├── startup-mvp/
└── ...
```

## Performance

- Run Lighthouse audits regularly
- Check built file sizes: `npm run build && npm run preview`
- Use WebP for images
- Code split components when possible

## Best Practices

✅ Keep projects isolated and independently runnable
✅ Use TypeScript for larger projects
✅ Document custom configurations
✅ Test components thoroughly
✅ Optimize images and assets
✅ Use environment variables for configuration

❌ Don't create circular dependencies
❌ Don't hardcode sensitive data
❌ Don't commit node_modules
❌ Don't ignore TypeScript/ESLint warnings
