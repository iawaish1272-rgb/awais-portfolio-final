# Muhammad Awais — Portfolio

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lenis · lucide-react

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content
Everything personal lives in `src/data/portfolioData.ts`: name, links, projects, experience, education.
**Replace the LinkedIn URL** there with your real profile link.

## Assets
- Profile photo: `public/images/profile.jpg` (falls back to an "MA" monogram if missing)
- CV: `public/cv/Muhammad_Awais_CV_Cybersecurity.pdf`

## Deploy to Vercel
```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```
Or push to GitHub and import the repo at vercel.com/new. No environment variables are needed.

## Notes
- The contact form opens your email app (mailto). For a real inbox form, connect Formspree, Resend or a Next.js route handler.
- Fonts (Fraunces, Manrope) load through `next/font/google`, so the first build needs internet.
