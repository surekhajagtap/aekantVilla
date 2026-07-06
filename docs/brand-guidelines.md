# Brand Guidelines v1.0 — Aekant Villa

> Last updated: 2026-07-06
> Status: Draft

## Quick Reference

| Element | Value |
|---------|-------|
| Primary Color | #2E7D32 |
| Secondary Color | #F5F1E8 |
| Accent Color | #D4AF37 |
| Primary Font | Playfair Display (headings) / Poppins (body) |
| Voice | Calm, Warm, Premium, Welcoming |

---

## 1. Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Forest Green | #2E7D32 | rgb(46,125,50) | CTAs, nav highlights, links, primary buttons |
| Forest Green Dark | #205A24 | rgb(32,90,36) | Hover states, emphasis |

### Secondary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Warm Beige | #F5F1E8 | rgb(245,241,232) | Section backgrounds, cards, tinted sections |
| Golden Accent | #D4AF37 | rgb(212,175,55) | Eyebrows, icons, highlights, luxury touches |

### Neutral Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | #FFFFFF | rgb(255,255,255) | Page background |
| Text Primary | #2A2A26 | rgb(42,42,38) | Headings, body text |
| Text Secondary | #5B5B54 | rgb(91,91,84) | Captions, muted/descriptive text |
| Footer Surface | #1D2B1E | rgb(29,43,30) | Footer background |

### Semantic Colors

| State | Hex | Usage |
|-------|-----|-------|
| Success / WhatsApp | #25D366 | WhatsApp CTA, booking confirmation |
| Info | #2E7D32 | Informational highlights (reuses primary) |

### Accessibility

