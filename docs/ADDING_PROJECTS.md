# Adding New Projects

Complete guide for adding projects to the Web Product Laboratory and making them appear in the portfolio homepage.

## The Workflow

### 1. Create Project (Auto-scaffolded)

```bash
./create-project.sh
```

Follow prompts:
- Project name (kebab-case, e.g., `my-saas-landing`)
- Project type (`demo` or `client`)
- Project description

**What happens automatically:**
- ✅ Project folder created in `/projects/`
- ✅ Dependencies installed
- ✅ `meta.json` template generated
- ✅ Ready to start coding

### 2. Develop Your Project

```bash
cd projects/my-project
npm run dev
```

Build as usual. Everything is independent and hot-reloads.

### 3. Update Project Metadata

Edit `projects/my-project/meta.json`:

```json
{
  "title": "My SaaS Landing",
  "description": "Beautiful landing page for AI product with high conversion",
  "type": "demo",
  "status": "live",
  "live_url": "https://my-saas-landing.vercel.app",
  "github_folder": "projects/my-project",
  "screenshot_path": "assets/screenshots/my-project-hero.png",
  "tags": ["React", "Tailwind", "Framer Motion", "Landing Page"],
  "performance": {
    "lighthouse": 92,
    "core_web_vitals": "all_good",
    "bundle_size_kb": 45
  },
  "featured": true,
  "order": 6
}
```

**Field descriptions:**
- `title` — Project name (displays in portfolio)
- `description` — One-line description (shows in grid)
- `type` — `"demo"` (your project) or `"client"` (client work)
- `status` — `"live"` or `"building"`
- `live_url` — Link to deployed site (use `"#"` if not ready)
- `github_folder` — Path to project folder
- `screenshot_path` — Path to hero screenshot (from repo root)
- `tags` — Array of tech stack labels
- `performance` — Lighthouse metrics
  - `lighthouse` — Score 0-100
  - `core_web_vitals` — `"all_good"` or `"pending"`
  - `bundle_size_kb` — Gzipped size
- `featured` — `true` to show in main README, `false` to hide
- `order` — Display order (lower number = higher position)

### 4. Add Screenshot

Place a hero screenshot at the path specified in `screenshot_path`:

```
assets/screenshots/my-project-hero.png
```

**Guidelines:**
- Size: 1280px × 720px (16:9 ratio)
- Format: PNG or WebP
- Size: < 500KB
- Show the hero or main view of your site

For quick screenshots:
```bash
# Using Vercel CLI
vercel --prod --scope manidhar8008

# Then screenshot the live site
# Or use browser DevTools → Capture Screenshot
```

### 5. Build & Deploy

```bash
npm run build
npm run preview  # Test locally
```

Deploy to Vercel or Netlify (one-click from GitHub).

Update `live_url` in meta.json with your deployment URL.

### 6. Update README Portfolio

Your project automatically appears in README.md once:
- ✅ `featured: true` in meta.json
- ✅ Screenshot exists at specified path
- ✅ meta.json is valid JSON

The next time someone views the README, they'll see your project featured.

## File Structure

Each project should follow this structure:

```
projects/my-project/
├── meta.json              ← Project metadata (auto-generated)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── index.html
├── README.md              ← Project-specific readme
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── images/
└── dist/                  ← Build output (gitignored)
```

## Naming Conventions

Follow these conventions for consistency:

### Project Folders
- **Format**: `kebab-case`
- **Example**: `ai-saas-landing`, `fintech-dashboard`, `portfolio-dark`
- **Not**: `AiSaasLanding`, `AI SaaS Landing`, `ai_saas_landing`

### File Names
- **Components**: `PascalCase` → `HeroSection.jsx`, `PricingCard.jsx`
- **Utils**: `camelCase` → `formatPrice.js`, `validateEmail.js`
- **CSS**: `kebab-case` → `hero-section`, `pricing-card`

### Meta.json Tags
Use consistent tags:
- **Framework**: `React`, `Next.js`, `Vue`
- **Styling**: `Tailwind`, `CSS`, `Sass`
- **Animation**: `Framer Motion`, `GSAP`, `Animations`
- **Type**: `Landing Page`, `Portfolio`, `Dashboard`, `SaaS`, `MVP`
- **Features**: `Dark Mode`, `Responsive`, `Accessible`, etc.

