# 🚀 Quick Start Guide

## Your Portfolio Has Been Redesigned!

Your portfolio is now a modern, single-page scrollable website with smooth animations, dark theme, and responsive design.

## Getting Started (3 steps)

### 1. Start the Development Server
```bash
cd /Users/niyaznabi/Desktop/magic-portfolio
npm run dev
```
Open http://localhost:3000 in your browser.

### 2. Update Your Content

#### Update PharMeTrade Project
Edit `src/app/[locale]/projects/projectsData.ts` and fill in the PharMeTrade section (search for the placeholder comments).

#### Update Your Photos/Resume
- Replace `public/images/avatar.jpg` with your professional photo
- Replace `public/images/resume.pdf` with your latest resume

### 3. Deploy
```bash
npm run build        # Test the build
git add .
git commit -m "New portfolio design"
git push origin main # Vercel auto-deploys
```

## What's New?

### Homepage Sections (in order):
1. **Hero** - Your name, title, animated background, CTAs
2. **About** - Bio + photo
3. **Experience** - Timeline with 3 positions
4. **Projects** - 3 featured project cards
5. **Skills** - Categorized tech stack
6. **Contact** - Footer with social links

### Navigation
- **Desktop:** Sticky bar at top with smooth scroll links
- **Mobile:** Hamburger menu (click the menu icon)
- **Scroll:** Click any nav item to smoothly scroll to that section

### Project Pages
Each project has a detail page:
- `/en/projects/cue`
- `/en/projects/one-chat`
- `/en/projects/pharmetrade`

## Customization

### Change Accent Color
Search and replace `cyan-` with another color:
- `blue-` for blue
- `purple-` for purple
- `teal-` for teal
- `green-` for green

Example in VS Code:
- Press `Cmd+Shift+F` (Mac) or `Ctrl+Shift+F` (Windows)
- Search for: `cyan-`
- Replace with: `purple-` (or your choice)
- Click "Replace All"

### Add a New Project
1. Open `src/app/[locale]/projects/projectsData.ts`
2. Add a new entry following the existing pattern
3. The project page will be automatically created at `/projects/your-slug`

### Update Social Links
Edit the homepage (`src/app/[locale]/page.tsx`):
- Search for "github.com/niyaz-nabi"
- Search for "linkedin.com/in/niyaz-nabi"
- Search for "niyaznabi6@gmail.com"

## Troubleshooting

### Build Errors
```bash
npm run build
```
If you see errors, check the console output and fix any TypeScript issues.

### Dev Server Not Starting
```bash
# Kill any existing processes
pkill -f "next dev"

# Restart
npm run dev
```

### Styling Issues
Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

## Documentation

- **Full Guide:** `REDESIGN_GUIDE.md`
- **Summary:** `REDESIGN_SUMMARY.md`
- **Checklist:** `CHECKLIST.md`

## Tech Stack

- Next.js 14 (App Router)
- Framer Motion (animations)
- Tailwind CSS (styling)
- TypeScript
- React Icons

## Browser Support

✅ Chrome, Firefox, Safari, Edge (latest versions)
✅ Mobile browsers (iOS Safari, Chrome Mobile)
✅ Fully responsive

---

**That's it! Your portfolio is ready to impress.** 🎉

Questions? Check the documentation files or review the code comments.
