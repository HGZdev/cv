import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { GoogleAnalyticsContext } from './ContextProvider';

export const useGoogleAnalytics = () => {
  const context = useContext(GoogleAnalyticsContext);
  if (!context) {
    throw new Error(
      'useGoogleAnalytics must be used within a GoogleAnalyticsProvider'
    );
  }
  return context;
};

export const useTrackPageViewsInGA = () => {
  const location = useLocation();
  const { logPageView } = useGoogleAnalytics();

  useEffect(() => {
    const currentPath = location.pathname + location.search;
    logPageView(currentPath);
  }, [location, logPageView]);
};
