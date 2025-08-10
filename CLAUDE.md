# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the TFF Legal website repository for jthilak.com - a professional legal consultancy website built with modern web technologies.

## Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── services/       # Services pages
│   │   ├── industries/     # Industries pages
│   │   └── contact/        # Contact page
│   ├── components/
│   │   ├── layout/         # Header, Footer components
│   │   ├── sections/       # Page sections (Hero, etc.)
│   │   └── ui/             # shadcn/ui components
│   └── lib/                # Utility functions
├── public/
│   └── media/              # Images, logos, assets
├── Content/                # Markdown content files
│   ├── Content            # Main website content
│   └── About              # About section content
└── media/                 # Original media assets
```

## Technology Stack

- **Framework**: Next.js 15.4+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Fonts**: Inter (Google Fonts)
- **Package Manager**: npm

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Key Design Principles

1. **Professional & Modern**: Clean, sophisticated design suitable for legal services
2. **No Gold/Glitter**: Maintain professional color palette
3. **Middle Eastern Context**: Design should reflect regional business culture
4. **Mobile-First**: Responsive design for all devices
5. **Performance**: Fast loading with optimized images and code splitting

## Content Structure

The main content is stored in `/Content/` directory:
- `Content` file contains all website sections, services, and copy
- `About` file contains Jitheesh's professional background and experience
- Content includes legal pages (Privacy, Terms, Cookie Policy, AI Policy)

## Asset Management

- Logo files: `TFF Law Logo Colour Version.png`, `TFF_Law_Logo_White_Version.png`
- Profile image: `jitheeshprofilepic.jpg`
- All media assets are in `/public/media/` for Next.js optimization

## Development Notes

- The site uses shadcn/ui for consistent, accessible components
- Header includes responsive navigation with dropdowns
- Footer contains links to legal pages and company information
- Hero section emphasizes "Legal Solutions Simplified" messaging
- About page showcases Jitheesh's 25+ years of experience

## Common Tasks

- Add new pages: Create in `/src/app/[page-name]/page.tsx`
- Update content: Edit files in `/Content/` directory
- Add components: Use shadcn CLI or create in `/src/components/`
- Update styling: Modify Tailwind classes or global CSS