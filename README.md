# Euodia — The Fragrance of Christ Through Music

A production-ready website for **Euodia**, a Christian worship music collective. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

---

## Overview

Euodia's site is designed to be warm, peaceful, and worshipful — a digital expression of the collective's mission to spread the fragrance of Christ through music and community. The design centers on the Chi-Rho symbol surrounded by lily petals, drawn directly from the collective's visual identity.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Google Fonts (Cormorant Garamond + Inter) |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18.18+ (LTS recommended)
- npm 9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/euodia.git
cd euodia

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local and set NEXT_PUBLIC_SITE_URL to your domain

# 4. Add your media assets (see public/README-assets.md)
# At minimum, add public/hero-video.mp4 and public/hero-poster.jpg

# 5. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Folder Structure

```
euodia/
├── app/
│   ├── globals.css       # Global styles, CSS variables, base reset
│   ├── layout.tsx        # Root layout: fonts, metadata, OG tags
│   ├── page.tsx          # Homepage — assembles all sections
│   ├── sitemap.ts        # Auto-generated sitemap.xml
│   └── robots.ts         # Auto-generated robots.txt
│
├── components/
│   ├── EuodiaLogo.tsx    # Inline SVG logo (Chi-Rho + lily)
│   ├── Hero.tsx          # Full-viewport video hero section
│   ├── Meaning.tsx       # Two-column symbol meaning section
│   ├── CTA.tsx           # "Join the Journey" dark CTA section
│   ├── Footer.tsx        # Minimal footer with social links
│   └── SectionTitle.tsx  # Reusable animated section heading
│
├── lib/
│   └── utils.ts          # cn() helper + social link constants
│
├── public/
│   ├── logo.svg          # Standalone SVG logo
│   ├── hero-video.mp4    # [REPLACE] Hero background video
│   ├── hero-poster.jpg   # [REPLACE] Video poster/fallback image
│   ├── og-image.jpg      # [REPLACE] Open Graph share image
│   ├── favicon.ico       # [REPLACE] Browser favicon
│   ├── site.webmanifest  # PWA manifest
│   └── README-assets.md  # Asset replacement guide
│
├── .env.example          # Environment variable template
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

---

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production URL for OG tags, sitemap, canonical | `https://euodia.worship` |

Create a `.env.local` file (never commit this):

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Customization Guide

### Colors

Edit `tailwind.config.ts` to adjust the palette:

```ts
colors: {
  background: "#F8F5EF",   // Warm cream page background
  foreground: "#1A1A1A",   // Near-black primary text
  accent:     "#C7A06C",   // Warm gold — the brand color
  dark:       "#111111",   // Near-black for dark sections
  muted:      "#666666",   // Secondary/body text
}
```

### Typography

Fonts are loaded via `next/font/google` in `app/layout.tsx`. To change:

1. Import your chosen fonts from `next/font/google`
2. Update the `variable` CSS custom properties (`--font-cormorant`, `--font-inter`)
3. Update `tailwind.config.ts` `fontFamily` section

### Social Links

Edit `lib/utils.ts`:

```ts
export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/your-handle",
  youtube:   "https://youtube.com/@your-channel",
  email:     "mailto:hello@your-domain.com",
};
```

### Hero Video

Replace `public/hero-video.mp4` with your own footage. For best performance:

- Format: MP4, H.264
- Resolution: 1920×1080 minimum
- File size: Keep under 15MB (compress with HandBrake)
- Also provide `public/hero-poster.jpg` as a static fallback

---

## Deploying to Vercel

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/euodia)

### Manual deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (first time — prompts for project setup)
vercel

# Deploy to production
vercel --prod
```

### Environment Variables on Vercel

In your Vercel project dashboard:

1. Go to **Settings → Environment Variables**
2. Add `NEXT_PUBLIC_SITE_URL` with your production domain
3. Redeploy for changes to take effect

---

## GitHub Workflow

```bash
# Initial setup
git init
git add .
git commit -m "feat: initial Euodia site"
git remote add origin https://github.com/your-username/euodia.git
git push -u origin main
```

Vercel auto-deploys on every push to `main`. Pull request previews are created automatically for each branch.

### Suggested branch strategy

```
main          → production (auto-deploy)
dev           → staging / preview
feature/*     → individual features / content updates
```

---

## Performance Notes

- Fonts use `display: swap` to prevent invisible text during load
- Hero video includes a `poster` image fallback shown before video loads
- All animations respect `prefers-reduced-motion`
- Images use Next.js `<Image>` optimization where applicable
- Tailwind purges unused CSS in production builds

---

## License

&copy; Euodia Worship Collective. All rights reserved.
