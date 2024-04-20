import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv("development", process.cwd(), "");
  console.log({ mode });
  console.log({ clientId1: env?.REACT_APP_GOOGLE_CLIENT_ID });
  console.log({ clientId2: process?.env?.REACT_APP_GOOGLE_CLIENT_ID });
  return {
    define: {
      "process.env.REACT_APP_GOOGLE_CLIENT_ID": JSON.stringify(
        env.REACT_APP_GOOGLE_CLIENT_ID
      ),
      "process.env.REACT_APP_GEOAPIFY_API_KEY": JSON.stringify(
        env.REACT_APP_GEOAPIFY_API_KEY
      ),
      "process.env.REACT_APP_GOOGLE_MAP_API_KEY": JSON.stringify(
        env.REACT_APP_GOOGLE_MAP_API_KEY
      ),
    },
    plugins: [react()],
  };
});
