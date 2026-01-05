# $DOGEGOV - Department of Government Efficiency

A satirical meme cryptocurrency landing page inspired by radical government efficiency ideology and DOGE culture.

## Project Overview

$DOGEGOV is a professional landing page for a meme token project with the core philosophy that "true efficiency eventually deletes itself." The website features a clean, official government aesthetic with a Navy/Gold/Red color scheme and Playfair Display typography.

## Features

- **Hero Section**: Eye-catching headline with call-to-action buttons
- **Official Mandates**: Verification cards linking to Elon Musk's DOGE statements
- **About Section**: Clear explanation of $DOGEGOV philosophy
- **Tokenomics**: Budget allocation visualization
- **Execution Timeline**: Phased roadmap with countdown to "deletion"
- **Philosophy Section**: Deep dive into the efficiency ideology
- **Symbol Explanation**: Breakdown of logo components
- **Community Links**: Telegram and X (Twitter) integration
- **Responsive Design**: Mobile-first, works on all devices

## Tech Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS 4 with custom DOGEGOV theme
- **UI Components**: shadcn/ui components
- **Icons**: Lucide React
- **Routing**: Wouter
- **Typography**: Playfair Display (serif), Lato (body), IBM Plex Mono (code)

## Installation

### Prerequisites
- Node.js 18+ (recommended: 20 LTS)
- npm or pnpm

### Setup

1. Extract the ZIP file
2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open `http://localhost:3000` in your browser

## Building for Production

### Build the project:
```bash
npm run build
# or
pnpm build
```

This creates an optimized production build in the `dist/` folder.

### Preview the production build:
```bash
npm run preview
# or
pnpm preview
```

## Deploying to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to connect your project

### Option 2: Using GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel will auto-detect the Vite configuration
6. Click "Deploy"

### Option 3: Manual Upload

1. Build the project: `npm run build`
2. Upload the `dist/` folder to Vercel
3. Set the build command to: `npm run build`
4. Set the output directory to: `dist`

## Project Structure

```
dogegov-landing/
├── client/
│   ├── public/
│   │   └── images/
│   │       └── dogegov-logo.png
│   └── src/
│       ├── pages/
│       │   ├── Home.jsx (main landing page)
│       │   └── NotFound.jsx
│       ├── components/
│       │   └── ui/ (shadcn/ui components)
│       ├── contexts/
│       │   └── ThemeContext.jsx
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css (global styles with DOGEGOV theme)
├── vite.config.js
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Colors
Edit `client/src/index.css` to modify the DOGEGOV color scheme:
- Navy Dark: `#002868`
- Gold: `#D4AF37`
- Warning Red: `#FF0000`

### Typography
Google Fonts are loaded in `client/index.html`:
- Display: Playfair Display (serif)
- Body: Lato (sans-serif)
- Code: IBM Plex Mono (monospace)

### Content
Edit `client/src/pages/Home.jsx` to modify:
- Section titles and descriptions
- Community links (Telegram, X)
- Official mandate links
- Timeline phases
- Any text content

## Environment Variables

No environment variables are required for basic deployment. The project is fully static and client-side rendered.

## Performance

- Optimized for Core Web Vitals
- Responsive images with lazy loading
- Efficient CSS with Tailwind purging
- Minimal JavaScript bundle size
- Fast initial page load

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - See LICENSE file for details

## Support & Contribution

This is a satirical meme project created for entertainment purposes. It is not financial advice.

For questions or suggestions:
- Telegram: https://t.me/dogegov
- X (Twitter): https://x.com/dogegov_meme

---

**Department of Government Efficiency**
*Established to be removed. All rights reserved until deletion.*
