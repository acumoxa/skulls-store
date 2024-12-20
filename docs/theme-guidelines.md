# Theme-Aware Component Guidelines

This document provides guidelines for implementing theme-aware components in our Next.js application using Tailwind CSS.

## Core Theme Variables

Our application uses CSS variables for consistent theming across light and dark modes. These are defined in `globals.css`:

### Light Theme
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --card: #ffffff;
  --card-foreground: #171717;
  --primary: #000000;
  --primary-foreground: #ffffff;
  --secondary: #f3f4f6;
  --secondary-foreground: #1f2937;
  --muted: #f3f4f6;
  --muted-foreground: #6b7280;
  --accent: #f3f4f6;
  --accent-foreground: #1f2937;
  --destructive: #ef4444;
  --destructive-foreground: #ffffff;
  --border: #e5e7eb;
  --input: #e5e7eb;
  --ring: #000000;
}
```

### Dark Theme
```css
.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  --card: #171717;
  --card-foreground: #ededed;
  --primary: #ffffff;
  --primary-foreground: #000000;
  --secondary: #27272a;
  --secondary-foreground: #fafafa;
  --muted: #262626;
  --muted-foreground: #a1a1aa;
  --accent: #27272a;
  --accent-foreground: #fafafa;
  --destructive: #7f1d1d;
  --destructive-foreground: #fafafa;
  --border: #27272a;
  --input: #27272a;
  --ring: #ffffff;
}
```

## Theme-Aware Classes

Use these Tailwind classes for consistent theming:

### Text Colors
- Default text: (inherits from parent)
- Secondary text: `text-muted-foreground`
- Primary accents: `text-primary`
- Destructive text: `text-destructive`

### Backgrounds
- Main background: `bg-background`
- Card background: `bg-card`
- Muted sections: `bg-muted`
- Primary buttons: `bg-primary`

### Borders
- Default border: `border-border`
- Primary border: `border-primary`
- Input border: `border-input`

### Interactive States
- Hover states: Use opacity modifiers (e.g., `hover:bg-primary/80`)
- Focus states: Use ring utilities with theme colors
- Active states: Combine with opacity for pressed effect

## Common Patterns

### Cards and Containers
```jsx
<div className="rounded-lg bg-card p-6 shadow-sm">
  <h3 className="font-semibold">Card Title</h3>
  <p className="text-muted-foreground">Card content</p>
</div>
```

### Buttons and Links
```jsx
// Primary Button
<button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Click me
</button>

// Secondary Link
<Link className="text-primary hover:text-primary/80">
  Learn more
</Link>
```

### Section Backgrounds
```jsx
// Muted Section
<section className="bg-muted py-16">
  <div className="container">
    {/* Content */}
  </div>
</section>

// Gradient Overlay
<div className="bg-gradient-to-br from-primary/10 via-primary/20 to-primary/30">
  {/* Content */}
</div>
```

### Text Hierarchy
```jsx
<div className="space-y-4">
  <h2 className="text-3xl font-bold">Main Heading</h2>
  <p className="text-muted-foreground">
    Secondary text content
  </p>
  <span className="text-sm text-muted-foreground">
    Caption text
  </span>
</div>
```

## Special Cases

### Dark Overlays
For content over images, use dark overlays with white text for consistent readability:
```jsx
<div className="relative">
  <Image src="/image.jpg" alt="Background" />
  <div className="absolute inset-0 bg-black/60" />
  <div className="relative z-10 text-white">
    Content
  </div>
</div>
```

### Interactive Elements
For interactive elements that need to stand out in both themes:
```jsx
<button className="bg-primary/10 text-primary hover:bg-primary/20">
  Interactive Element
</button>
```

## Best Practices

1. **Avoid Hard-Coded Colors**
   - ❌ `text-gray-600`
   - ✅ `text-muted-foreground`

2. **Use Semantic Variables**
   - ❌ `bg-white dark:bg-gray-800`
   - ✅ `bg-card`

3. **Consider Contrast**
   - Ensure sufficient contrast in both themes
   - Use opacity for subtle variations
   - Test components in both modes

4. **Consistent Patterns**
   - Use the same classes for similar components
   - Maintain hierarchy with consistent text colors
   - Keep interactive states consistent

5. **Testing**
   - Test all components in both light and dark modes
   - Verify contrast ratios meet accessibility standards
   - Check hover and focus states in both themes

## Common Issues and Solutions

### Issue: Text Disappearing in Dark Mode
```jsx
// ❌ Bad
<p className="text-gray-800">Text</p>

// ✅ Good
<p className="text-foreground">Text</p>
```

### Issue: Inconsistent Interactive States
```jsx
// ❌ Bad
<button className="hover:text-blue-600">Click</button>

// ✅ Good
<button className="text-primary hover:text-primary/80">Click</button>
```

### Issue: Hard to Read Content Over Images
```jsx
// ❌ Bad
<div className="absolute inset-0 text-white">Content</div>

// ✅ Good
<div className="absolute inset-0 bg-black/60">
  <div className="relative text-white">Content</div>
</div>
```

## Component Examples

### Theme-Aware Card
```jsx
export function Card() {
  return (
    <div className="rounded-lg bg-card p-6 shadow-sm">
      <h3 className="font-semibold">Title</h3>
      <p className="text-muted-foreground">Content</p>
      <button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
        Action
      </button>
    </div>
  );
}
```

### Theme-Aware Section
```jsx
export function Section() {
  return (
    <section className="bg-muted py-16">
      <div className="container">
        <h2 className="text-3xl font-bold">Section Title</h2>
        <p className="text-muted-foreground">
          Section content with theme-aware text
        </p>
        <div className="mt-8 grid gap-6">
          {/* Grid content */}
        </div>
      </div>
    </section>
  );
}
```
