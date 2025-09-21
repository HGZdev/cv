import { useLocation } from 'react-router-dom';

import getConfig from '../../../../lib/config';
import { useLang } from '../../../../lib/i18n';

const { BASE_URL } = getConfig();

/**
 * Custom hook for checking if a route is currently active
 * @param path - The path to check against current location
 * @returns Boolean indicating if the route is active
 */
export const useActiveRoute = (path: string) => {
  const { pathname } = useLocation();
  const { lang } = useLang();

  return pathname === `${BASE_URL}/${lang}${path}`;
};
