import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./Pages/Public/ErrorPage.tsx";
import GlobalStyles from "../styles/GlobalStyles.ts";
import Metadata from "./AppComponents/Metadata.tsx";
import {GoogleAnalyticsProvider} from "../../lib/GoogleAnalytics";
import ReactConsentBanner from "./Components/ReactConsentBanner.tsx";
import Intro from "./Pages/Public/Intro.tsx";
import WrapRoute from "./Components/WrapRoute.tsx";
import getConfig from "./Components/getConfig.ts";
import Experience from "./Pages/Public/Experience.tsx";
import Education from "./Pages/Public/Education.tsx";
import Skills from "./Pages/Public/Skills.tsx";
import Resume from "./Pages/Public/Resume.tsx";

const {BASE_URL, VITE_HASH_ROUTER} = getConfig();

export const RoutesConfig = (
  <>
    <Route element={<WrapRoute />}>
      <Route path={`${BASE_URL}/`} element={<Intro />} />
      <Route path={`${BASE_URL}/skills`} element={<Skills />} />
      <Route path={`${BASE_URL}/experience`} element={<Experience />} />
      <Route path={`${BASE_URL}/education`} element={<Education />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
    <Route path={`${BASE_URL}/resume`} element={<Resume />} />
  </>
);

const routes = createRoutesFromElements(RoutesConfig);

// Hash router for GitHub Pages
const router =
  VITE_HASH_ROUTER === "true"
    ? createHashRouter(routes)
    : createBrowserRouter(routes);

const Root: React.FC = () => {
  if (!BASE_URL) throw new Error("root: BASE_URL is undefined");

  return (
    <>
      <Metadata />
      <GoogleAnalyticsProvider ConsentBanner={ReactConsentBanner}>
        <GlobalStyles />

        <RouterProvider router={router} future={{v7_startTransition: true}} />
      </GoogleAnalyticsProvider>
    </>
  );
};

export default Root;
