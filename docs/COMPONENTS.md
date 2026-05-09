# Reusable Components Library

Shared UI components, animations, and page sections for rapid development.

## Quick Import

All components are in `/components/`:

```jsx
import Button from '../../components/ui/Button';
import { FadeInUp } from '../../components/animations';
import Hero from '../../components/sections/Hero';
```

## UI Components

### Button

Versatile button component with variants.

```jsx
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>
```

**Props**:
- `variant`: "primary" | "secondary" | "outline"
- `className`: Custom CSS classes
- All standard button props supported

**Variants**:
- **primary**: Blue background, white text
- **secondary**: Gray background, dark text
- **outline**: Border only, blue text

---

### Card

Content container with hover effects.

```jsx
<Card hover={true} className="custom-class">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

**Props**:
- `hover`: Enable hover animation (default: true)
- `className`: Custom CSS classes

---

### Badge

Status badges and tags.

```jsx
<Badge variant="success">Active</Badge>
<Badge variant="error">Failed</Badge>
```

**Variants**:
- `default`: Gray
- `success`: Green
- `warning`: Yellow
- `error`: Red
- `primary`: Blue

---

## Animation Components

### FadeInUp

Fade and slide up animation on initial mount.

```jsx
<FadeInUp delay={0.2}>
  <h1>Animated heading</h1>
</FadeInUp>
```

**Props**:
- `delay`: Animation delay in seconds (default: 0)
- `className`: Custom CSS classes

---

### ScaleOnScroll

Scale animation triggered when element enters viewport.

```jsx
<ScaleOnScroll threshold={0.1}>
  <Card>Scales in when visible</Card>
</ScaleOnScroll>
```

**Props**:
- `threshold`: Viewport visibility threshold (0-1)

---

### Animation Variants

Reusable Framer Motion animation presets:

```jsx
import { containerVariants, itemVariants } from '../../components/animations/variants';

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## Page Sections

Pre-built sections for rapid page construction.

### Hero Section

Hero with title, subtitle, CTA, and optional image.

```jsx
<Hero
  title="Welcome to My Product"
  subtitle="Build amazing things with our platform"
  imageSrc="/hero.png"
  cta={() => navigate('/signup')}
  ctaText="Get Started Free"
/>
```

**Props**:
- `title`: Hero headline (required)
- `subtitle`: Hero subheading (required)
- `imageSrc`: Image URL (optional)
- `cta`: onClick handler for button
- `ctaText`: Button text

---

### Features Section

Grid of feature cards.

```jsx
<Features
  title="Our Features"
  features={[
    {
      icon: '⚡',
      title: 'Fast',
      description: 'Lightning quick performance'
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Enterprise security standards'
    },
    // ... more features
  ]}
/>
```

**Props**:
- `title`: Section heading
- `features`: Array of feature objects
  - `icon`: Emoji or icon component
  - `title`: Feature name
  - `description`: Feature description

---

### Pricing Section

Pricing plans with comparison.

```jsx
<Pricing
  title="Simple Pricing"
  plans={[
    {
      name: 'Starter',
      price: 29,
      featured: false,
      features: ['5 Projects', 'Basic Support'],
      cta: 'Get Started'
    },
    {
      name: 'Pro',
      price: 99,
      featured: true,
      features: ['Unlimited Projects', 'Priority Support', 'Advanced Analytics'],
      cta: 'Start Free Trial'
    },
  ]}
/>
```

**Props**:
- `title`: Section heading
- `plans`: Array of plan objects
  - `name`: Plan name
  - `price`: Monthly price
  - `featured`: Highlight this plan
  - `features`: Array of feature strings
  - `cta`: Button text

---

### CTA Section

Call-to-action with primary/secondary buttons.

```jsx
<CTA
  title="Ready to Get Started?"
  subtitle="Join thousands of users building with us"
  primaryAction={() => navigate('/signup')}
  secondaryAction={() => navigate('/docs')}
/>
```

**Props**:
- `title`: Headline
- `subtitle`: Subheading
- `primaryAction`: Primary button click handler
- `secondaryAction`: Optional secondary button handler

---

## Component Composition Examples

### Full Landing Page

```jsx
import Hero from '../../components/sections/Hero';
import Features from '../../components/sections/Features';
import Pricing from '../../components/sections/Pricing';
import CTA from '../../components/sections/CTA';

export default function LandingPage() {
  return (
    <>
      <Hero
        title="Build Your AI SaaS"
        subtitle="Launch in minutes, scale infinitely"
        imageSrc="/hero.png"
      />
      <Features
        title="Powerful Features"
        features={[...]}
      />
      <Pricing
        title="Transparent Pricing"
        plans={[...]}
      />
      <CTA
        title="Start Building Today"
        subtitle="No credit card required"
      />
    </>
  );
}
```

### Feature Grid with Cards

```jsx
import { motion } from 'framer-motion';
import Card from '../../components/ui/Card';
import { containerVariants, itemVariants } from '../../components/animations/variants';

export default function FeatureGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-3 gap-6"
    >
      {features.map((feature) => (
        <motion.div key={feature.id} variants={itemVariants}>
          <Card>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
```

---

## Styling & Customization

All components use Tailwind CSS and accept `className` props for customization.

```jsx
<Button
  variant="primary"
  className="w-full uppercase tracking-wider"
>
  Custom Button
</Button>
```

Extend theme in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      brand: {
        500: '#your-color'
      }
    }
  }
}
```

---

## Animation Performance

Framer Motion optimizations:
- GPU-accelerated transforms
- Automatic layout animations
- Intersection observer for scroll triggers
- Reduced motion on accessible devices

```jsx
// Respects prefers-reduced-motion
<motion.div
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

---

## Best Practices

✅ **Do**:
- Combine multiple components for complex layouts
- Use animation delays for staggered effects
- Customize theme colors in config
- Extend components as needed

❌ **Don't**:
- Modify core component files
- Hardcode colors (use theme)
- Create massive animations on low-end devices
- Ignore accessibility guidelines

---

## Need More? Extend!

Create custom components based on these:

```jsx
// components/ui/CustomButton.jsx
import Button from './Button';

export default function CustomButton(props) {
  return <Button variant="custom" {...props} />;
}
```

Components are meant to be forked and customized per project.
