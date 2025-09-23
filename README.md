# CSS Modules Demo - Regular CSS Version

This demo shows CSS conflicts in a React application using regular CSS.

## The Problem

- **ProductCard** uses global CSS with gray theme
- **UserCard** uses its own CSS file with blue theme
- Both components use the same class names (`.card`, `.card-title`, `.card-content`)
- When UserCard CSS loads, it affects ALL `.card` elements on the page
- Navigating between routes causes CSS conflicts

## How to Test

1. Start on Products page (gray theme)
2. Navigate to Users page (blue theme loads)
3. Navigate back to Products page (now blue theme due to conflict!)

## Files

- `src/components/ProductCard.tsx` - Product card component
- `src/components/UserCard.tsx` - User card component
- `src/components/UserCard.css` - User card styles (causes conflicts)
- `src/styles/global.css` - Global styles
- `src/App.tsx` - Main app with routing

## The Issue

This demonstrates why CSS Modules are needed - global class names cause conflicts across components and routes.
