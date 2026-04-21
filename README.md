# Accessible Profile Card Demo

## Overview

This is a modern, fully accessible profile card component built with **vanilla HTML, CSS, and JavaScript**. It demonstrates best practices for:

- Semantic HTML5 structure
- WCAG 2.1 AA accessibility compliance
- Testability with data-testid attributes
- Responsive design (mobile-first)
- Keyboard navigation & screen reader support
- Reduced motion awareness
- Performance (lazy loading, minimal JS)

The card showcases \"John Doe\", a software developer passionate about accessible web applications.

![Profile Card Preview](https://via.placeholder.com/500x600/3b82f6/ffffff?text=Profile+Card+Demo)
*(Live demo renders better - open `profile-index.html` in browser)*

## Features

✅ **Live Timestamp** - Updates every second with `aria-live=polite` for screen readers  
✅ **Social Links** - Hover/focus effects, target=_blank with noopener  
✅ **Responsive Design** - Mobile, tablet, desktop layouts  
✅ **Accessibility** - Proper headings, ARIA labels, focus management  
✅ **Performance** - Lazy image loading, CSS-only animations  
✅ **Testable** - All key elements have `data-testid` attributes  
✅ **Modern Styling** - Glassmorphism, gradients, custom properties  

## File Structure

```
.
├── profile-index.html     # Main HTML structure & content
├── profile-styles.css     # Responsive, accessible styles
└── profile-script.js      # Live timestamp updater (1000ms interval)
```

## Tech Stack

| Technology | Purpose | Key Features Used |
|------------|---------|-------------------|
| **HTML5** | Structure | Semantic elements (`article`, `figure`, `nav`), `role=list`, `aria-labelledby`, `aria-live`, `loading=lazy` |
| **CSS3** | Styling | Flexbox/Grid, Custom Properties, Gradients, `prefers-reduced-motion`, Container Queries ready |
| **Vanilla JS** | Interactivity | `setInterval`, `querySelector`, No frameworks/build tools |

## Quick Start

1. **Open in browser**: Double-click `profile-index.html` or drag to browser
2. **Live reload**: Edit any file → refresh browser
3. **Test accessibility**: Use screen reader (NVDA/VoiceOver) or browser dev tools

```bash
# No installation needed - 100% static
open profile-index.html    # macOS
start profile-index.html   # Windows
```

## Usage

### Live Demo
Just open `profile-index.html`! No server required.

### Customization
- Replace avatar `src` and `alt` text
- Update bio, hobbies, dislikes content
- Modify social links `href`
- Extend `profile-script.js` for more dynamic features

### Testing
All interactive elements have `data-testid` attributes:

```js
// Example test selectors
'[data-testid=\"test-user-avatar\"]'
'[data-testid=\"test-user-time\"]'
'[data-testid=\"test-user-social-links\"]'
```

**Keyboard Testing**: Tab through all links/buttons → all focusable  
**Screen Reader**: Announces live time updates automatically

## Accessibility Highlights

- **Semantic HTML** throughout (no div soup)
- **ARIA attributes**: `aria-live`, `aria-label`, `aria-labelledby`
- **Focus management**: Visible focus indicators on all interactive elements
- **Reduced motion**: Respects `prefers-reduced-motion`
- **Color contrast**: WCAG AA compliant

## Responsive Breakpoints

| Screen Size | Layout |
|-------------|--------|
| `< 640px` | Stacked mobile |
| `≥ 640px` | Avatar float + content |
| All | Fluid typography & spacing |

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| iOS Safari 14+ | ✅ Full |

## Development Notes

- **Zero dependencies** - Ships as-is
- **~5KB total** - Lightweight & fast
- **No build step** - Edit → refresh
- **HNG Task 1B** - Created for HNG Internship Stage 1

## License

MIT License - Feel free to use/modify/share!

---

**Built with ❤️ for accessible web experiences**