## Project Types

### Demo (`type: "demo"`)
Your personal projects, experiments, and templates.

Organized under: **✨ Personal Demos & Experiments**

### Client (`type: "client"`)
Work you did for real clients (with permission).

Organized under: **🤝 Client Work**

**Note**: Use client projects strategically to show your range and prove results.

## Featured vs Hidden

- **`featured: true`** — Shows in main README portfolio grid
- **`featured: false`** — Hidden from main view, but still in `/projects/` folder

Use `featured: false` for:
- Work in progress
- Internal tools
- Deprecated projects
- Projects not ready to showcase

## Updating Existing Projects

### Change Status
```json
{
  "status": "live",
  "live_url": "https://example.vercel.app"
}
```

### Update Screenshot
Replace the image file at `screenshot_path`. No code changes needed.

### Reorder Projects
Change the `order` field:
```json
{
  "order": 1  // First position
}
```

### Update Performance Metrics
After deployment, update performance:
```bash
npm run build
npm run preview

# Then check with Lighthouse
# Update meta.json with new scores
```

```json
{
  "performance": {
    "lighthouse": 95,
    "core_web_vitals": "all_good",
    "bundle_size_kb": 42
  }
}
```

## Auto-Generation & Automation

The portfolio grid is **auto-generated** from meta.json files:

```bash
# Scan all projects and show their status
node scripts/generate-projects-grid.js
```

This command:
1. Scans `/projects/` for `meta.json` files
2. Reads all project metadata
3. Generates markdown for featured projects
4. Shows summary statistics

**Future enhancement**: This will auto-update README.md directly.

## Quick Checklist

Before marking `featured: true`:

- [ ] Project is deployed (or `live_url` is a demo site)
- [ ] Screenshot added to `assets/screenshots/`
- [ ] `meta.json` is valid JSON
- [ ] Lighthouse score 85+
- [ ] Mobile responsive
- [ ] All tags are relevant
- [ ] Description is clear and benefit-focused
- [ ] `type` is correct (`demo` or `client`)

## Examples

### Example 1: New Landing Page

```bash
./create-project.sh
# Input: ai-affiliate-tool
# Type: demo
# Description: Landing page for AI affiliate program

cd projects/ai-affiliate-tool
npm run dev

# ... build your landing page ...

npm run build
npm run preview

# Deploy to Vercel
# Add screenshot to assets/screenshots/ai-affiliate-tool-hero.png
# Update meta.json:
# - Set live_url
# - Update tags (["React", "Tailwind", "Landing Page", "Conversion"])
# - Set featured: true
# - Update performance metrics (run Lighthouse)
```

### Example 2: Client Portfolio

```bash
./create-project.sh
# Input: acme-corp-site
# Type: client
# Description: Custom website for ACME Corporation

# ... develop ...

# Update meta.json:
# - type: "client"
# - featured: true (if client approves)
```

## Troubleshooting

### Screenshot not showing?
- Check path in `screenshot_path` is correct
- Verify image file exists
- Use relative path from repo root
- Try PNG format if WebP fails

### meta.json syntax error?
```bash
# Validate JSON
node -e "console.log(JSON.parse(require('fs').readFileSync('projects/my-project/meta.json')))"
```

### Project not appearing in README?
- Is `featured: true`?
- Does screenshot exist?
- Is meta.json valid?
- Run `node scripts/generate-projects-grid.js` to debug

### Performance metrics outdated?
After code changes or optimizations:
1. Run `npm run build`
2. Test with Lighthouse (DevTools or `npm run preview`)
3. Update values in `meta.json`

## Next Steps

1. **Create your first project**: `./create-project.sh`
2. **Develop**: `npm run dev` and build something great
3. **Add screenshot**: Place in `assets/screenshots/`
4. **Update meta.json**: Fill in all fields
5. **Set featured**: `"featured": true`
6. **Deploy**: Push to GitHub
7. **See it live**: Check your README portfolio! ✨

---

## Related Docs

- **[Quick Start](../QUICKSTART.md)** — Get started in 5 minutes
- **[Architecture](./ARCHITECTURE.md)** — System design deep dive
- **[Components](./COMPONENTS.md)** — Reusable UI library
- **[Deployment](./DEPLOYMENT.md)** — Production deployment guide
