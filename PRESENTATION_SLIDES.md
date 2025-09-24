# CSS Modules Presentation Slides

---

## Slide 1: Title Slide

# CSS Modules

## Solving CSS Conflicts in React

**Presenter:** [Your Name]  
**Date:** [Today's Date]  
**Team:** [Your Team]

---

## Slide 2: Agenda

# What We'll Cover

1. **The Problem** - CSS Conflicts in React
2. **Available Solutions** - Options & Trade-offs
3. **CSS Modules Deep Dive** - How They Work
4. **Live Demo** - Before & After
5. **Q&A** - Your Questions

---

## Slide 3: The Problem

# CSS Conflicts Are Real

```css
/* global.css */
.card {
  background: white;
}

/* userCard.css */
.card {
  background: blue;
} /* Conflicts! */
```

**What happens:**

- Class name collisions across components
- Unpredictable styling based on load order
- Hard to debug - styles change unexpectedly
- Team collaboration issues
- Production problems with caching

---

## Slide 4: Real-World Impact

# The Demo Problem

1. **Products Page** → Gray theme (global CSS)
2. **Users Page** → Blue theme (component CSS loads)
3. **Back to Products** → Blue theme! (conflict!)

**Result:** Users see different styles depending on navigation path!

---

## Slide 5: Available Solutions

# Our Options

| Solution              | Scoping    | Performance | Learning Curve |
| --------------------- | ---------- | ----------- | -------------- |
| **BEM**               | Manual     | ✅ Zero     | ✅ Low         |
| **CSS-in-JS**         | Runtime    | ❌ Overhead | ❌ High        |
| **CSS Modules**       | Build-time | ✅ Zero     | ✅ Low         |
| **Styled Components** | Runtime    | ❌ Overhead | ❌ Medium      |

---

## Slide 6: Why CSS Modules?

# The Perfect Balance

**Used by:**

- Facebook (React team)
- Airbnb
- GitHub
- Microsoft
- Spotify

**Key Benefits:**

- ✅ Build-time scoping
- ✅ Zero runtime overhead
- ✅ Familiar CSS syntax
- ✅ Automatic class name generation

---

## Slide 7: How CSS Modules Work

# Automatic Scoping

**Input:**

```css
.button {
  background: blue;
}
```

**Output:**

```css
.Button_button_abc123 {
  background: blue;
}
```

**Component:**

```tsx
<button className={styles.button}>Click me</button>
```

**HTML:**

```html
<button class="Button_button_abc123">Click me</button>
```

---

## Slide 8: Before vs After

# Code Comparison

**Before (Regular CSS):**

```tsx
<div className="card">
  <h3 className="card-title">Title</h3>
</div>
```

**After (CSS Modules):**

```tsx
import styles from "./Card.module.css";

<div className={styles.card}>
  <h3 className={styles.title}>Title</h3>
</div>;
```

---

## Slide 9: Live Demo

# Let's See It In Action

**Demo 1: The Problem**

- Products Page → Gray theme
- Users Page → Blue theme loads
- Back to Products → Blue theme! (conflict)

**Demo 2: The Solution**

- Products (CSS Modules) → Gray theme
- Users (CSS Modules) → Blue theme
- Back to Products → Still gray! (no conflict)

---

## Slide 10: Implementation

# Getting Started

**1. File Naming:**

```
ComponentName.module.css
```

**2. Import and Use:**

```tsx
import styles from "./Button.module.css";
<button className={styles.primary}>Click me</button>;
```

**3. TypeScript Support:**

```tsx
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
```

---

## Slide 11: Best Practices

# File Organization

```
src/
  components/
    Button/
      Button.tsx
      Button.module.css
      Button.test.tsx
```

**CSS Structure:**

```css
/* 1. Layout */
.container {
}

/* 2. Typography */
.title {
}

/* 3. Interactive elements */
.button {
}
.button:hover {
}

/* 4. States */
.loading {
}
```

---

## Slide 12: Performance

# Zero Runtime Cost

**Bundle Size:**

- Minimal overhead
- Dead code elimination works
- Only used styles included

**Runtime:**

- Zero runtime overhead
- No style recalculation
- Perfect for SSR

**Build:**

- Fast build times
- Incremental compilation
- Great caching

---

## Slide 13: Migration Strategy

# Gradual Adoption

**Phase 1:** New Components

- Use CSS Modules for all new components
- Keep existing components as-is

**Phase 2:** High-Impact Components

- Migrate components with most conflicts
- Start with shared/common components

**Phase 3:** Gradual Migration

- Migrate remaining components
- Remove global CSS gradually

---

## Slide 14: Common Questions

# Q&A

**"Why not just use unique class names?"**

- Manual naming is error-prone
- Hard to enforce across teams
- CSS Modules automate this

**"What about CSS-in-JS?"**

- CSS-in-JS has runtime overhead
- CSS Modules have zero runtime cost
- Better for SSR

**"Responsive design?"**

- CSS Modules support all CSS features
- Media queries work exactly the same

---

## Slide 15: Key Takeaways

# What We Learned

1. **CSS conflicts are a real problem** in large React applications
2. **Multiple solutions exist** with different trade-offs
3. **CSS Modules provide the best balance** of features and simplicity
4. **Easy to adopt** - familiar CSS syntax with automatic scoping
5. **Production ready** - used by major companies

---

## Slide 16: Next Steps

# Getting Started

**Immediate Actions:**

1. **Try it:** Start with one new component
2. **Measure:** Compare before/after bundle size
3. **Share:** Show the team the benefits
4. **Plan:** Create migration strategy

**Long-term Benefits:**

- Better maintainability
- Improved collaboration
- Better performance
- Enhanced developer experience

---

## Slide 17: Resources

# Learn More

**Documentation:**

- [CSS Modules Official Guide](https://github.com/css-modules/css-modules)
- [Vite CSS Modules](https://vitejs.dev/guide/features.html#css-modules)
- [Webpack CSS Modules](https://webpack.js.org/loaders/css-loader/#modules)

**This Demo:**

- Repository: [Your GitHub Repo]
- Branches: `regular-css-conflicts` & `css-modules-solution`
- Live Demo: Available for testing

---

## Slide 18: Questions?

# Let's Discuss

**Topics:**

- Your current CSS challenges
- Migration strategies for your team
- Implementation questions
- Any other concerns

**Contact:**

- **Email:** [Your Email]
- **GitHub:** [Your GitHub]
- **Demo Repository:** [Repository URL]

**Thank you!**