- Body text (#2A2A26) on white background: exceeds 4.5:1 (AA)
- Primary green (#2E7D32) on white: exceeds 4.5:1 (AA) for large text/buttons
- All interactive elements meet WCAG 2.1 AA standards; verify white text on Forest Green Dark before shipping new components

---

## 2. Typography

### Font Stack

```css
--font-heading: 'Playfair Display', serif;
--font-body: 'Poppins', sans-serif;
```

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|----------------|---------------|--------|-------------|
| H1 (Hero) | 5.5rem (clamp) | 2.8rem | 700 | 1.1 |
| H2 (Section) | 2.6rem (clamp) | 1.8rem | 600 | 1.25 |
| H3 (Card) | 1.05rem | 1rem | 600 | 1.3 |
| Body | 1rem | 1rem | 400 | 1.7 |
| Tagline | 1.4rem | 1.05rem | 300 | 1.5 |
| Eyebrow | 0.85rem | 0.8rem | 600 | 1.4 |

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

---

## 3. Logo Usage

No logo has been designed yet — the site currently uses a wordmark ("Aekant **Villa**", with "Villa" in the golden accent color).

### Variants (planned)

| Variant | File | Use Case |
|---------|------|----------|
| Wordmark | n/a — text-based | Navbar, footer |
| Icon Only | TBD | Favicon |

### Don'ts

- Don't change the accent color used on "Villa" outside the approved golden (#D4AF37)
- Don't place the wordmark on busy background images without a dark overlay (see hero `.hero__overlay`)

---

## 4. Voice & Tone

### Brand Personality

| Trait | Description |
|-------|--------------|
| **Calm** | Evokes nature, quiet, and rest — never rushed or pushy |
| **Warm** | Family- and friend-oriented, welcoming language |
| **Premium** | Feels like a boutique resort, not a budget rental |
| **Welcoming** | Speaks directly to guests planning a getaway |

### Voice Chart

| Trait | We Are | We Are Not |
|-------|--------|------------|
| Calm | Relaxed, unhurried | Sleepy, boring |
| Warm | Personal, hospitable | Overly casual, gimmicky |
| Premium | Elegant, polished | Pretentious, exclusive-sounding |
| Welcoming | Inclusive of families & groups | Corporate, transactional |

### Tone by Context

| Context | Tone | Example |
|---------|------|---------|
| Hero / Marketing | Evocative, aspirational | "Escape to Nature. Experience Luxury at Aekant Villa." |
| Amenities / Features | Clear, benefit-focused | "Private Swimming Pool" |
| Booking / CTA | Warm, direct | "Book on WhatsApp" |
| Testimonials | Authentic, personal | Guest-voiced quotes, first person |

### Prohibited Terms

| Avoid | Reason |
|-------|--------|
| Revolutionary | Not applicable to a vacation villa |
| Best-in-class | Vague corporate claim |
| Seamless | Overused, doesn't fit warm/nature voice |
| Luxury hotel-grade | Villa should feel personal, not hotel-like |

---

## 5. Imagery Guidelines

### Photography Style

- **Lighting:** Natural, golden-hour preferred (sunrise/sunset near mountains and dam)
- **Subjects:** The villa itself, pool, terrace, mountain/dam views; families and groups relaxing (with consent)
- **Color treatment:** Keep true-to-life greens and warm tones; avoid heavy filters that clash with the Forest Green / Gold palette
- **Composition:** Wide, airy shots that emphasize space and nature surroundings

### Icons

- Style: Currently emoji-based placeholders (🏊 🛏️ 🍳) for rapid prototyping
- **Recommended upgrade:** Replace with a consistent SVG icon set (e.g., Phosphor or Heroicons, outline style, 1.5–2px stroke) before final launch for a more premium, cross-platform-consistent look

---

## 6. Design Components

### Buttons

| Type | Background | Text | Border Radius |
|------|------------|------|----------------|
| Primary (WhatsApp) | #2E7D32 | #FFFFFF | 999px (pill) |
| Outline (Hero secondary) | transparent w/ blur | #FFFFFF | 999px (pill) |

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| sm | 8px | Compact gaps (icon + text) |
| md | 16-24px | Card padding, gaps |
| lg | 32-40px | Section internal spacing |
| xl | 56-64px | Section-to-section spacing |
| 2xl | 100px | Vertical section padding (desktop) |

### Border Radius

| Element | Radius |
|---------|--------|
| Buttons | 999px (pill) |
| Cards (amenity/why/testimonial) | 16px |
| Images (about, gallery) | 16-24px |
| Floating action buttons | 50% (circle) |

---

## AI Image Generation

### Base Prompt Template

```
A peaceful luxury vacation villa named Aekant Villa near Trimbakeshwar, Nashik, India, surrounded by green mountains and a scenic dam. Warm golden-hour natural lighting, forest green (#2E7D32) and warm beige (#F5F1E8) tones, cozy and premium resort atmosphere, high-resolution photography style.
```

### Style Keywords

| Category | Keywords |
|----------|----------|
| **Lighting** | golden hour, soft natural light, warm sunlight |
| **Mood** | calm, cozy, premium, relaxing |
| **Composition** | wide shot, rule of thirds, nature-framed |
| **Treatment** | true-to-life color, subtle warmth, no heavy filters |
| **Aesthetic** | luxury nature resort, boutique villa |

### Visual Mood Descriptors

- Peaceful mountain and dam backdrop
- Warm, inviting interiors with natural materials
- Family- and group-friendly outdoor spaces (pool, terrace)

### Visual Don'ts

| Avoid | Reason |
|-------|--------|
| Overly staged/corporate stock photography | Breaks the cozy, personal villa feel |
| Cold or blue-toned color grading | Clashes with the forest green / gold warm palette |
| Crowded, cluttered compositions | Should feel spacious and calm |

### Example Prompts

**Hero Banner:**
```
Wide-angle photo of a luxury villa nestled between green mountains near a calm dam at golden hour, warm natural light, forest green and beige color palette, peaceful and premium atmosphere, no people, 16:9.
```

**Social Media Post:**
```
Cozy poolside scene at a nature villa, warm sunset lighting, forest green and gold accent tones, inviting and relaxing mood, square 1:1 crop.
```

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-07-06 | Initial guidelines, based on the Aekant Villa website's existing forest green / warm beige / golden palette and Playfair Display + Poppins type system |
