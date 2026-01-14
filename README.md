# Azalea - Sludge Metal Band Website

Built with Next.js, TypeScript, and Tailwind CSS.

A modern, atmospheric website for Azalea, a sludge metal band that fuses crushing riffs with mysterious, enlightening perspectives. Built with Next.js 16 and featuring custom typography, adaptive navigation, and optimized responsive design.

## Features

- **Responsive Design** - Optimized for all devices with mobile-first approach
- **Custom Typography** - Uncial Antiqua for headings, Bodoni Moda for body text
- **Adaptive Navigation** - Auto-hiding header with scroll-based visibility controls
- **Smart Section Detection** - Intelligent active section tracking for navigation
- **Interactive Album Cards** - Hover effects and responsive sizing with Spotify integration
- **Live Show Integration** - Bandsintown widget for real-time concert listings
- **Atmospheric Design** - Dark theme with custom azalea-purple accents (#7E4AB8)
- **Performance Optimized** - Next.js Image optimization and lazy loading

## Tech Stack

- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.18 with custom theme
- **Typography**: Google Fonts (Uncial Antiqua, Bodoni Moda)
- **Images**: Next.js Image optimization with responsive sizing
- **Development**: ESLint for code quality
- **Deployment**: Vercel-ready with optimized build configuration

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

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm run start` - Runs the production server
- `npm run lint` - Runs ESLint for code quality checks

## Project Structure

```
azalea/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles with custom theme variables
│   │   ├── layout.tsx       # Root layout with font imports and metadata
│   │   └── page.tsx         # Main page with smooth scrolling behavior
│   └── components/
│       ├── Header.tsx       # Adaptive navigation with scroll detection
│       ├── AboutSection.tsx # Band info and album showcase
│       ├── LiveSection.tsx  # Live shows with Bandsintown integration
│       ├── MerchSection.tsx # Merchandise showcase
│       └── Footer.tsx       # Social media links and contact
├── public/
│   ├── azalealogo.png      # Band logo (optimized)
│   ├── azaleaflower.png    # Background imagery
│   ├── bandfoto.png        # Band photo
│   ├── loveandpain.png     # "Love and Pain" album cover
│   └── thesehollowgraves.png # "These Hollow Graves" album cover
├── tailwind.config.js      # Custom theme with azalea-purple palette
├── next.config.ts          # Next.js configuration
└── vercel.json            # Deployment configuration
```

## Key Features

### Adaptive Navigation
- **Auto-hiding Header**: Disappears when scrolling through sections for immersive experience
- **Smart Toggle**: Reappears with toggle button when needed
- **Section Detection**: Active navigation item updates based on viewport position
- **Responsive Behavior**: Different logic for mobile and desktop interactions

### Album Showcase
- **Interactive Cards**: Grayscale to color on hover (desktop) and scroll-based (mobile)  
- **Spotify Integration**: Direct links to tracks on streaming platforms
- **Responsive Design**: Optimized card sizing for different screen sizes
- **Performance**: Lazy loading and optimized image sizes

### Live Shows
- **Bandsintown Widget**: Real-time concert data and ticket purchasing
- **Custom Styling**: Branded appearance matching site design
- **Mobile Optimized**: Touch-friendly interface for mobile users

## Custom Styling

The site uses a custom color palette defined in Tailwind configuration:
- **Primary**: `azalea-purple` (#7E4AB8)
- **Accents**: Various purple shades (300, 500, 700, 900)
- **Typography**: Custom font families with CSS variables
- **Animations**: Smooth transitions and hover effects throughout

## Performance Optimizations

- **Next.js Image Optimization**: Responsive images with proper sizing attributes
- **Lazy Loading**: Images load as needed during scroll
- **CSS Custom Properties**: Efficient theme variable management  
- **Component Architecture**: Modular, reusable component design
- **SEO Ready**: Proper metadata and semantic HTML structure

## Deployment

The site is optimized for deployment on Vercel:

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Automatic deployments on every push to main branch

For manual deployment:
```bash
npm run build
npm run start
```

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more deployment options.
