# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build locally
npm run preview

# Install dependencies
npm install
```

## Architecture Overview

This is a React + Vite calculator application with a component-based architecture that supports both basic and scientific calculator modes with theme switching capabilities.

### State Management Architecture

**App-level State (App.jsx)**:
- `theme`: Controls dark/light mode ('dark' | 'light')
- `mode`: Controls calculator type ('basic' | 'scientific')
- Both states persist to localStorage with keys 'calculator-theme' and 'calculator-mode'

**Calculator State (Calculator.jsx)**:
- `display`: Current display value as string
- `previousValue`: Stored value for chained operations
- `operation`: Current operation type ('+', '-', '*', '/', '=')
- `waitingForOperand`: Boolean flag for input state management

### Component Hierarchy

```
App
├── ThemeToggle (theme switching)
├── ModeToggle (basic ⇔ scientific switching)
└── Calculator
    ├── Display (read-only input showing current value)
    └── ButtonGrid
        └── Button[] (individual calculator buttons)
```

### Theme System

Uses CSS Variables for theming with `[data-theme="dark|light"]` selectors:
- Theme state controlled at document root via `document.documentElement.setAttribute('data-theme', theme)`
- Color variables defined in `App.css` for both themes
- All components reference these variables for consistent theming

### Calculator Logic

**Basic Operations**: Handled in `calculate()` function with standard arithmetic
**Scientific Operations**: Handled in `performScientificOperation()` with Math functions
- Trigonometric functions use degree conversion (value * Math.PI / 180)
- Factorial implementation with validation for non-negative integers

### Button Configuration

**ButtonGrid.jsx** contains two arrays:
- `basicButtons`: Standard calculator layout (always visible)
- `scientificButtons`: Scientific functions (visible only in scientific mode)

Each button object has: `{label, onClick, className}` for rendering and behavior.

### Development Notes

- All components include detailed Japanese comments explaining functionality
- CSS follows BEM-like naming with component-specific stylesheets
- Responsive design with mobile breakpoints in component CSS files
- No external state management library - uses React hooks only