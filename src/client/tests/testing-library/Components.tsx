import { render } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { I18nLang } from '../../../../lib/i18n';
import { createRoutes } from '../../Root';
import { GlobalStyles } from '../../styles';

export const renderMockRoot = ({
  langs = ['en', 'pl'],
  defaultLang = 'en',
  initialEntries = ['/'],
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

  // Render the component tree with the router
  const renderResult = render(
    <>
      <GlobalStyles />
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </>
  );
  // supposedly the only way to get current location for Data Router v6 in tests https://stackoverflow.com/a/73730116
  return { render: renderResult, router };
};
