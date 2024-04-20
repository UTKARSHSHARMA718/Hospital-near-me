import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_GOOGLE_CLIENT_ID": JSON.stringify(
        env.REACT_APP_GOOGLE_CLIENT_ID
      ),
      "process.env.REACT_APP_GOOGLE_CLIENT_SECRET": JSON.stringify(
        env.REACT_APP_GOOGLE_CLIENT_SECRET
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
