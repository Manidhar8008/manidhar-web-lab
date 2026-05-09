# Setup Guide: Turn This Lab Into Your Sales Machine

**Estimated time: 30 minutes**

This guide walks you through setting up your Web Product Laboratory as a freelance acquisition engine.

---

## Step 1: Personalize Your README (10 min)

Open [README.md](README.md) and update these sections:

### About Me Section
```markdown
> I'm a **Senior Product Engineer** who runs a private web laboratory...
```
Replace with YOUR unique value proposition.

**Questions to answer:**
- What's your niche? (SaaS, fintech, agency sites?)
- What timeframe do you specialize in? (3 weeks, 4 weeks?)
- What results do you deliver? (90+ Lighthouse? Core Web Vitals?)

### Testimonials Section
```markdown
> *"He shipped our MVP in 3 weeks..."*
```
Add real testimonials or client quotes. If you don't have them yet, leave placeholders.

### Contact Section
Replace these with YOUR links:
- Twitter: `[@YourHandle](https://twitter.com/yourhandle)`
- LinkedIn: `[Your Profile](https://linkedin.com/in/yourprofile)`
- Email: `your@email.com`
- Calendar: `[Schedule here](https://calendly.com/your-link)`

### Pricing Section
Update the pricing to match YOUR rates.

---

## Step 2: Create Your First "Real" Project (10 min)

Pick one of the 5 demo projects and make it REAL:

### Option A: Make an Existing Project Yours
```bash
cd projects/ai-saas-landing

# Replace content in src/App.jsx with YOUR styling
# Update tailwind.config.js with YOUR colors
# Customize the copy
```

Then run:
```bash
npm run dev  # Develop locally
npm run build  # Optimize for production
```

### Option B: Create a Brand New Project from Template
```bash
./create-project.sh
# Follow prompts
```

---

## Step 3: Deploy Your Project (5 min)

### Using Vercel (Fastest)
1. Push to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Select your repository
5. Set root: `projects/ai-saas-landing`
6. Deploy (takes 60 seconds)

### Using Netlify
Same process, different domain.

---

## Step 4: Update Project Metadata (5 min)

Edit `projects/ai-saas-landing/meta.json`:

```json
{
  "title": "Your Project Name",
  "description": "What it does",
  "type": "demo",
  "live_url": "https://your-deploy-url.vercel.app",
  "screenshot_path": "assets/screenshots/ai-saas-landing-hero.png",
  "featured": true,
  "tags": ["React", "Tailwind", "Your Tech"]
}
```

Add screenshot to `assets/screenshots/ai-saas-landing-hero.png`

---

## Step 5: Your README Auto-Updates (Magic!)

Run this command:
```bash
npm run generate-grid
```

Your projects automatically generate markdown for README.

---

## 🎯 Complete Workflow

### When You Finish a Client Project:

```bash
# 1. Create project folder
./create-project.sh
# Input: client-name-site

# 2. Build your project
npm run dev
# ... build ...
npm run build

# 3. Deploy to Vercel
# Push to GitHub, deploy one-click

# 4. Update meta.json
# Set: type: "client", featured: true, live_url: "..."

# 5. Add screenshot
# Place in assets/screenshots/client-name-site-hero.png

# 6. Commit everything
git add -A
git commit -m "Add client project: Client Name"
git push

# 7. View your portfolio
# Your project automatically appears in README!
```

**Total time: 30 minutes**

---

## 📋 Checklist: Ready to Acquire

- [ ] README.md updated with your info
- [ ] Social links added (Twitter, LinkedIn, Email)
- [ ] At least 1 project deployed and working
- [ ] meta.json files updated with real URLs
- [ ] Screenshots added to assets/screenshots/
- [ ] First project is `featured: true`
- [ ] GitHub repository is public
- [ ] Portfolio link is in your Twitter bio

---

## 🚀 Now Share It

### Day 1: Twitter
```
Just launched my Web Product Laboratory - 
a showcase of production-grade projects I've built.

Every site hits 90+ Lighthouse, ships fast, and looks beautiful.

Currently taking on 2-3 projects/month 

Check it out: github.com/[YOUR-USERNAME]/manidhar-web-lab
```

### Day 3: LinkedIn
Post about your first project with deep details.

### Day 5: Reddit
Share to r/webdev, r/freelance, r/startups

### Week 2: Cold Outreach
Include link in freelance pitches.

---

## 💡 Strategic Tips

### Positioning
Pick ONE niche:
- SaaS landing pages
- Financial dashboards
- MVP/prototype development
- Agency sites
- Portfolio sites

### Social Proof
Add these to README:
- Your best project as #1
- Client testimonials (even if placeholder)
- Performance numbers (Lighthouse, Core Web Vitals)
- Delivery time (3 weeks, 4 weeks)

### Pricing
Be confident. Example:
```
🔴 Not a cheap freelancer
🟢 I'm investment in your growth
🟢 Pay for speed + quality
```

### Authority
Share your process:
- Tweet technical challenges you solved
- Write about your deployment strategy
- Show your component library

---

## ⭐ Success Metrics (Track These)

- **GitHub visitors/month**: Target 500+
- **Twitter impressions**: Track weekly
- **Consultation requests**: Target 10+/month
- **Close rate**: Should be 50%+ (pre-qualified leads)
- **Average project value**: $8K-30K+

---

## 🎯 Your 30-Day Growth Plan

### Week 1: Foundation
- [ ] Personalize README
- [ ] Deploy 1-2 projects
- [ ] Update meta.json
- [ ] Add screenshots

### Week 2: Presence
- [ ] Tweet about your lab (3x)
- [ ] Update LinkedIn
- [ ] Post on Reddit
- [ ] Update Twitter bio link

### Week 3: Authority
- [ ] Write 1 blog post about your process
- [ ] Share technical deep-dive on Twitter
- [ ] Reply to freelance inquiries with link

### Week 4: Sales
- [ ] Cold email 10 prospects (with GitHub link)
- [ ] Answer r/freelance questions with portfolio link
- [ ] Book 1+ consultation calls

---

## 🎓 Pro Tips

### Make It Personal
- Add your photo to README
- Write in your voice (not generic)
- Show your personality

### Keep It Updated
- New project? Update portfolio
- New client testimonial? Add it
- Better screenshot? Update it

### Be Strategic
- Feature your BEST work
- Show range (different types)
- Highlight client results ($, users, etc.)

### Build Momentum
- 1 new project/month = 12 portfolio additions/year
- 3 tweets/week = 150 connections/year
- 5% conversion of visits to inquiries = 25 leads/month

---

## ✅ You're Ready!

Your Web Product Laboratory is now:
- ✅ A beautiful freelance portfolio
- ✅ A client acquisition tool
- ✅ An authority builder
- ✅ An automated project showcase

**Next step: Deploy your first project and share it.**

Good luck! 🚀

---

## 🆘 Troubleshooting

### "Vercel deployment failed"
- Check root folder is correct
- Check Node version matches
- Check env variables set

### "Screenshot not showing"
- Verify file exists at path
- Check path is relative to repo root
- Try PNG format

### "meta.json has errors"
```bash
node -e "console.log(JSON.parse(require('fs').readFileSync('projects/my-project/meta.json')))"
```

---

**Questions?** Check [CLIENT_ACQUISITION.md](CLIENT_ACQUISITION.md) for sales strategy tips.

**Questions about tech?** See [docs/](docs/) folder.

**Ready? Go build. Ship. Share. Acquire.** 🎉
