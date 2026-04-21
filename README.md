# Profile Card - How It Works 🚀

## 🎯 Project Overview
A fully accessible, testable profile card built with vanilla HTML/CSS/JS. Demonstrates modern web best practices:
- Semantic HTML & ARIA attributes
- Responsive design (mobile-first)
- Live timestamp with screen reader announcements
- Testable components (data-testid)
- Performance optimized images

## 🏗️ File Structure
```
.
├── index.html       # Semantic structure + content
├── styles.css       # Responsive styling + animations
├── script.js        # Live timestamp logic
└── README.md        # You're reading it!
```

## 🔧 How It Works - Technical Breakdown

### 1. HTML Structure (Semantic & Accessible)
```html
<article class="profile-card" role="article">
  <figure class="avatar-section">     <!-- Avatar + name -->
  <header>                           <!-- Name header -->
  <p data-testid="test-user-bio">    <!-- Bio paragraph -->
  <div class="time-section">         <!-- Live time (aria-live) -->
  <nav aria-label="Social links">    <!-- Social navigation -->
  <section aria-labelledby="...">    <!-- Hobbies/Dislikes -->
</article>
```
- **data-testid** on all key elements for testing
- **aria-live="polite"** on time for screen reader updates
- **loading="lazy"** on image for performance

### 2. CSS Flow (styles.css)
**Key Features:**
- **Modern layout**: Flexbox + Float hybrid (desktop avatar float)
- **Responsive**: Mobile stack → Desktop side-by-side
- **Animations**: Smooth hover/focus transitions
- **Accessibility**: `prefers-reduced-motion` respect
- **Visual design**: Glassmorphism shadows, gradients

**Breakpoint Flow:**
```
Mobile (<640px):        Avatar centered, content stacked
Desktop (≥640px):       Avatar left float + content beside
```

**Avatar Logic:**
```
CSS: 96x96px display (rounded, shadowed)
HTML: w=200 src (perf optimized)
```

### 3. JavaScript Logic (script.js)
```js
// 1. Select time element by data-testid
const timeEl = document.querySelector('[data-testid="test-user-time"]');

// 2. Update function (timestamp)
function updateCurrentTime() {
  timeEl.textContent = Date.now();  // Unix timestamp (ms)
}

// 3. Initial call + 1s interval
updateCurrentTime();
setInterval(updateCurrentTime, 1000);
```
**Flow:**
```
Page load → JS runs → Initial time → aria-live announces → 
Every 1s → Update timestamp → Screen reader announces change
```

## 🎮 Live Features
1. **Hover social buttons** → Lift + glow effect
2. **Keyboard tab** → Clear focus rings everywhere  
3. **Resize window** → Responsive layout shift
4. **Screen reader** → Polite time announcements
5. **Reduced motion** → No animations

## 🚀 Quick Start
```bash
# No setup needed!
start index.html  # Windows
open index.html   # macOS
```

## 🧪 Testing
**Elements ready for tests:**
```css
[test-profile-card]
[test-user-avatar] 
[test-user-time] 
[test-user-social-links]
```

## 📱 Responsive Testing
```
Chrome DevTools → Toggle device toolbar
Test: iPhone, iPad, Desktop
Verify: Avatar alignment, text readability
```

## ♿ Accessibility Checklist
- [x] Semantic HTML structure
- [x] ARIA labels/landmarks
- [x] Keyboard navigation
- [x] Focus indicators
- [x] Screen reader announcements
- [x] Reduced motion support

## 🎨 Customization Guide
1. **Change profile**: Edit `index.html` content
2. **New colors**: Modify `styles.css` gradients
3. **More JS**: Extend `script.js` functions
4. **New image**: Update Unsplash `w=` param

## 📊 Performance
```
HTML: ~3KB
CSS:  ~5KB  
JS:   ~0.5KB
Image: Optimized (200px)
Total: <10KB 🚀
```

**Built for HNG Task - Pure vanilla excellence! ✨**

