# GUEST LOUNGE BAR Design Guidelines

## Design Approach
**Reference-Based: Premium Hospitality**
Drawing inspiration from Soho House, Ace Hotel, and upscale nightlife venues. Photography-first approach with sophisticated restraint and luxurious spatial rhythm.

## Typography System

**Primary Font**: Cormorant Garamond (serif, elegant)
- Hero Headlines: 64px/72px, weight 300 (light)
- Section Headers: 48px/56px, weight 400
- Subheadings: 32px/40px, weight 500

**Secondary Font**: Inter (sans-serif, modern)
- Body Text: 18px/28px, weight 400
- Navigation: 14px uppercase, weight 500, letter-spacing 2px
- Button Text: 16px, weight 500

## Layout System

**Spacing Primitives**: Tailwind units 4, 8, 12, 16, 24
- Section padding: py-24 desktop, py-16 mobile
- Component spacing: gap-8 standard, gap-12 for feature grids
- Content max-width: max-w-7xl

## Core Components

### Navigation
Fixed top bar with backdrop blur, spanning full width
- Logo left, navigation center (uppercase, spaced), reservation button right
- Mobile: Hamburger menu, drawer overlay

### Hero Section
Full-viewport dramatic photography (100vh) with sophisticated overlay treatment
- Large hero image: Interior shot of lounge with ambient lighting, showcasing seating and atmosphere
- Centered content: Brand name (large serif), tagline, dual CTAs (Book Table / View Menu)
- CTAs with frosted glass effect (backdrop blur), subtle borders

### About/Experience Section
Two-column asymmetric layout (60/40 split)
- Left: Large statement paragraph with generous leading
- Right: Atmospheric detail photo (hookah preparation, interior detail)

### Menu Preview
Horizontal scrolling card system
- Cards: 400px wide, featuring signature items with descriptive imagery
- Each card: Product photo, name, brief description, price indicator

### Gallery Grid
Masonry-style photo grid (3 columns desktop, 2 tablet, 1 mobile)
- Mix of interior shots, ambiance details, product photography
- Images: Various aspect ratios for dynamic feel

### Features/Amenities
Three-column grid
- Premium Hookahs | Private Lounges | Expert Service
- Each with elegant icon treatment, heading, descriptive text

### Reservation CTA
Full-width immersive section with background image
- Centered booking form overlay with frosted backdrop
- Form: Name, Date/Time picker, Party Size, Phone, Submit button

### Footer
Multi-column layout (4 columns desktop)
- Hours & Location | Menu Links | Social Media | Newsletter signup
- Bottom bar: Copyright, minimal legal links

## Images Required

1. **Hero**: Wide shot of main lounge area at night, warm ambient lighting, occupied but not crowded (1920x1080)
2. **About**: Close-up detail shot of hookah being prepared or premium glassware (800x1000)
3. **Menu Cards**: 6-8 product photos - signature hookahs, drinks, lounge setups (400x500 each)
4. **Gallery**: 12-15 varied shots - interior angles, detail shots, atmospheric moments (various sizes)
5. **Reservation CTA**: Private lounge or VIP area background (1920x800)

## Component Specifications

**Cards**: Subtle border treatment, generous padding (p-8), hover elevation shift
**Buttons**: Primary (filled), Secondary (outlined), both with backdrop blur on image overlays
**Forms**: Floating labels, refined inputs with minimal borders
**Icons**: Heroicons outlined style, consistent 24px sizing

## Animation Strategy
Minimal and refined:
- Subtle parallax on hero image
- Smooth scroll reveals for sections (fade-up)
- Gallery hover scale (1.05x)
- No distracting transitions

## Accessibility
- High contrast text overlays on images
- Focus states with visible outlines
- ARIA labels for navigation
- Semantic HTML structure throughout