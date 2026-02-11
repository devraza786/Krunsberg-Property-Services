# Krunsberg Property Services - Feature Implementation Plan

## Project Overview
- **Framework:** Vite + React with TypeScript
- **Styling:** TailwindCSS with custom design system (Navy/Gold/Cream theme)
- **UI Components:** shadcn/ui with Radix UI primitives
- **Animations:** Framer Motion
- **Routing:** React Router v6

## Features to Implement

### 1. Page Loader (Skeleton Loading State)
**Status:** Not Implemented
**Priority:** High
**Changes:**
- Create `components/PageLoader.tsx` - Animated loading screen with brand colors
- Add loader state to `App.tsx` component
- Show on initial page load using React Router suspense or state
- Animate with Framer Motion (fade out after 800ms or when content loads)
- Design: Navy background with animated gold accent lines/circles

### 2. Work Gallery Section Enhancement
**Status:** Partially Implemented
**Current:** Gallery page exists with 8 images in grid layout
**Enhancements:**
- Add category filtering (Painting, Remodeling, Landscaping, Drainage, etc.)
- Add "Load More" button for pagination
- Improve lightbox with navigation arrows
- Add hover animations and lazy loading
- Mobile-first responsive grid (1 col mobile → 2 col tablet → 3 col desktop)

### 3. Pricing Package Section
**Status:** Not Implemented
**Priority:** High
**Changes:**
- Create `pages/Pricing.tsx` or add to Index.tsx
- Add route `/pricing` to App.tsx
- Design 3-4 package tiers (Basic, Standard, Premium, Custom)
- Include features list for each tier
- Add CTA buttons for quote requests
- Design: Card-based layout with highlighted "Popular" tier
- Mobile: Stack vertically, full-width cards

### 4. Google Map Integration Section
**Status:** Not Implemented
**Priority:** Medium
**Changes:**
- Install `@react-google-maps/api` package
- Create `components/ServiceAreaMap.tsx`
- Display service area (Pulaski, VA + surrounding communities)
- Add markers for service coverage area
- Embed on Index.tsx and/or Services page
- Include map key environment variable configuration
- Mobile: Full-width, adjust zoom level for mobile view

### 5. Testimonials Section Enhancement
**Status:** Implemented
**Current:** Carousel with 4 testimonials
**Enhancements:**
- Already has good carousel, but add:
  - Optional: Add ratings display (already has stars)
  - Optional: Add more testimonials (6-8 total)
  - Mobile: Ensure touch/swipe functionality works
  - Accessibility: Add ARIA labels

### 6. FAQ Section
**Status:** Not Implemented
**Priority:** High
**Changes:**
- Create `components/FAQ.tsx` using Accordion component
- Add to Index.tsx or separate `/faq` route
- Include 8-10 questions relevant to property services
- Categories: General, Services, Pricing, Booking
- Design: Accordion expandable items with smooth animations
- Mobile: Full-width, single column

### 7. SEO for Business Details
**Status:** Not Implemented
**Priority:** High
**Changes:**
- Create `lib/seo.ts` with meta tag helpers
- Update `index.html` with business schema (JSON-LD)
- Add helmet-like functionality or meta tags via App component
- Include: 
  - Business name, phone, address, service area
  - Schema.org LocalBusiness structured data
  - Open Graph tags for social sharing
  - Meta descriptions for each page
  - Canonical URLs

### 8. Responsive Mobile-First Design
**Status:** Partially Implemented
**Current:** Some responsive design in place
**Enhancements:**
- Audit all pages for mobile responsiveness
- Ensure TailwindCSS mobile-first breakpoints:
  - sm: 640px (mobile landscape)
  - md: 768px (tablet)
  - lg: 1024px (desktop)
  - xl: 1280px (large desktop)
- Test on actual mobile devices
- Improve touch targets (min 44x44px for buttons)
- Fix navigation drawer for mobile
- Ensure proper padding/margins on mobile
- Test viewport scaling and zoom
- Optimize images for mobile (lazy load, responsive sizes)

---

## Implementation Order (Recommended)

1. **Phase 1: Core Features**
   - Page Loader (quick, improves UX immediately)
   - SEO Setup (foundational, affects all pages)
   - Responsive Design Audit (improves all features)

2. **Phase 2: Content Sections**
   - Pricing Package Section
   - FAQ Section
   - Work Gallery Enhancement

3. **Phase 3: Integration**
   - Google Map Integration
   - Testimonials Enhancement (polish)

4. **Phase 4: Polish & Testing**
   - Cross-browser testing
   - Mobile device testing
   - Performance optimization
   - Accessibility audit

---

## File Structure After Implementation

```
src/
├── components/
│   ├── PageLoader.tsx (NEW)
│   ├── FAQ.tsx (NEW)
│   ├── ServiceAreaMap.tsx (NEW)
│   └── [existing components...]
├── pages/
│   ├── Pricing.tsx (NEW)
│   └── [existing pages...]
├── lib/
│   ├── seo.ts (NEW)
│   └── [existing utilities...]
└── [existing structure...]
```

---

## Technical Dependencies to Add

```json
{
  "@react-google-maps/api": "^2.19.3",
  "react-helmet-async": "^1.3.0"
}
```

---

## Estimated Timeline

- **Page Loader:** 1-2 hours
- **SEO Setup:** 2-3 hours
- **Pricing Section:** 2-3 hours
- **FAQ Section:** 1-2 hours
- **Gallery Enhancement:** 2-3 hours
- **Google Maps:** 2-3 hours
- **Mobile Responsiveness:** 3-4 hours
- **Testing & Polish:** 2-3 hours

**Total:** 15-23 hours of development

---

## Notes

- All components should follow existing design patterns
- Use existing color scheme (Navy #1a2652, Gold #d4af37, Cream #f5f3f0)
- Maintain animation consistency with Framer Motion
- Keep accessibility in mind (ARIA labels, semantic HTML)
- Ensure TypeScript strict mode compliance
- Test on mobile devices before deployment
