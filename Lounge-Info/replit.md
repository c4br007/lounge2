# GUEST LOUNGE BAR

## Overview

A premium hospitality website for a hookah lounge bar featuring a dark, moody aesthetic with gold accents. The site serves as a marketing and reservation platform showcasing the venue's atmosphere, menu, customer reviews, and contact information. Built with a React frontend and Express backend, targeting Russian-speaking customers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll animations
- **Carousel**: Embla Carousel for smooth review sliding

### Design System
- **Typography**: Playfair Display (serif, display headings) + Montserrat (sans-serif, body text)
- **Color Palette**: Dark charcoal background with gold/amber accent colors (HSL-based CSS variables)
- **Theme**: Single dark mode optimized for premium hospitality aesthetic

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **Build Tool**: esbuild for server bundling, Vite for client
- **API Structure**: REST endpoints defined in `shared/routes.ts` with Zod validation

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Migrations**: Drizzle Kit (`drizzle-kit push` for schema sync)
- **Validation**: Zod schemas generated from Drizzle schemas via `drizzle-zod`

### Project Structure
```
├── client/src/          # React frontend
│   ├── components/      # UI components (shadcn + custom)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Route components
│   └── lib/             # Utilities (queryClient, utils)
├── server/              # Express backend
│   ├── routes.ts        # API route handlers
│   ├── storage.ts       # Database operations
│   └── db.ts            # Database connection
├── shared/              # Shared types and schemas
│   ├── schema.ts        # Drizzle table definitions
│   └── routes.ts        # API route contracts
└── attached_assets/     # Static images and assets
```

### Path Aliases
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets` → `./attached_assets`

## External Dependencies

### Database
- **PostgreSQL**: Primary database (connection via `DATABASE_URL` environment variable)
- **Connection**: pg Pool with Drizzle ORM wrapper

### Third-Party Services
- **WhatsApp**: Booking integration via direct link (`wa.me/79620005039`)
- **Google Fonts**: Playfair Display, Montserrat font families

### Key NPM Packages
- **UI**: Radix UI primitives, class-variance-authority, clsx, tailwind-merge
- **Forms**: react-hook-form with @hookform/resolvers (Zod)
- **Data Fetching**: @tanstack/react-query
- **Date Handling**: date-fns
- **Icons**: lucide-react

### Development Tools
- **Vite**: Frontend dev server with HMR
- **tsx**: TypeScript execution for server development
- **Replit Plugins**: vite-plugin-runtime-error-modal, vite-plugin-cartographer (dev only)