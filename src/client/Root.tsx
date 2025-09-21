import React from 'react';
import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';

import translations from '../../data/translations.ts';
import { GoogleAnalyticsProvider } from '../../lib/GoogleAnalytics';
import { I18nLang, I18nProvider } from '../../lib/i18n/index.tsx';
import GlobalStyles from '../styles/GlobalStyles.ts';
import Metadata from './AppComponents/Metadata.tsx';
import getConfig from './Components/getConfig.ts';
import ReactConsentBanner from './Components/ReactConsentBanner.tsx';
import WrapRoute from './Components/WrapRoute.tsx';
import Education from './Pages/Public/Education.tsx';
import ErrorPage from './Pages/Public/ErrorPage.tsx';
import Experience from './Pages/Public/Experience.tsx';
import Intro from './Pages/Public/Intro.tsx';
import Resume from './Pages/Public/Resume.tsx';
import Skills from './Pages/Public/Skills.tsx';

const { BASE_URL, VITE_HASH_ROUTER } = getConfig();

const GlobalRoutes = (defaultLang: I18nLang) => (
  <>
    <Route path='/' element={<Navigate to={`${BASE_URL}/${defaultLang}/`} />} />
    <Route
      path='/cv'
      element={<Navigate to={`${BASE_URL}/${defaultLang}/`} />}
    />
    <Route path='*' element={<ErrorPage />} />
  </>
);

const LangSpecificRoutes = (lang: I18nLang) => (
  <>
    <Route id={`wrap-${lang}`} element={<WrapRoute />}>
      <Route
        id={`intro-${lang}`}
        path={`${BASE_URL}/${lang}/`}
        element={<Intro />}
      />
      <Route
        id={`skills-${lang}`}
        path={`${BASE_URL}/${lang}/skills`}
        element={<Skills />}
      />
      <Route
        id={`experience-${lang}`}
        path={`${BASE_URL}/${lang}/experience`}
        element={<Experience />}
      />
      <Route
        id={`education-${lang}`}
        path={`${BASE_URL}/${lang}/education`}
        element={<Education />}
      />
    </Route>
    <Route
      id={`resume-${lang}`}
      path={`${BASE_URL}/${lang}/resume`}
      element={<Resume />}
    />
    <Route
      id={`error-${lang}`}
      path={`${BASE_URL}/${lang}/*`}
      element={<ErrorPage />}
    />
  </>
);

export const createRoutes = (langs: I18nLang[], defaultLang: I18nLang) => {
  const globalRoutes = createRoutesFromElements(GlobalRoutes(defaultLang));
  const langRoutes = langs
    .map(lang => createRoutesFromElements(LangSpecificRoutes(lang)))
    .flat();
  return [...globalRoutes, ...langRoutes];
};

const Root: React.FC = () => {
  const availableLangs: I18nLang[] = ['en', 'pl'];
  const defaultLang = 'en';

  const currentLang =
    availableLangs.find(lang =>
      window.location.pathname.startsWith(`${BASE_URL}/${lang}`)
    ) ?? defaultLang;

  if (BASE_URL === undefined) throw new Error('root: BASE_URL is undefined');

  const allRoutes = createRoutes(availableLangs, defaultLang);
  const router =
    VITE_HASH_ROUTER === 'true'
      ? createHashRouter(allRoutes)
      : createBrowserRouter(allRoutes);

  return (
    <I18nProvider
      translations={translations}
      langs={availableLangs}
      defaultLang={currentLang}
    >
      <Metadata />
      <GoogleAnalyticsProvider ConsentBanner={ReactConsentBanner}>
        <GlobalStyles />
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </GoogleAnalyticsProvider>
    </I18nProvider>
  );
};

export default Root;
