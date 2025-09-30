# Testing Library Tests for CV Application

This directory contains comprehensive React Testing Library tests for the CV application components, organized in a clean folder structure.

## Directory Structure

```
testing-library/
├── components/           # Individual component tests
│   ├── Hero.test.tsx
│   ├── Personal.test.tsx
│   ├── Experience.test.tsx
│   ├── Education.test.tsx
│   ├── Skills.test.tsx
│   ├── Resume.test.tsx
│   ├── Menu.test.tsx
│   └── LangSwitcher.test.tsx
├── integration/         # Integration tests
│   └── Integration.test.tsx
├── utils/               # Test utilities
│   └── Components.tsx
└── README.md           # This file
```

## Test Files Overview

### Component Tests (`components/`)

- **`Hero.test.tsx`** - Tests for the Hero component (personal information display)
- **`Personal.test.tsx`** - Tests for the Personal/About section
- **`Experience.test.tsx`** - Tests for the Experience section
- **`Education.test.tsx`** - Tests for the Education section
- **`Skills.test.tsx`** - Tests for the Skills section
- **`Resume.test.tsx`** - Tests for the Resume/PDF view
- **`Menu.test.tsx`** - Tests for the navigation menu
- **`LangSwitcher.test.tsx`** - Tests for the language switcher

### Integration Tests (`integration/`)

- **`Integration.test.tsx`** - End-to-end integration tests covering navigation, language switching, and cross-component interactions

### Test Utilities (`utils/`)

- **`Components.tsx`** - Shared test utilities including `renderMockRoot` function for rendering components with routing and i18n context

## Best Practices Used

### 1. **Semantic Queries**

- Using `getByRole`, `getByText`, `getByLabelText` instead of CSS selectors
- Prioritizing user-facing queries over implementation details

### 2. **Accessibility Testing**

- Testing for proper ARIA roles and attributes
- Ensuring keyboard navigation works correctly
- Verifying screen reader compatibility

### 3. **User-Centric Testing**

- Testing what users see and interact with
- Focusing on behavior rather than implementation
- Testing user workflows and navigation

### 4. **Comprehensive Coverage**

- Testing component rendering
- Testing user interactions (clicks, form inputs)
- Testing navigation and routing
- Testing internationalization
- Testing responsive design classes

### 5. **Clean Test Structure**

- Descriptive test names
- Proper setup and teardown
- Isolated test cases
- Clear assertions

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test components/Hero.test.tsx

# Run all component tests
npm test -- --run src/client/tests/testing-library/components/

# Run integration tests
npm test -- --run src/client/tests/testing-library/integration/

# Run tests with coverage
npm test -- --coverage
```

## Test Examples

### Component Rendering Test

```typescript
it('renders personal information correctly', () => {
  renderMockRoot({ initialEntries: ['/cv/en/'] });

  expect(screen.getByText('Hanna')).toBeInTheDocument();
  expect(screen.getByText('Gaudasińska-Zapaśnik')).toBeInTheDocument();
  expect(screen.getByText('JavaScript Developer')).toBeInTheDocument();
});
```

### User Interaction Test

```typescript
it('switches language when clicking on alternative language', () => {
  renderMockRoot({ initialEntries: ['/cv/en/'] });

  const langButton = screen.getByText('EN');
  fireEvent.click(langButton);

  const plOption = screen.getByText('PL');
  fireEvent.click(plOption);

  expect(screen.getByText('PL')).toBeInTheDocument();
});
```

### Navigation Test

```typescript
it('navigates between different sections', () => {
  renderMockRoot({ initialEntries: ['/cv/en/'] });

  const skillsLink = screen.getByRole('link', { name: /wrench/i });
  fireEvent.click(skillsLink);

  expect(screen.getByText('Skills')).toBeInTheDocument();
});
```

## Key Features Tested

- ✅ Component rendering and content display
- ✅ Navigation between sections
- ✅ Language switching (EN/PL)
- ✅ Contact links and external URLs
- ✅ Technology icons with tooltips
- ✅ Responsive design classes
- ✅ Accessibility attributes
- ✅ User interactions and events
- ✅ Integration between components
- ✅ Routing and URL handling

## Notes

- Tests use `renderMockRoot` utility to provide proper context (routing, i18n, styles)
- All tests are written with user experience in mind
- Tests focus on behavior rather than implementation details
- Comprehensive coverage of all major user workflows
- Tests are maintainable and easy to understand
