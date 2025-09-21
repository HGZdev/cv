# Development Guide

## Table of Contents

1. [Getting Started](#getting-started)
2. [Development Environment](#development-environment)
3. [Project Setup](#project-setup)
4. [Coding Standards](#coding-standards)
5. [Component Development](#component-development)
6. [Testing Guidelines](#testing-guidelines)
7. [Internationalization](#internationalization)
8. [Styling Guidelines](#styling-guidelines)
9. [Performance Guidelines](#performance-guidelines)
10. [Debugging](#debugging)
11. [Contributing](#contributing)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **pnpm** (recommended) or npm - [Install pnpm](https://pnpm.io/installation)
- **Git** - [Download](https://git-scm.com/)

### Recommended Tools

- **VS Code** with extensions:
  - ES7+ React/Redux/React-Native snippets
  - TypeScript Importer
  - Tailwind CSS IntelliSense
  - Prettier - Code formatter
  - ESLint
  - Auto Rename Tag
  - Bracket Pair Colorizer

## Development Environment

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Development server port
VITE_LOCAL_PORT=3000

# Preview server port
VITE_LOCAL_SERVER_PORT=4173

# Base URL for GitHub Pages
VITE_BASE_URL=/cv/

# Google Analytics ID (optional)
VITE_GA_ID=your-ga-id

# Enable hash router for GitHub Pages
VITE_HASH_ROUTER=true
```

### VS Code Configuration

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

## Project Setup

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/hgzdev/cv.git
cd cv

# Install dependencies
pnpm install

# Verify installation
pnpm dev
```

### 2. Development Server

```bash
# Start development server
pnpm dev

# The application will be available at http://localhost:3000
```

### 3. Build and Preview

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Coding Standards

### TypeScript Guidelines

#### Type Definitions

- Use interfaces for object shapes
- Use types for unions and primitives
- Prefer `interface` over `type` for extensibility
- Use generic types for reusable components

```typescript
// Good
interface UserProps {
  name: string;
  email: string;
}

type Status = 'loading' | 'success' | 'error';

// Bad
type UserProps = {
  name: string;
  email: string;
};
```

#### Component Props

- Always define prop interfaces
- Use optional props with `?` when appropriate
- Provide default values for optional props

```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
}) => {
  // Component implementation
};
```

### React Guidelines

#### Component Structure

1. Imports (external libraries first)
2. Type definitions
3. Component definition
4. Export

```typescript
import React from 'react';
import { styled } from 'styled-components';

interface ComponentProps {
  title: string;
}

const StyledComponent = styled.div`
  /* styles */
`;

const Component: React.FC<ComponentProps> = ({ title }) => {
  return (
    <StyledComponent>
      <h1>{title}</h1>
    </StyledComponent>
  );
};

export default Component;
```

#### Hooks Usage

- Use custom hooks for reusable logic
- Follow the Rules of Hooks
- Use `useCallback` and `useMemo` for performance optimization

```typescript
const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      try {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    },
    [key]
  );

  return [storedValue, setValue] as const;
};
```

### File Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useLocalStorage.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Types**: PascalCase (e.g., `UserTypes.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)

### Import Organization

```typescript
// 1. React and React-related imports
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 2. Third-party libraries
import styled from 'styled-components';
import { format } from 'date-fns';

// 3. Internal imports (absolute paths)
import { Button } from '@/components/ui';
import { useLocalStorage } from '@/hooks';

// 4. Relative imports
import './Component.css';
```

## Component Development

### Component Structure

Each component should follow this structure:

```typescript
import React from 'react';
import styled from 'styled-components';

// Types
interface ComponentProps {
  // prop definitions
}

// Styled components
const StyledComponent = styled.div`
  /* styles */
`;

// Main component
const Component: React.FC<ComponentProps> = ({ ...props }) => {
  // Hooks
  // Event handlers
  // Render logic

  return (
    <StyledComponent>
      {/* JSX */}
    </StyledComponent>
  );
};

export default Component;
```

### Domain Components

Domain components should be self-contained and follow this structure:

```
domain/
├── data.ts          # Domain data and constants
├── types.ts         # TypeScript definitions
├── utils.ts         # Utility functions
├── Component.tsx    # Main component
└── index.ts         # Exports
```

### Component Guidelines

1. **Single Responsibility**: Each component should have one clear purpose
2. **Composition**: Prefer composition over inheritance
3. **Props Interface**: Always define clear prop interfaces
4. **Default Props**: Provide sensible defaults
5. **Error Boundaries**: Handle errors gracefully

## Testing Guidelines

### Test Structure

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { renderMockRoot } from '../utils/Components';
import Component from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(screen.getByText('Updated Text')).toBeInTheDocument();
  });
});
```

### Testing Best Practices

1. **Test Behavior**: Test what users see and do, not implementation details
2. **Semantic Queries**: Use `getByRole`, `getByText`, `getByLabelText`
3. **Accessibility**: Test ARIA attributes and keyboard navigation
4. **User Workflows**: Test complete user journeys
5. **Edge Cases**: Test error states and edge cases

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run specific test file
pnpm test Component.test.tsx

# Run tests with coverage
pnpm test --coverage
```

## Internationalization

### Adding Translations

1. **Update Translation File**: Add new keys to `data/translations.ts`

```typescript
const translations: Translations = {
  new_key: {
    en: 'English text',
    pl: 'Polish text',
  },
  // ... existing translations
};
```

2. **Use in Components**: Import and use translations

```typescript
import { useTranslation } from '@/lib/i18n';

const Component = () => {
  const { t } = useTranslation();

  return <h1>{t('new_key')}</h1>;
};
```

### Translation Guidelines

1. **Key Naming**: Use descriptive, hierarchical keys
2. **Consistency**: Maintain consistent terminology
3. **Context**: Provide context for translators
4. **Testing**: Test both languages in development

## Styling Guidelines

### Tailwind CSS

- Use utility classes for layout and spacing
- Create custom components for repeated patterns
- Use responsive prefixes (`sm:`, `md:`, `lg:`)

```typescript
const Component = () => (
  <div className="flex flex-col gap-4 p-4 md:flex-row md:gap-8">
    <div className="w-full md:w-1/2">
      {/* content */}
    </div>
  </div>
);
```

### Styled Components

- Use for dynamic styling and themes
- Keep styles close to components
- Use theme provider for consistent values

```typescript
const StyledButton = styled.button<{ variant: 'primary' | 'secondary' }>`
  background-color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.primary : theme.colors.secondary};
  color: ${({ theme }) => theme.colors.onPrimary};
  padding: ${({ theme }) => theme.spacing.md};
`;
```

### Design System

- Use design tokens for consistency
- Follow the established color palette
- Use responsive typography scales

## Performance Guidelines

### Optimization Strategies

1. **Code Splitting**: Use dynamic imports for route components
2. **Memoization**: Use `React.memo`, `useMemo`, `useCallback`
3. **Image Optimization**: Use WebP format and responsive images
4. **Bundle Analysis**: Regularly check bundle size

```typescript
// Lazy loading
const LazyComponent = React.lazy(() => import('./Component'));

// Memoization
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => processItem(item));
  }, [data]);

  return <div>{processedData}</div>;
});
```

### Performance Monitoring

- Use React DevTools Profiler
- Monitor Core Web Vitals
- Check bundle size regularly
- Use Lighthouse for performance audits

## Debugging

### Development Tools

1. **React DevTools**: Component inspection and profiling
2. **Redux DevTools**: State management debugging
3. **Browser DevTools**: Network, performance, and console
4. **VS Code Debugger**: Breakpoint debugging

### Common Issues

1. **Routing Issues**: Check route configuration and base URL
2. **Styling Issues**: Verify Tailwind classes and CSS specificity
3. **Type Errors**: Check TypeScript configuration and types
4. **Build Issues**: Clear cache and reinstall dependencies

### Debugging Commands

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Check TypeScript errors
pnpm tsc --noEmit

# Lint and fix issues
pnpm lint:fix

# Format code
pnpm format
```

## Contributing

### Workflow

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make changes**: Follow coding standards and guidelines
4. **Write tests**: Ensure adequate test coverage
5. **Commit changes**: Use semantic commit messages
6. **Push to branch**: `git push origin feature/amazing-feature`
7. **Create Pull Request**: Provide clear description and testing instructions

### Commit Message Format

Use semantic commit messages:

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: add or update tests
chore: maintenance tasks
```

### Pull Request Guidelines

1. **Clear Description**: Explain what changes were made and why
2. **Testing Instructions**: Provide steps to test the changes
3. **Screenshots**: Include screenshots for UI changes
4. **Breaking Changes**: Clearly mark any breaking changes
5. **Documentation**: Update documentation if needed

### Code Review Process

1. **Automated Checks**: Ensure all CI checks pass
2. **Code Quality**: Review code style and architecture
3. **Testing**: Verify test coverage and quality
4. **Documentation**: Check if documentation needs updates
5. **Performance**: Consider performance implications

### Getting Help

- **Issues**: Create GitHub issues for bugs and feature requests
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Documentation**: Check existing documentation first
- **Code Examples**: Look at existing code for patterns and examples
