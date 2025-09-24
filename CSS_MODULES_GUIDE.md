# CSS Modules Complete Guide

## 🎯 What are CSS Modules?

CSS Modules are CSS files in which all class names and animation names are scoped locally by default. They solve the global CSS namespace problem by automatically generating unique class names.

## 🚨 The Problem CSS Modules Solve

### Global CSS Issues

```css
/* global.css */
.card {
  background: white;
  border: 1px solid gray;
}

/* userCard.css */
.card {
  background: blue;
  border: 2px solid blue;
} /* Conflicts! */
```

**Problems:**

- Class name collisions
- Unpredictable styling
- Hard to debug
- Team collaboration issues
- Production caching problems

### Real-World Example

```tsx
// ProductCard.tsx
<div className="card">Product</div>  // Gets blue background!

// UserCard.tsx
<div className="card">User</div>     // Intended blue background
```

When UserCard loads, it affects ALL `.card` elements on the page.

## ✅ How CSS Modules Work

### Automatic Scoping

```css
/* ProductCard.module.css */
.card {
  background: white;
  border: 1px solid gray;
}
.title {
  color: black;
}
```

**Becomes:**

```css
.ProductCard_card_abc123 {
  background: white;
  border: 1px solid gray;
}
.ProductCard_title_def456 {
  color: black;
}
```

### Component Usage

```tsx
// ProductCard.tsx
import styles from "./ProductCard.module.css";

function ProductCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Product</h3>
    </div>
  );
}
```

**Rendered HTML:**

```html
<div class="ProductCard_card_abc123">
  <h3 class="ProductCard_title_def456">Product</h3>
</div>
```

## 🛠️ Implementation

### 1. File Naming Convention

```
ComponentName.module.css
```

Examples:

- `Button.module.css`
- `ProductCard.module.css`
- `UserProfile.module.css`

### 2. Import and Usage

```tsx
import styles from "./ComponentName.module.css";

// Use in JSX
<div className={styles.container}>
  <h1 className={styles.title}>Hello</h1>
</div>;
```

### 3. TypeScript Support

```tsx
// types.d.ts
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// Component.tsx
import styles from "./Component.module.css";
// TypeScript will provide autocomplete for styles.*
```

## 🎨 CSS Modules Features

### 1. Local Scope by Default

```css
/* Button.module.css */
.button {
  background: blue;
}
.button:hover {
  background: darkblue;
}
```

Only affects the component that imports this file.

### 2. Global Styles (when needed)

```css
/* Button.module.css */
.button {
  background: blue;
}
:global(.global-class) {
  color: red;
}
```

### 3. Composition

```css
/* base.module.css */
.button {
  padding: 10px;
  border: none;
}

/* primary.module.css */
.primary {
  composes: button from "./base.module.css";
  background: blue;
  color: white;
}
```

### 4. Multiple Classes

```tsx
// Multiple classes
<div className={`${styles.card} ${styles.featured}`}>

// Conditional classes
<div className={`${styles.card} ${isActive ? styles.active : ''}`}>
```

## 🔄 Migration Strategy

### Phase 1: New Components

- Use CSS Modules for all new components
- Keep existing components as-is

### Phase 2: High-Impact Components

- Migrate components with most conflicts
- Start with shared/common components

### Phase 3: Gradual Migration

- Migrate remaining components
- Remove global CSS gradually

### Phase 4: Cleanup

- Remove unused global CSS
- Optimize CSS Modules structure

## 🏗️ Build Tool Configuration

### Vite (Recommended)

```js
// vite.config.js
export default {
  css: {
    modules: {
      localsConvention: "camelCase", // button-primary -> buttonPrimary
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
};
```

