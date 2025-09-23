# CSS Modules Demo

This demo shows CSS conflicts in a React application and how CSS Modules solve them.

## The Problem (Regular CSS)

- **ProductCard** uses global CSS with gray theme
- **UserCard** uses its own CSS file with blue theme
- Both components use the same class names (`.card`, `.card-title`, `.card-content`)
- When UserCard CSS loads, it affects ALL `.card` elements on the page
- Navigating between routes causes CSS conflicts

## The Solution (CSS Modules)

- **ProductCardModule** uses CSS Modules with scoped class names
- **UserCardModule** uses CSS Modules with scoped class names
- Each component has isolated styles that can't affect others
- No conflicts when navigating between routes
- Predictable styling behavior

## How to Test

### Regular CSS (with conflicts):

1. Start on Products page (gray theme)
2. Navigate to Users page (blue theme loads)
3. Navigate back to Products page (now blue theme due to conflict!)

### CSS Modules (no conflicts):

1. Navigate between Products (CSS Modules) and Users (CSS Modules)
2. Notice that cards maintain their intended colors
3. No cross-component interference

## Routes

- `/products` - Products with Regular CSS (gray theme, affected by conflicts)
- `/users` - Users with Regular CSS (blue theme, causes conflicts)
- `/products-modules` - Products with CSS Modules (gray theme, no conflicts)
- `/users-modules` - Users with CSS Modules (blue theme, no conflicts)

## Files

### Regular CSS:

- `src/components/ProductCard.tsx` - Product card component
- `src/components/UserCard.tsx` - User card component
- `src/components/UserCard.css` - User card styles (causes conflicts)
- `src/styles/global.css` - Global styles

### CSS Modules:

- `src/components/ProductCardModule.tsx` - Product card with CSS Modules
- `src/components/ProductCardModule.module.css` - Scoped product card styles
- `src/components/UserCardModule.tsx` - User card with CSS Modules
- `src/components/UserCardModule.module.css` - Scoped user card styles

## Key Benefits of CSS Modules

- **Scoped Styles**: Each component has unique class names
- **No Global Conflicts**: Components can't affect each other
- **Predictable Behavior**: Same styles in development and production
- **Easy Maintenance**: Update one component without affecting others
- **Team Friendly**: Multiple developers can work without conflicts
