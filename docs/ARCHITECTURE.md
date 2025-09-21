# Architecture Documentation

## Overview

This CV website is built using a modern React architecture with TypeScript, following domain-driven design principles and component-based architecture. The application is designed for scalability, maintainability, and performance.

## Architecture Principles

### 1. Domain-Driven Design (DDD)

The application is organized around business domains rather than technical layers:

- **Personal Domain**: Personal information and about section
- **Experience Domain**: Work experience and career history
- **Education Domain**: Educational background and qualifications
- **Skills Domain**: Technical skills and competencies
- **Resume Domain**: CV generation and print functionality

### 2. Component-Based Architecture

- **Atomic Design**: Components are organized from smallest (atoms) to largest (pages)
- **Composition over Inheritance**: Components are composed together rather than extended
- **Single Responsibility**: Each component has a single, well-defined purpose

### 3. Separation of Concerns

- **Presentation Layer**: React components for UI
- **Business Logic**: Custom hooks and domain services
- **Data Layer**: Translation files and configuration
- **Infrastructure**: Routing, analytics, and external services

## Project Structure

```
src/
├── client/                    # Frontend application
│   ├── components/           # Reusable UI components
│   │   ├── common/          # Shared components (ErrorPage, Loading, etc.)
│   │   ├── layout/          # Layout components (Menu, Hero, etc.)
│   │   └── ui/              # Basic UI elements (Button, Divider)
│   ├── domains/             # Feature-based modules (DDD approach)
│   │   ├── education/       # Education domain
│   │   ├── experience/      # Experience domain
│   │   ├── personal/        # Personal domain
│   │   ├── resume/          # Resume domain
│   │   └── skills/          # Skills domain
│   ├── hooks/               # Custom React hooks
│   ├── styles/              # Global styles and design tokens
│   └── tests/               # Test files
└── lib/                     # Shared utilities and configurations
    ├── config/              # Configuration management
    ├── GoogleAnalytics/    # Analytics integration
    ├── i18n/               # Internationalization
    ├── routing/            # Routing utilities
    ├── utils/              # Helper functions
    └── vite/               # Vite configuration
```

## Domain Architecture

### Domain Structure

Each domain follows a consistent structure:

```
domain/
├── data.ts          # Domain-specific data and constants
├── types.ts         # TypeScript type definitions
├── utils.ts         # Domain-specific utility functions
├── Component.tsx    # Main domain component
└── index.ts         # Domain exports
```

### Domain Responsibilities

#### Personal Domain

- **Purpose**: Display personal information and about section
- **Components**: Personal.tsx, Hero.tsx
- **Data**: Personal information, contact details, profile image
- **Features**: Responsive layout, image optimization

#### Experience Domain

- **Purpose**: Showcase work experience and career history
- **Components**: Experience.tsx
- **Data**: Job history, company information, achievements
- **Features**: Timeline view, company logos, date formatting

#### Education Domain

- **Purpose**: Display educational background
- **Components**: Education.tsx
- **Data**: Degrees, institutions, dates, achievements
- **Features**: Academic timeline, institution information

#### Skills Domain

- **Purpose**: Present technical skills and competencies
- **Components**: Skills.tsx
- **Data**: Technology stacks, proficiency levels, categories
- **Features**: Skill categories, proficiency indicators, technology icons

#### Resume Domain

- **Purpose**: Generate and display printable CV
- **Components**: Resume.tsx, LeftBar.tsx, RightBar.tsx
- **Data**: Combined data from all domains
- **Features**: Print functionality, PDF generation, responsive CV layout

## Component Architecture

### Component Hierarchy

```
App
├── Root (Router)
│   ├── WrapRoute (Layout)
│   │   ├── Menu (Navigation)
│   │   ├── LangSwitcher (Language Toggle)
│   │   └── Route Components
│   │       ├── Personal
│   │       ├── Experience
│   │       ├── Education
│   │       ├── Skills
│   │       └── Resume
│   └── ErrorPage (Error Handling)
```

### Component Types

#### 1. Layout Components

- **Purpose**: Provide structure and navigation
- **Examples**: Menu, Hero, WrapRoute
- **Characteristics**: High-level, reusable across routes

#### 2. Domain Components

- **Purpose**: Implement specific business functionality
- **Examples**: Personal, Experience, Education, Skills, Resume
- **Characteristics**: Self-contained, domain-specific