### Webpack

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },
};
```

## 📊 Comparison with Alternatives

| Feature        | CSS Modules     | CSS-in-JS           | BEM             | Styled Components   |
| -------------- | --------------- | ------------------- | --------------- | ------------------- |
| Scoping        | ✅ Build-time   | ✅ Runtime          | ❌ Manual       | ✅ Runtime          |
| Performance    | ✅ Zero runtime | ❌ Runtime overhead | ✅ Zero runtime | ❌ Runtime overhead |
| Bundle Size    | ✅ Small        | ❌ Larger           | ✅ Small        | ❌ Larger           |
| Learning Curve | ✅ Low          | ❌ High             | ✅ Low          | ❌ Medium           |
| TypeScript     | ✅ Great        | ✅ Great            | ❌ Limited      | ✅ Great            |
| Dynamic Styles | ❌ Limited      | ✅ Full             | ❌ Limited      | ✅ Full             |
| SSR            | ✅ Perfect      | ⚠️ Complex          | ✅ Perfect      | ⚠️ Complex          |

## 🎯 Best Practices

### 1. Naming Conventions

```css
/* Good */
.container {
}
.title {
}
.button {
}
.buttonPrimary {
}

/* Avoid */
.c {
} /* Too short */
.container-wrapper-header {
} /* Too verbose */
```

### 2. File Organization

```
src/
  components/
    Button/
      Button.tsx
      Button.module.css
      Button.test.tsx
    ProductCard/
      ProductCard.tsx
      ProductCard.module.css
      ProductCard.test.tsx
```

### 3. CSS Structure

```css
/* Component.module.css */
/* 1. Layout */
.container {
}
.wrapper {
}

/* 2. Typography */
.title {
}
.subtitle {
}
.text {
}

/* 3. Interactive elements */
.button {
}
.button:hover {
}
.button:active {
}

/* 4. States */
.loading {
}
.error {
}
.success {
}

/* 5. Responsive */
@media (max-width: 768px) {
  .container {
  }
}
```

### 4. Composition Patterns

```css
/* base.module.css */
.button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* primary.module.css */
.primary {
  composes: button from "./base.module.css";
  background: blue;
  color: white;
}

/* secondary.module.css */
.secondary {
  composes: button from "./base.module.css";
  background: gray;
  color: black;
}
```

## 🚀 Advanced Techniques

### 1. CSS Variables with CSS Modules

```css
/* theme.module.css */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}

.button {
  background: var(--primary-color);
  color: white;
}
```

### 2. Conditional Classes

```tsx
// Component.tsx
import styles from "./Component.module.css";

function Component({ variant, size, disabled }) {
  const className = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(" ");

  return <button className={className}>Click me</button>;
}
```

### 3. CSS Modules with CSS-in-JS

```tsx
// Hybrid approach
import styles from "./Component.module.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  /* Dynamic styles */
  background: ${(props) => props.theme.primary};
`;

function Component() {
  return (
    <StyledDiv className={styles.container}>
      <h1 className={styles.title}>Title</h1>
    </StyledDiv>
  );
}
```

## 🔍 Debugging CSS Modules

### 1. Browser DevTools

- Class names are visible in Elements tab
- Styles are scoped and easy to identify
- Source maps work perfectly

### 2. Development Tools

```js
// Debug class names
console.log(styles); // { container: "Component_container_abc123" }
```

### 3. Common Issues

**Issue:** Styles not applying
**Solution:** Check import path and class name spelling

**Issue:** Global styles not working
**Solution:** Use `:global()` wrapper

**Issue:** Composition not working
**Solution:** Check file paths and class names

## 📈 Performance Considerations

### 1. Bundle Size

- CSS Modules add minimal overhead
- Dead code elimination works perfectly
- Only used styles are included

### 2. Runtime Performance

- Zero runtime overhead
- No style recalculation
- Perfect for SSR

### 3. Build Performance

- Fast build times
- Incremental compilation
- Great caching

## 🎉 Conclusion

CSS Modules provide an excellent solution for CSS scoping in React applications:

- **Simple:** Familiar CSS syntax
- **Powerful:** Automatic scoping and composition
- **Performant:** Zero runtime overhead
- **Maintainable:** Clear component boundaries
- **Scalable:** Works for teams of any size

They strike the perfect balance between simplicity and power, making them an ideal choice for most React applications.
