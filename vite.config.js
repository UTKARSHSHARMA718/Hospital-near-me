import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv("development", process.cwd(), "");
  console.log({ mode });
  console.log({ clientId1: env?.REACT_APP_GOOGLE_CLIENT_ID });
  console.log({ clientId2: process?.env?.REACT_APP_GOOGLE_CLIENT_ID });
  console.log({ envJson: JSON.stringify(env) });
  return {
    // define: {
    //   "process.env.REACT_APP_GOOGLE_CLIENT_ID": JSON.stringify(
    //     env.REACT_APP_GOOGLE_CLIENT_ID
    //   ),
    //   "process.env.REACT_APP_GEOAPIFY_API_KEY": JSON.stringify(
    //     env.REACT_APP_GEOAPIFY_API_KEY
    //   ),
    //   "process.env.REACT_APP_GOOGLE_MAP_API_KEY": JSON.stringify(
    //     env.REACT_APP_GOOGLE_MAP_API_KEY
    //   ),
    // },
    plugins: [react()], 
    define: {
      "process.env": JSON.stringify(env), // This line is necessary to avoid errors in browser environment
    },
    envDir: ".",
  };
});
