# Tailwind CSS v4 Cheatsheet & Property Reference

This is a comprehensive reference guide of Tailwind CSS properties categorized by layout, styling, and animation utilities.

---

## 1. Layout & Positioning

### Display
Controls the layout display type of the element.
* `block` (display: block)
* `inline-block` (display: inline-block)
* `inline` (display: inline)
* `flex` (display: flex)
* `inline-flex` (display: inline-flex)
* `grid` (display: grid)
* `inline-grid` (display: inline-grid)
* `hidden` (display: none)

### Position
Controls how an element is positioned in the document.
* `static` (position: static)
* `fixed` (position: fixed)
* `absolute` (position: absolute)
* `relative` (position: relative)
* `sticky` (position: sticky)

### Placement (Top / Right / Bottom / Left)
Controls the offset of positioned elements.
* `top-0` / `right-0` / `bottom-0` / `left-0`
* `inset-0` (sets top, right, bottom, left to 0)
* `top-4` (top: 1rem / 16px)
* `left-1/2` (left: 50%)
* Negative values: `-top-4`, `-left-2`

### Z-Index
Controls the stack order of elements.
* `z-0` (z-index: 0)
* `z-10` (z-index: 10)
* `z-20` (z-index: 20)
* `z-50` (z-index: 50)
* `z-auto` (z-index: auto)

### Overflow
Controls how content is handled when it overflows its container.
* `overflow-auto`
* `overflow-hidden`
* `overflow-clip`
* `overflow-visible`
* `overflow-scroll`
* `overflow-x-auto` / `overflow-y-auto`

---

## 2. Flexbox & Grid

### Flex Direction
* `flex-row` (row layout)
* `flex-col` (column layout)
* `flex-row-reverse`
* `flex-col-reverse`

### Flex Wrap
* `flex-wrap` (allow items to wrap)
* `flex-nowrap` (prevent items from wrapping)

### Flex Grow & Shrink
* `grow` (flex-grow: 1)
* `grow-0` (flex-grow: 0)
* `shrink` (flex-shrink: 1)
* `shrink-0` (flex-shrink: 0)

### Justify Content (Main Axis Alignment)
* `justify-start` (align items to the start)
* `justify-end` (align items to the end)
* `justify-center` (align items to the center)
* `justify-between` (spread items, space between them)
* `justify-around` (space around items)
* `justify-evenly` (equal space between and around items)

### Align Items (Cross Axis Alignment)
* `items-start`
* `items-end`
* `items-center`
* `items-baseline`
* `items-stretch`

### Grid Template Columns
* `grid-cols-1` (grid-template-columns: repeat(1, minmax(0, 1fr)))
* `grid-cols-2` (grid-template-columns: repeat(2, minmax(0, 1fr)))
* `grid-cols-3` / `grid-cols-4` / `grid-cols-12`

### Grid Span (Column / Row Span)
* `col-span-1` / `col-span-2` / `col-span-full`
* `row-span-1` / `row-span-2` / `row-span-full`

### Gap (Flexbox & Grid Spacing)
* `gap-0` (0px)
* `gap-1` (0.25rem / 4px)
* `gap-2` (0.5rem / 8px)
* `gap-4` (1rem / 16px)
* `gap-8` (2rem / 32px)
* `gap-x-4` (horizontal gap only)
* `gap-y-4` (vertical gap only)

---

## 3. Spacing (Margins & Paddings)

Tailwind spacing is based on a standard scale where `1 unit = 0.25rem` (4px).

### Padding (Internal Spacing)
* `p-4` (padding: 1rem on all sides)
* `px-4` (padding-left and padding-right: 1rem)
* `py-2` (padding-top and padding-bottom: 0.5rem)
* `pt-4` (padding-top: 1rem)
* `pr-4` (padding-right: 1rem)
* `pb-4` (padding-bottom: 1rem)
* `pl-4` (padding-left: 1rem)

### Margin (External Spacing)
* `m-4` (margin: 1rem on all sides)
* `mx-4` (margin-left and margin-right: 1rem)
* `my-2` (margin-top and margin-bottom: 0.5rem)
* `mt-4` (margin-top: 1rem)
* `mr-4` / `mb-4` / `ml-4`
* `mx-auto` (centers block elements horizontally)

---

## 4. Sizing (Width & Height)

### Width
* `w-0` (width: 0px)
* `w-auto` (width: auto)
* `w-1/2` (width: 50%)
* `w-1/3` (width: 33.333333%)
* `w-full` (width: 100%)
* `w-screen` (width: 100vw)
* `w-fit` (width: fit-content)
* `w-4` (width: 1rem / 16px)
* `w-96` (width: 24rem / 384px)

### Height
* `h-full` (height: 100%)
* `h-screen` (height: 100vh)
* `h-fit` (height: fit-content)
* `h-4` (height: 1rem / 16px)
* `h-96` (height: 24rem / 384px)

### Min / Max Dimensions
* `min-w-0` / `min-w-full`
* `max-w-xs` (max-width: 20rem)
* `max-w-md` (max-width: 28rem)
* `max-w-lg` (max-width: 32rem)
* `max-w-full` (max-width: 100%)
* `max-h-screen` (max-height: 100vh)

---

## 5. Typography

### Font Family
* `font-sans` (System/Sans-serif font)
* `font-serif` (Serif font)
* `font-mono` (Monospace font)

### Font Size
* `text-xs` (0.75rem, line-height: 1rem)
* `text-sm` (0.875rem, line-height: 1.25rem)
* `text-base` (1rem, line-height: 1.5rem)
* `text-lg` (1.125rem, line-height: 1.75rem)
* `text-xl` (1.25rem, line-height: 1.75rem)
* `text-2xl` (1.5rem, line-height: 2rem)
* `text-4xl` (2.25rem, line-height: 2.5rem)
* `text-6xl` (3.75rem, line-height: 1)

