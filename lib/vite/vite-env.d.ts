interface ImportMetaEnv {
  readonly VITE_JWT_SECRET: string;
  readonly VITE_GA_TOKEN: string;

  readonly VITE_APP_NAME: string;
  readonly VITE_APP_DESC: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_GRAPHQL_DIR: string;
  readonly VITE_HASH_ROUTER: string;

  readonly VITE_LOCAL_PORT: string;
  readonly VITE_LOCAL_HOST_URL: string;
  readonly VITE_PROD_HOST_URL: string;
  readonly VITE_LOCAL_SERVER_PORT: string;
  readonly VITE_TEST: string;

  readonly VITE_PERSONAL_EMAIL: string;
  readonly VITE_PERSONAL_TEL: string;
  readonly VITE_PERSONAL_GITHUB: string;
  readonly VITE_PERSONAL_LINKEDIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
