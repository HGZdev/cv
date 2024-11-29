import {loadEnv} from "vite";

/** Load environment variables based on the mode */
export const getViteConfig = (
  mode: "development" | "production" | "test"
): ImportMetaEnv => {
  if (!mode) throw new Error("getViteConfig: mode is undefined");
  return loadEnv(mode, process.cwd()) as ImportMetaEnv;
};
