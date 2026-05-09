# Deployment Guide

Deploy projects from the Web Product Laboratory to production.

## Overview

Each project can be deployed independently to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Your own server

## Vercel (Recommended)

Easiest for React/Vite projects.

### Setup

1. Push project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New..." → "Project"
4. Select GitHub repository
5. Set root directory: `projects/my-project`
6. Deploy

### Environment Variables

In Vercel dashboard:
1. Project Settings → Environment Variables
2. Add any API keys or configs
3. Redeploy

### Custom Domain

1. Settings → Domains
2. Add domain
3. Follow DNS instructions

## Netlify

Alternative to Vercel with similar workflow.

### Setup

1. Connect GitHub to Netlify
2. Select repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy

## GitHub Pages

For static sites only.

### Setup

1. Enable GitHub Pages in repo settings
2. Select branch: `main`
3. Select folder: `docs` or root
4. Deploy

**Note**: Requires custom workflow for multiple projects.

## Docker Deployment

For custom servers.

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## CI/CD with GitHub Actions

Automatic deployment on push to main:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: vercel/action@v28
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: projects/my-project
```

## Performance Checklist

Before deploying:
- [ ] Run Lighthouse audit
- [ ] Test on mobile devices
- [ ] Check build size: `npm run build`
- [ ] Verify environment variables
- [ ] Test all interactive features
- [ ] Check security headers
- [ ] Optimize images

## Monitoring

### Sentry (Error Tracking)

```bash
npm install --save @sentry/react @sentry/tracing
```

```jsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_DSN",
  environment: process.env.NODE_ENV,
});
```

### Analytics

Add Google Analytics or similar:

```jsx
<!-- In index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Rollback

If deployment fails:

### Vercel
Settings → Deployments → Previous version → "Restore"

### Netlify
Deploys tab → Select version → "Publish deploy"

### GitHub Pages
See deployment history in repo settings

## Troubleshooting

### Build fails locally but works in CI?
- Check Node version matches
- Verify all dependencies are in package.json
- Check for OS-specific commands

### Lighthouse scores low?
- Optimize bundle size
- Add image lazy loading
- Use Code splitting
- Enable gzip compression

### 404 errors on custom domain?
- Verify DNS settings
- Check SSL certificate
- Wait for DNS propagation (up to 48 hours)
