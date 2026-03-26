# Ageless Living™ Wellness Centre

A modern React-based website for Ageless Living™ Wellness Centre, featuring multi-location support, treatment booking, and comprehensive wellness services across British Columbia.

## Tech Stack

- **Framework**: React 18.3 + TypeScript
- **Build Tool**: Vite 5.4 (with SWC)
- **Styling**: Tailwind CSS 3.4 + shadcn/ui components
- **Routing**: React Router DOM v6
- **Data Fetching**: TanStack React Query
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Testing**: Vitest (unit) + Playwright (E2E)

## Prerequisites

- Node.js 18+ (or Bun)
- npm, pnpm, or bun package manager

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd ageless-journey-creator

# Install dependencies
npm install

# Or using bun (faster)
bun install

# Or using pnpm
pnpm install
```

## Running the Application

### Development Server

```bash
npm run dev
```

Opens at `http://localhost:8080` with hot module replacement.

### Production Build

```bash
npm run build
```

Creates optimized build in `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

### Testing

```bash
# Run tests once
npm run test

# Watch mode
npm run test:watch
```

## Project Structure

```
src/
├── assets/          # Images and media files
├── components/      # Reusable React components
│   └── ui/          # shadcn UI component library (70+ components)
├── hooks/           # Custom React hooks
├── lib/             # Utilities and helpers
├── pages/           # Page components (routes)
├── test/            # Test configuration and examples
├── App.tsx          # Root component with routing
├── main.tsx         # Application entry point
└── index.css        # Global styles and Tailwind config
```

## Available Routes

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/services` | Treatment catalog |
| `/services/botox-dysport` | Specific treatment details |
| `/prices` | Pricing information |
| `/about` | Company information |
| `/blog` | Blog articles |
| `/book` | Booking interface |
| `/shop` | Product shop |
| `/contact` | Contact and locations |

## Features

- **Multi-Location Support**: Langley, Victoria, and Kelowna clinics
- **Booking System**: Location, service, and staff selection
- **AI Chatbot**: Rule-based assistant for navigation
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags and Open Graph support

## Configuration

The project uses Vite for configuration. Key settings:

- **Port**: 8080
- **Path Alias**: `@` → `./src`

## License

Proprietary - Ageless Living™ Wellness Centre
