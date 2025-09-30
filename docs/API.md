# API Documentation

## Table of Contents

1. [Translation System](#translation-system)
2. [Configuration Management](#configuration-management)
3. [Routing System](#routing-system)
4. [Google Analytics Integration](#google-analytics-integration)
5. [Component APIs](#component-apis)
6. [Utility Functions](#utility-functions)
7. [Type Definitions](#type-definitions)

## Translation System

### Overview

The application uses a custom internationalization (i18n) system that supports multiple languages with a hierarchical key structure.

### Core Files

- `data/translations.ts` - Translation data
- `lib/i18n/index.tsx` - i18n provider and context
- `lib/i18n/hooks.ts` - Translation hooks

### Translation Data Structure

```typescript
interface Translations {
  [key: string]: {
    en: string;
    pl: string;
  };
}
```

### Adding Translations

#### 1. Update Translation File

```typescript
// data/translations.ts
const translations: Translations = {
  // Existing translations...

  // New translation
  new_section_title: {
    en: 'New Section',
    pl: 'Nowa Sekcja',
  },

  // Nested translations
  navigation: {
    home: {
      en: 'Home',
      pl: 'Strona Główna',
    },
    about: {
      en: 'About',
      pl: 'O Mnie',
    },
  },
};
```

#### 2. Use in Components

```typescript
import { useTranslation } from '@/lib/i18n';

const Component = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('new_section_title')}</h1>
      <nav>
        <a href="/home">{t('navigation.home')}</a>
        <a href="/about">{t('navigation.about')}</a>
      </nav>
    </div>
  );
};
```

### Translation Hooks

#### `useTranslation()`

Returns translation function and current language.

```typescript
interface TranslationHook {
  t: (key: string) => string;
  lang: I18nLang;
  setLang: (lang: I18nLang) => void;
}

const { t, lang, setLang } = useTranslation();
```

#### `useActiveRoute()`

Returns current active route information.

```typescript
interface ActiveRoute {
  pathname: string;
  search: string;
  hash: string;
  state: any;
  key: string;
}

const activeRoute = useActiveRoute();
```

### Language Configuration

#### Supported Languages

```typescript
type I18nLang = 'en' | 'pl';

const SUPPORTED_LANGUAGES: I18nLang[] = ['en', 'pl'];
const DEFAULT_LANGUAGE: I18nLang = 'en';
```

#### Language Detection

The system automatically detects user language preferences:

1. **URL Parameter**: `/cv/en/` or `/cv/pl/`
2. **Local Storage**: Previously selected language
3. **Browser Language**: Navigator language preference
4. **Default**: Falls back to English

### Translation Best Practices

1. **Key Naming**: Use descriptive, hierarchical keys
2. **Consistency**: Maintain consistent terminology
3. **Context**: Provide context for translators
4. **Testing**: Test both languages in development

## Configuration Management

### Overview

The application uses a centralized configuration system that manages environment variables and application settings.

### Core Files

- `lib/config/getConfig.ts` - Configuration getter
- `lib/config/index.ts` - Configuration exports
- `vite.config.ts` - Vite configuration

### Configuration Structure

```typescript
interface AppConfig {
  BASE_URL: string;
  VITE_HASH_ROUTER: boolean;
  VITE_LOCAL_PORT: string;
  VITE_LOCAL_SERVER_PORT: string;
  VITE_GA_ID?: string;
}
```

### Environment Variables

| Variable                 | Type    | Default | Description                      |
| ------------------------ | ------- | ------- | -------------------------------- |
| `VITE_BASE_URL`          | string  | `/`     | Base URL for the application     |
| `VITE_HASH_ROUTER`       | boolean | `false` | Use hash router for GitHub Pages |
| `VITE_LOCAL_PORT`        | string  | `3000`  | Development server port          |
| `VITE_LOCAL_SERVER_PORT` | string  | `4173`  | Preview server port              |
| `VITE_GA_ID`             | string  | -       | Google Analytics ID              |

### Configuration Usage

```typescript
import { getConfig } from '@/lib/config';

const config = getConfig();

// Use configuration
const baseUrl = config.BASE_URL;
const useHashRouter = config.VITE_HASH_ROUTER;
const gaId = config.VITE_GA_ID;
```

### Environment-Specific Configuration

#### Development (.env.local)

```bash
VITE_LOCAL_PORT=3000
VITE_LOCAL_SERVER_PORT=4173
VITE_BASE_URL=/
VITE_HASH_ROUTER=false
VITE_GA_ID=your-ga-id
```

#### Production (.env.production)

```bash
VITE_BASE_URL=/cv/
VITE_HASH_ROUTER=true
VITE_GA_ID=your-ga-id
```

## Routing System

### Overview

The application uses React Router DOM with support for both browser router and hash router for GitHub Pages compatibility.

### Core Files

- `src/client/Root.tsx` - Router configuration
- `lib/routing/index.ts` - Routing utilities
- `lib/routing/useActiveRoute.ts` - Active route hook

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

### Router Configuration

```typescript
// Browser Router (Development)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* Routes */}
    </Route>
  )
);

// Hash Router (Production/GitHub Pages)
const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* Routes */}
    </Route>
  )
);
```

### Route Components

#### Global Routes

```typescript
const GlobalRoutes = (defaultLang: I18nLang) => (
  <>
    <Route path='/' element={<Navigate to={`${BASE_URL}/${defaultLang}/`} />} />
    <Route path='/cv' element={<Navigate to={`${BASE_URL}/${defaultLang}/`} />} />
    <Route path='*' element={<ErrorPage />} />
  </>
);
```

#### Language-Specific Routes

```typescript
const LangSpecificRoutes = (lang: I18nLang) => (
  <Route path={`${BASE_URL}/${lang}/`} element={<WrapRoute />}>
    <Route index element={<Personal />} />
    <Route path="experience" element={<Experience />} />
    <Route path="education" element={<Education />} />
    <Route path="skills" element={<Skills />} />
    <Route path="resume" element={<Resume />} />
  </Route>
);
```

### Navigation Utilities

#### `useActiveRoute()`

Returns current route information.

```typescript
const activeRoute = useActiveRoute();
// Returns: { pathname, search, hash, state, key }
```

#### Programmatic Navigation

```typescript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

// Navigate to different sections
navigate('/cv/en/experience');
navigate('/cv/pl/skills');
```

## Google Analytics Integration

### Overview

The application integrates Google Analytics 4 (GA4) for tracking user interactions and performance metrics.

### Core Files

- `lib/GoogleAnalytics/ContextProvider.tsx` - GA context provider
- `lib/GoogleAnalytics/hooks.ts` - GA hooks
- `lib/GoogleAnalytics/useGoogleAnalytics.ts` - GA hook implementation

### GA Configuration

```typescript
interface GAConfig {
  measurementId: string;
  debugMode: boolean;
  testMode: boolean;
}

const gaConfig: GAConfig = {
  measurementId: import.meta.env.VITE_GA_ID || '',
  debugMode: import.meta.env.DEV,
  testMode: false,
};
```

### GA Hooks

#### `useGoogleAnalytics()`

Provides GA functionality.

```typescript
interface GAHook {
  trackPageView: (path: string, title: string) => void;
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackTiming: (name: string, value: number) => void;
}

const { trackPageView, trackEvent, trackTiming } = useGoogleAnalytics();
```

#### `useTrackPageViewsInGA()`

Automatically tracks page views.

```typescript
const Component = () => {
  useTrackPageViewsInGA();

  return <div>Component content</div>;
};
```

### Event Tracking

#### Page Views

```typescript
trackPageView('/cv/en/experience', 'Experience - Hanna Gaudasińska-Zapaśnik');
```

#### Custom Events

```typescript
trackEvent('language_switch', {
  from_language: 'en',
  to_language: 'pl',
  page: '/cv/en/experience',
});

trackEvent('cv_download', {
  format: 'pdf',
  language: 'en',
});
```

#### Timing Events

```typescript
trackTiming('page_load', performance.now());
trackTiming('component_render', renderTime);
```

## Component APIs

### Common Components

#### `ErrorPage`

Displays error pages with navigation options.

```typescript
interface ErrorPageProps {
  error?: Error;
  resetError?: () => void;
}

<ErrorPage error={error} resetError={resetError} />
```

#### `Loading`

Shows loading state with spinner.

```typescript
interface LoadingProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

<Loading message="Loading..." size="medium" />
```

#### `Metadata`

Manages document head metadata.

```typescript
interface MetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

<Metadata
  title="Hanna Gaudasińska-Zapaśnik - CV"
  description="Software developer CV"
  keywords={['developer', 'react', 'typescript']}
/>
```

### Layout Components

#### `Menu`

Navigation menu with language switching.

```typescript
interface MenuProps {
  lang: I18nLang;
  onLanguageChange: (lang: I18nLang) => void;
}

<Menu lang={lang} onLanguageChange={setLang} />
```

#### `LangSwitcher`

Language switching component.

```typescript
interface LangSwitcherProps {
  currentLang: I18nLang;
  onLangChange: (lang: I18nLang) => void;
}

<LangSwitcher currentLang={lang} onLangChange={setLang} />
```

### Domain Components

#### `Personal`

Personal information section.

```typescript
interface PersonalProps {
  lang: I18nLang;
}

<Personal lang={lang} />
```

#### `Experience`

Work experience section.

```typescript
interface ExperienceProps {
  lang: I18nLang;
}

<Experience lang={lang} />
```

#### `Resume`

CV/Resume with print functionality.

```typescript
interface ResumeProps {
  lang: I18nLang;
}

<Resume lang={lang} />
```

## Utility Functions

### Date Utilities

#### `formatDate()`

Formats dates using date-fns.

```typescript
import { format } from 'date-fns';

const formatDate = (date: Date, formatString: string = 'MMM yyyy'): string => {
  return format(date, formatString);
};

// Usage
formatDate(new Date(), 'MMM yyyy'); // "Jan 2024"
formatDate(new Date(), 'yyyy-MM-dd'); // "2024-01-15"
```

### String Utilities

#### `capitalize()`

Capitalizes the first letter of a string.

```typescript
const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Usage
capitalize('hello world'); // "Hello world"
```

#### `slugify()`

Converts string to URL-friendly slug.

```typescript
const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Usage
slugify('Hello World!'); // "hello-world"
```

### Array Utilities

#### `groupBy()`

Groups array items by key.

```typescript
const groupBy = <T>(array: T[], key: keyof T): Record<string, T[]> => {
  return array.reduce(
    (groups, item) => {
      const group = String(item[key]);
      groups[group] = groups[group] || [];
      groups[group].push(item);
      return groups;
    },
    {} as Record<string, T[]>
  );
};

// Usage
const skills = [
  { category: 'frontend', name: 'React' },
  { category: 'frontend', name: 'Vue' },
  { category: 'backend', name: 'Node.js' },
];
groupBy(skills, 'category');
// { frontend: [...], backend: [...] }
```

## Type Definitions

### Core Types

#### `I18nLang`

```typescript
type I18nLang = 'en' | 'pl';
```

#### `Translations`

```typescript
interface Translations {
  [key: string]: {
    en: string;
    pl: string;
  };
}
```

#### `AppConfig`

```typescript
interface AppConfig {
  BASE_URL: string;
  VITE_HASH_ROUTER: boolean;
  VITE_LOCAL_PORT: string;
  VITE_LOCAL_SERVER_PORT: string;
  VITE_GA_ID?: string;
}
```

### Component Types

#### `ComponentProps`

```typescript
interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}
```

#### `ButtonProps`

```typescript
interface ButtonProps extends ComponentProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
```

### Domain Types

#### `ExperienceItem`

```typescript
interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  technologies: string[];
  achievements: string[];
}
```

#### `EducationItem`

```typescript
interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  gpa?: number;
  achievements: string[];
}
```

#### `SkillItem`

```typescript
interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  proficiency: 1 | 2 | 3 | 4 | 5;
  description?: string;
}
```

### Utility Types

#### `Optional<T, K>`

```typescript
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
```

#### `Required<T, K>`

```typescript
type Required<T, K extends keyof T> = T & Required<Pick<T, K>>;
```

#### `DeepPartial<T>`

```typescript
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
```