#### 3. UI Components

- **Purpose**: Provide basic UI elements
- **Examples**: Button, Divider
- **Characteristics**: Low-level, highly reusable

#### 4. Common Components

- **Purpose**: Shared functionality across the application
- **Examples**: ErrorPage, Loading, Metadata
- **Characteristics**: Cross-cutting concerns

## State Management

### Local State

- **React Hooks**: useState, useEffect, useRef
- **Custom Hooks**: Domain-specific logic encapsulation
- **Context API**: Global state for routing and i18n

### State Flow

1. **Component State**: Local component state using hooks
2. **Context State**: Global state for routing and internationalization
3. **URL State**: Route parameters and query strings
4. **External State**: Google Analytics tracking

## Data Flow

### Data Sources

1. **Translation Files**: `data/translations.ts`
2. **Configuration**: `lib/config/`
3. **Domain Data**: Each domain's `data.ts`
4. **External APIs**: Google Analytics, external links

### Data Flow Pattern

```
Data Source → Domain Data → Component Props → UI Rendering
```

## Routing Architecture

### Route Structure

```
/ → Redirect to /cv/en/
/cv → Redirect to /cv/en/
/cv/:lang/ → Language-specific routes
/cv/:lang/personal → Personal information
/cv/:lang/experience → Work experience
/cv/:lang/education → Education
/cv/:lang/skills → Skills
/cv/:lang/resume → Resume/PDF view
```

### Routing Features

- **Language-based routing**: Automatic language detection
- **Hash routing**: Support for GitHub Pages
- **Error handling**: 404 pages and error boundaries
- **Navigation**: Programmatic and declarative navigation

## Internationalization (i18n)

### i18n Architecture

- **Translation System**: Custom i18n implementation
- **Language Support**: English (en), Polish (pl)
- **Translation Keys**: Hierarchical key structure
- **Language Switching**: Dynamic language switching

### Translation Structure

```typescript
{
  [key: string]: {
    en: string;
    pl: string;
  }
}
```

## Styling Architecture

### Design System

- **Tailwind CSS**: Utility-first CSS framework
- **Styled Components**: CSS-in-JS for dynamic styling
- **Design Tokens**: Consistent colors, typography, spacing
- **Responsive Design**: Mobile-first approach

### Styling Strategy

1. **Utility Classes**: Tailwind for layout and spacing
2. **Styled Components**: Dynamic styling and themes
3. **CSS Modules**: Component-specific styles
4. **Global Styles**: Reset, fonts, and base styles

## Testing Architecture

### Testing Strategy

- **Unit Tests**: Individual component testing
- **Integration Tests**: Cross-component interaction testing
- **Accessibility Tests**: ARIA compliance and keyboard navigation
- **Visual Tests**: Component rendering and styling

### Testing Tools

- **Vitest**: Fast unit testing framework
- **React Testing Library**: Component testing utilities
- **Jest DOM**: Custom matchers for DOM testing
- **Testing Utilities**: Custom render functions and mocks

## Performance Architecture

### Optimization Strategies

- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Component lazy loading
- **Bundle Optimization**: Tree shaking and minification
- **Image Optimization**: WebP format and responsive images

### Performance Monitoring

- **Bundle Analysis**: Rollup visualizer
- **Google Analytics**: Performance tracking
- **Core Web Vitals**: Performance metrics

## Security Architecture

### Security Measures

- **Content Security Policy**: CSP headers
- **HTTPS**: Secure connections
- **Input Validation**: TypeScript type checking
- **XSS Protection**: React's built-in XSS protection

## Deployment Architecture

### Build Process

1. **TypeScript Compilation**: Type checking and compilation
2. **Vite Build**: Module bundling and optimization
3. **Asset Processing**: Image optimization and copying
4. **Bundle Analysis**: Performance metrics generation

### Deployment Targets

- **GitHub Pages**: Static site hosting
- **Local Development**: Development server
- **Production Build**: Optimized production bundle

## Future Considerations

### Scalability

- **Micro-frontends**: Potential for micro-frontend architecture
- **API Integration**: Backend API integration
- **State Management**: Redux or Zustand for complex state
- **Caching**: Service worker implementation

### Maintainability

- **Documentation**: Comprehensive documentation
- **Code Standards**: ESLint and Prettier configuration
- **Testing**: Comprehensive test coverage
- **Monitoring**: Error tracking and performance monitoring
