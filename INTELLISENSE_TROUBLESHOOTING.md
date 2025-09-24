# CSS Modules IntelliSense Troubleshooting Guide

## 🎯 Quick Fixes for IntelliSense Issues

### **1. Restart TypeScript Server**
```bash
# In VSCode: Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows/Linux)
TypeScript: Restart TS Server
```

### **2. Reload VSCode Window**
```bash
# In VSCode: Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows/Linux)
Developer: Reload Window
```

### **3. Check TypeScript Extension**
- Ensure TypeScript extension is installed and enabled
- Check if it's the latest version

## 🔧 Common Issues & Solutions

### **Issue: No Autocomplete for `styles.`**

**Symptoms:**
- No suggestions when typing `styles.`
- Generic suggestions instead of CSS class names

**Solutions:**
1. **Check Type Definitions:**
   ```bash
   # Verify type definitions exist
   ls src/vite-env.d.ts
   ```

2. **Restart TypeScript Server:**
   - Cmd+Shift+P → "TypeScript: Restart TS Server"

3. **Check Import Path:**
   ```tsx
   // ✅ Correct
   import styles from './UserCardModule.module.css';
   
   // ❌ Wrong
   import styles from './UserCardModule.css';
   ```

### **Issue: Too Many Irrelevant Suggestions**

**Symptoms:**
- Getting suggestions for all TypeScript types
- Not just CSS class names

**Solutions:**
1. **Update VSCode Settings:**
   ```json
   {
     "typescript.suggest.includeCompletionsForModuleExports": true,
     "typescript.suggest.includeCompletionsForImportStatements": true
   }
   ```

2. **Check TypeScript Configuration:**
   ```json
   // tsconfig.app.json
   {
     "compilerOptions": {
       "esModuleInterop": true,
       "allowSyntheticDefaultImports": true
     }
   }
   ```

### **Issue: TypeScript Errors for CSS Imports**

**Symptoms:**
- "Cannot find module" errors
- TypeScript compilation fails

**Solutions:**
1. **Check Type Definitions:**
   ```typescript
   // src/vite-env.d.ts
   declare module "*.module.css" {
     const classes: { [key: string]: string };
     export default classes;
   }
   ```

2. **Update tsconfig.json:**
   ```json
   {
     "include": ["src", "src/types"],
     "typeRoots": ["./node_modules/@types", "./src/types"]
   }
   ```

## 🎯 Testing Your Setup

### **1. Create a Test File**
```tsx
// test-css-modules.tsx
import styles from './components/UserCardModule.module.css';

const Test = () => {
  return (
    <div>
      {/* Type 'styles.' here and check for autocomplete */}
      <div className={styles.card}>
        <h3 className={styles.title}>Test</h3>
      </div>
    </div>
  );
};
```

### **2. Check Available Classes**
```bash
# Run this to see available CSS classes
node -e "
const fs = require('fs');
const css = fs.readFileSync('src/components/UserCardModule.module.css', 'utf8');
const classes = css.match(/\.([a-zA-Z][a-zA-Z0-9_-]*)\s*{/g);
console.log('Available classes:', classes?.map(c => c.replace(/[\.{}]/g, '')));
"
```

### **3. Verify TypeScript Compilation**
```bash
npx tsc --noEmit
```

## 🚀 Advanced Configuration

### **Better IntelliSense with VSCode Settings**
```json
{
  "typescript.suggest.includeCompletionsForModuleExports": true,
  "typescript.suggest.includeCompletionsForImportStatements": true,
  "typescript.suggest.includeCompletionsWithSnippetText": true,
  "files.associations": {
    "*.module.css": "css"
  }
}
```

### **TypeScript Configuration for CSS Modules**
```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true
  },
  "include": ["src", "src/types"],
  "typeRoots": ["./node_modules/@types", "./src/types"]
}
```

### **ESLint Rules for CSS Modules**
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

## 🎉 Expected Behavior

### **When Working Correctly:**
1. **Autocomplete:** Type `styles.` and see CSS class names
2. **Error Detection:** Typos show TypeScript errors
3. **Hover Info:** Hover over `styles.card` shows type info
4. **Go to Definition:** Cmd+Click on class names

### **Example:**
```tsx
import styles from './UserCardModule.module.css';

// ✅ Should show: card, title, content, button
<div className={styles.card}>
  <h3 className={styles.title}>Title</h3>
  <p className={styles.content}>Content</p>
  <button className={styles.button}>Button</button>
</div>

// ❌ Should show TypeScript error
<div className={styles.typo}>Error</div>
```

## 🔍 Debugging Steps

1. **Check if TypeScript is working:**
   ```bash
   npx tsc --version
   ```

2. **Check if CSS Modules are being processed:**
   ```bash
   npm run build
   ```

3. **Check VSCode TypeScript version:**
   - Cmd+Shift+P → "TypeScript: Select TypeScript Version"
   - Choose "Use Workspace Version"

4. **Check if type definitions are loaded:**
   - Open `src/vite-env.d.ts`
   - Check if it has CSS Modules declarations

## 🎯 Still Not Working?

### **Nuclear Option:**
1. **Delete node_modules and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Restart VSCode completely**

3. **Check VSCode extensions:**
   - TypeScript and JavaScript Language Features
   - CSS IntelliSense

### **Alternative: Use a Different Editor**
- **WebStorm:** Excellent CSS Modules support
- **VS Code:** With proper extensions
- **Neovim:** With LSP setup

## 📚 Resources

- [TypeScript CSS Modules](https://www.typescriptlang.org/docs/handbook/modules.html)
- [VSCode TypeScript](https://code.visualstudio.com/docs/languages/typescript)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
