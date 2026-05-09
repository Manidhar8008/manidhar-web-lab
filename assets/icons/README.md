# Icon Library

Add SVG icons and assets here.

## Guidelines

- Use consistent stroke width (2px)
- Size: 24x24px base
- Format: SVG or PNG
- Naming: kebab-case (e.g., `arrow-right.svg`)

## Categories

```
icons/
├── ui/
│   ├── arrow-right.svg
│   ├── close.svg
│   └── menu.svg
├── features/
│   ├── lightning.svg
│   ├── shield.svg
│   └── zap.svg
└── social/
    ├── github.svg
    ├── twitter.svg
    └── linkedin.svg
```

Import in components:
```jsx
import ArrowIcon from '../../assets/icons/ui/arrow-right.svg';
```