### Font Weight
* `font-light` (font-weight: 300)
* `font-normal` (font-weight: 400)
* `font-medium` (font-weight: 500)
* `font-semibold` (font-weight: 600)
* `font-bold` (font-weight: 700)
* `font-extrabold` (font-weight: 800)

### Alignment & Transform
* `text-left` / `text-center` / `text-right` / `text-justify`
* `uppercase` (text-transform: uppercase)
* `lowercase`
* `capitalize`
* `normal-case`

---

## 6. Backgrounds

### Background Color
* `bg-white` / `bg-black` / `bg-transparent`
* `bg-slate-900` / `bg-zinc-800` / `bg-indigo-600` / `bg-red-500`
* Opacity overlay syntax (Tailwind v4): `bg-slate-900/50` (50% opacity slate-900 background)

### Gradients
* `bg-gradient-to-r` (gradient from left to right)
* `bg-gradient-to-b` (gradient from top to bottom)
* `from-indigo-500` (start color)
* `via-purple-500` (middle transition color)
* `to-pink-500` (end color)

---

## 7. Borders & Outlines

### Border Radius (Rounded Corners)
* `rounded-none`
* `rounded-sm` (border-radius: 0.125rem)
* `rounded` (border-radius: 0.25rem)
* `rounded-md` (border-radius: 0.375rem)
* `rounded-lg` (border-radius: 0.5rem)
* `rounded-xl` (border-radius: 0.75rem)
* `rounded-2xl` (border-radius: 1rem)
* `rounded-3xl` (border-radius: 1.5rem)
* `rounded-full` (capsule/circle shape)

### Border Width & Colors
* `border` (border-width: 1px)
* `border-2` (border-width: 2px)
* `border-4` (border-width: 4px)
* `border-t-2` (border-top-width: 2px only)
* `border-slate-800` / `border-indigo-500`

### Border Styles
* `border-solid`
* `border-dashed`
* `border-dotted`
* `border-none`

---

## 8. Effects & Filters

### Box Shadow
* `shadow-sm`
* `shadow`
* `shadow-md`
* `shadow-lg`
* `shadow-xl`
* `shadow-2xl`
* `shadow-none`

### Opacity
* `opacity-0` (opacity: 0)
* `opacity-50` (opacity: 0.5)
* `opacity-100` (opacity: 1)

### Filters & Backdrop Filters (Glassmorphism)
* `blur-sm` / `blur-md`
* `backdrop-blur-sm` (blurs background behind element)
* `backdrop-blur-md`
* `backdrop-blur-xl`

---

## 9. Transitions & Animations

### Transition Property
* `transition-none`
* `transition` (all standard transitionable properties)
* `transition-all` (every transitionable property)
* `transition-colors` (background, text, borders only)
* `transition-transform` (transform properties only)

### Transition Duration & Ease
* `duration-75` (75ms)
* `duration-200` (200ms)
* `duration-300` (300ms)
* `duration-500` (500ms)
* `ease-linear`
* `ease-in`
* `ease-out`
* `ease-in-out`

### Animations
* `animate-none`
* `animate-spin` (continuous spinning loader)
* `animate-pulse` (fading glow effect)
* `animate-bounce` (bouncing effect)

---

## 10. Transforms

Used with `transition` to make smooth interactive effects.
* `scale-95` / `scale-100` / `scale-105` (changes scale)
* `rotate-45` / `rotate-90` / `-rotate-12` (rotates element)
* `translate-x-4` / `translate-y-2` (moves horizontally or vertically)
* `origin-center` / `origin-top-left` (transform origin point)

---

## 11. Interactive State Modifiers

Append these prefixes to apply styles under certain conditions.

* `hover:` (when the mouse is over the element, e.g., `hover:bg-indigo-700`)
* `active:` (while the element is clicked/pressed, e.g., `active:scale-95`)
* `focus:` (when the element gains focus, e.g., `focus:ring-2`)
* `disabled:` (when the button/input is disabled, e.g., `disabled:opacity-50`)
* `dark:` (when dark mode is active, e.g., `dark:bg-black`)

---

## 12. Responsive Breakpoints

Responsiveness is mobile-first. Styles are applied starting at the width and up.

* **Default**: Mobile phone width (below 640px)
* `sm:` (Small screens/Tablets - 640px and up)
* `md:` (Medium screens/Laptops - 768px and up)
* `lg:` (Large screens/Desktops - 1024px and up)
* `xl:` (Extra large screens - 1280px and up)
* `2xl:` (Ultra large screens - 1536px and up)

**Example Usage**:
```tsx
// 1 column on mobile, 2 columns on tablets, 3 columns on desktops
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
```

---

## 13. Tailwind v4 Customization (Using `@theme` in CSS)

Instead of the old `tailwind.config.js` file, in Tailwind v4 you customize properties directly in your primary CSS file (e.g., `src/index.css`) like this:

```css
@import "tailwindcss";

@theme {
  /* Customize standard colors */
  --color-primary: #3b82f6;
  
  /* Add new colors */
  --color-brand-purple: #8b5cf6;
  
  /* Customize standard fonts */
  --font-sans: "Outfit", sans-serif;
  
  /* Create custom animations */
  --animate-float: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
  }
}
```
Once added to `@theme`, they automatically map to class utilities:
* `--color-brand-purple` becomes `bg-brand-purple` / `text-brand-purple` / `border-brand-purple`
* `--animate-float` becomes `animate-float`
