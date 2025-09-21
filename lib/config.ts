const getConfig = () => {
  const { VITE_BASE_URL, VITE_HASH_ROUTER } = import.meta.env;
  const BASE_URL = VITE_HASH_ROUTER ? '' : VITE_BASE_URL ? VITE_BASE_URL : '';

  return {
    ...import.meta.env,
    BASE_URL,
  };
};

export default getConfig;
