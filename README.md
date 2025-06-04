# Simple Calculator

A feature-rich calculator application with multiple themes and calculation modes.

## Features

### 🧮 Calculation Modes
- **Basic Calculator**: Standard arithmetic operations (addition, subtraction, multiplication, division)
- **Scientific Calculator**: Advanced mathematical functions including:
  - Trigonometric functions (sin, cos, tan) with degree conversion
  - Logarithmic functions (log, ln)
  - Square root and square operations
  - Factorial calculation with validation

### 🎨 Theme Support
- **Dark Theme**: Modern dark mode with blue accents
- **Light Theme**: Clean light mode with orange accents
- **Casio Theme**: Retro calculator style inspired by classic Casio fx-17
  - Authentic LCD-style display with green background
  - Courier New monospace font for authentic feel
  - Classic color scheme with orange operation buttons

### 🔧 Advanced Features
- **Persistent Settings**: Theme and mode preferences saved to localStorage
- **Continuous Calculations**: Chain multiple operations seamlessly
- **Input Validation**: Error handling for invalid operations
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Keyboard-friendly Interface**: Intuitive button layout

### 📱 User Interface
- Real-time display updates
- Clear visual feedback for different button types
- Smooth animations and transitions
- Accessible design with proper contrast ratios

## Project Structure

### React Application (`calculator-react/`)
- Modern React 19 + Vite setup
- Component-based architecture
- CSS custom properties for theming
- ESLint configuration for code quality

### Legacy Version
- Vanilla HTML/CSS/JavaScript implementation
- Located in project root

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation
```bash
cd calculator-react
npm install
```

### Development
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run code linting
```

## Technology Stack
- **Frontend**: React 19, CSS3, HTML5
- **Build Tool**: Vite
- **Styling**: CSS Custom Properties (CSS Variables)
- **State Management**: React Hooks (useState, useEffect)
- **Code Quality**: ESLint
