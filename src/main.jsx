import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import GlobalProvider from "./Context/GlobalContext.jsx";
import { router } from "./config.jsx";
import { REACT_APP_GOOGLE_CLIENT_ID } from "../credentials.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode> // Commented this peace of code in-order to get rid of the issue of Map's markers re-positioning themself
  <GoogleOAuthProvider clientId={process?.env?.REACT_APP_GOOGLE_CLIENT_ID}>
    <GlobalProvider>
      <RouterProvider {...{ router }} />
    </GlobalProvider>
  </GoogleOAuthProvider>
  // </React.StrictMode>
);
