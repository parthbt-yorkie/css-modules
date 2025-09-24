# TypeScript + ESLint Setup for CSS Modules

## 🎯 What This Setup Provides

### **1. TypeScript IntelliSense**

- **Autocomplete** for CSS class names
- **Error detection** for typos in class names
- **Type safety** for CSS Modules imports

### **2. ESLint Rules**

- **`css-modules/no-unused-class`** - Warns about unused CSS classes
- **`css-modules/no-undef-class`** - Catches typos in class names

### **3. VSCode Integration**

- **Syntax highlighting** for `.module.css` files
- **IntelliSense** in TypeScript files
- **Error squiggles** for invalid class names

## 🛠️ How It Works

### **TypeScript Configuration**

```typescript
// src/types/css-modules.d.ts
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
```

### **ESLint Configuration**

```javascript
// eslint.config.js
plugins: {
  'css-modules': cssModules,
},
rules: {
  'css-modules/no-unused-class': 'error',
  'css-modules/no-undef-class': 'error',
}
```

### **VSCode Settings**

```json
// .vscode/settings.json
{
  "files.associations": {
    "*.module.css": "css"
  }
}
```

## 🎯 Usage Examples

### **✅ Correct Usage**

```tsx
import styles from "./Component.module.css";

// TypeScript provides autocomplete
<div className={styles.card}>
  <h3 className={styles.title}>Title</h3>
</div>;
```

### **❌ Common Errors (Caught by TypeScript/ESLint)**

```tsx
// Typo in class name - TypeScript error
<div className={styles.cardd}>Error</div>

// Undefined class - ESLint error
<div className={styles.undefinedClass}>Error</div>

// Wrong import - TypeScript error
import styles from './Component.css'; // Missing .module
```

## 🚀 Benefits

### **For Developers**

- **Faster development** with autocomplete
- **Fewer bugs** with error detection
- **Better refactoring** with unused class warnings

### **For Teams**

- **Consistent code** with linting rules
- **Easier onboarding** with clear error messages
- **Better maintainability** with type safety

## 🔧 Commands

### **Check for Errors**

```bash
npm run lint
```

### **Type Check**

```bash
npx tsc --noEmit
```

### **Build with Type Checking**

```bash
npm run build
```

## 📝 Best Practices

### **1. Use Descriptive Class Names**

```css
/* Good */
.card {
}
.cardTitle {
}
.cardContent {
}

/* Avoid */
.c {
}
.title {
}
```

### **2. Group Related Styles**

```css
/* Component.module.css */
.card {
}
.cardTitle {
}
.cardContent {
}
.cardButton {
}
.cardButtonPrimary {
}
```

### **3. Use TypeScript Strict Mode**

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true
  }
}
```

## 🎉 Result

With this setup, you get:

- **IntelliSense** for CSS class names
- **Error detection** for typos
- **Type safety** for CSS Modules
- **Linting** for unused classes
- **Better developer experience**

No more `styles.somename` typos! 🎯
