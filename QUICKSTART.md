# Quick Start Guide

Get started with the Web Product Laboratory in 30 seconds.

## Installation

### 1. Clone Repository
```bash
git clone https://github.com/Manidhar8008/manidhar-web-lab.git
cd manidhar-web-lab
```

### 2. Create Your First Project

#### Option A: Using Script (Easiest)
```bash
chmod +x create-project.sh
./create-project.sh
```

Follow prompts to name your project. Script handles setup automatically.

#### Option B: Manual
```bash
# Copy template
cp -r templates/react-tailwind-template projects/my-project

# Install
cd projects/my-project
npm install

# Start developing
npm run dev
```

## 3. Start Developing

```bash
# In your project directory
npm run dev
```

Browser opens to `http://localhost:5173`

Edit `src/App.jsx` and changes auto-reload (HMR).

## 4. Build for Production

```bash
npm run build
```

Creates optimized build in `dist/` folder.

Test locally:
```bash
npm run preview
```

## 5. Deploy

Push to GitHub → GitHub Actions automatically:
- ✅ Builds
- ✅ Tests  
- ✅ Audits with Lighthouse
- ✅ Deploys (when using Vercel/Netlify integration)

Or manually deploy `dist/` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static host

## Next Steps

1. **Explore Components**: See [COMPONENTS.md](docs/COMPONENTS.md)
2. **Learn Architecture**: Read [ARCHITECTURE.md](docs/ARCHITECTURE.md)
3. **Add Multiple Projects**: Use templates as blueprints
4. **Deploy to Production**: Follow [DEPLOYMENT.md](docs/DEPLOYMENT.md)

## Directory Structure Reference

```
your-project/
├── src/
│   ├── components/       # Your custom components
│   ├── pages/            # Page components
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
└── tailwind.config.js    # Tailwind configuration
```

## Using Shared Components

Import from parent directory:

```jsx
import { Button, Hero, Features } from '../../../components';

export default function MyPage() {
  return (
    <>
      <Hero title="Hello" subtitle="World" />
      <Features title="Features" features={[...]} />
      <Button>Click Me</Button>
    </>
  );
}
```

## Common Commands

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
npm run format    # Format with Prettier
```

## Troubleshooting

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

### Changes not auto-reloading?
Make sure you're editing files in `src/`. Vite watches this directory.

### Build failing?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Need TypeScript?
Add to your project:
```bash
npm install --save-dev typescript @types/react @types/react-dom
```

Then rename `.jsx` files to `.tsx`.

## Deployment Checklist

- [ ] Built locally: `npm run build`
- [ ] No console errors: `npm run dev`
- [ ] Lighthouse score 90+: `npm run build && npm run preview`
- [ ] Mobile responsive tested
- [ ] Images optimized
- [ ] SEO meta tags added
- [ ] Analytics configured
- [ ] Environment variables set

## Support & Resources

- **Web Product Lab GitHub**: [manidhar-web-lab](https://github.com/Manidhar8008/manidhar-web-lab)
- **React Docs**: [reactjs.org](https://reactjs.org)
- **Tailwind Docs**: [tailwindcss.com](https://tailwindcss.com)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)
- **Framer Motion**: [framer.com/motion](https://framer.com/motion)

---

**Start building. Deploy fast. Scale infinitely.**
