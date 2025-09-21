import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { vi } from 'vitest';

// Mock localStorage
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: vi.fn(() => null),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  },
  writable: true,
});

import translations from '../../../../../data/translations';
import { GoogleAnalyticsProvider } from '../../../../../lib/GoogleAnalytics';
import { I18nLang, I18nProvider } from '../../../../../lib/i18n';
import { createRoutes } from '../../../Root';
import { GlobalStyles } from '../../../styles';

// Mock the config module
vi.mock('../../../../../lib/config', () => ({
  getConfig: () => ({
    BASE_URL: '/cv',
    VITE_BASE_URL: '/cv',
    VITE_HASH_ROUTER: 'false',
    VITE_GA_TOKEN: 'G-XXXXXXXXXX', // Mock GA token for testing
  }),
}));

// Mock ConsentBanner component for testing
const MockConsentBanner = () => null;

export const renderMockRoot = ({
  langs = ['en', 'pl'],
  defaultLang = 'en',
  initialEntries = ['/cv/en/'],
}: {
  langs?: I18nLang[];
  defaultLang?: I18nLang;
  initialEntries?: string[];
} = {}) => {
  // Generate the routes dynamically using the createRoutes function
  const routes = createRoutes(langs, defaultLang);

  // Create a memory router for testing
  const router = createMemoryRouter(routes, {
    initialEntries,
    initialIndex: 0,
  });

  // Render the component tree with all necessary providers
  const renderResult = render(
    <I18nProvider
      translations={translations}
      langs={langs}
      defaultLang={defaultLang}
    >
      <GoogleAnalyticsProvider ConsentBanner={MockConsentBanner}>
        <GlobalStyles />
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </GoogleAnalyticsProvider>
    </I18nProvider>
  );
  // supposedly the only way to get current location for Data Router v6 in tests https://stackoverflow.com/a/73730116
  return { ...renderResult, router };
};
