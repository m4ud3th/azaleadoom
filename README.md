# Azalea - Sludge Metal Band Website

A modern, atmospheric website for Azalea, a sludge metal band that fuses crushing riffs with mysterious, enlightening perspectives. Built with Next.js 16 and featuring custom typography and smooth section navigation.

## Features

- **Responsive Design** - Optimized for all devices
- **Custom Typography** - UnifrakturCook blackletter for headings, Bodoni Moda for body text
- **Smooth Navigation** - Section-to-section scrolling with mouse wheel
- **Auto-hiding Header** - Disappears when scrolling through sections
- **Album Showcase** - Interactive album covers with hover effects
- **Atmospheric Design** - Dark theme with purple accents and background imagery

## Tech Stack

- **Framework**: Next.js 16.1.1 with Turbopack
- **Styling**: Tailwind CSS with custom fonts
- **Typography**: Google Fonts (UnifrakturCook, Bodoni Moda)
- **Images**: Next.js Image optimization
- **Development**: TypeScript, ESLint

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
azalea-next/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and font setup
│   │   ├── layout.tsx       # Root layout with font imports
│   │   └── page.tsx         # Main page with smooth scrolling
│   └── components/
│       ├── Header.tsx       # Auto-hiding navigation header
│       ├── AboutSection.tsx # Band info and new releases
│       ├── LiveSection.tsx  # Live shows and events
│       └── MerchSection.tsx # Merchandise showcase
├── public/
│   ├── azalealogo.png      # Band logo
│   ├── azaleaflower.png    # Background imagery
│   ├── bandfoto.png        # Band photo
│   ├── loveandpain.png     # Album cover
│   └── thesehollowgraves.png # Album cover
└── tailwind.config.js      # Custom color theme (azalea-purple)
```

## Key Components

- **Smooth Scrolling**: Mouse wheel navigation between sections
- **Font Integration**: Next.js font optimization for Google Fonts
- **Purple Theme**: Custom azalea-purple color (#7E4AB8) throughout
- **Image Optimization**: Responsive images with proper sizing attributes
- **Component Architecture**: Modular section-based design

## Deployment

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
