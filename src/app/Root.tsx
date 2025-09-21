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
import { getConfig } from '../../lib/config';
import { GoogleAnalyticsProvider } from '../../lib/GoogleAnalytics';
import { I18nLang, I18nProvider } from '../../lib/i18n/index.tsx';
import ErrorPage from '../components/common/ErrorPage.tsx';
import Metadata from '../components/common/Metadata.tsx';
import ReactConsentBanner from '../components/common/ReactConsentBanner.tsx';
import WrapRoute from '../components/layout/WrapRoute.tsx';
import Education from '../domains/education/Education.tsx';
import Experience from '../domains/experience/Experience.tsx';
import Personal from '../domains/personal/Personal.tsx';
import Resume from '../domains/resume/Resume.tsx';
import Skills from '../domains/skills/Skills.tsx';
import { GlobalStyles } from '../styles';

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
        element={<Personal />}
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
