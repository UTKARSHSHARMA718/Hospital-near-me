import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { router } from "./config.jsx";
import "./index.css";
import GlobalProvider from "./Context/GlobalContext.jsx";

const id =
"738768187644-gahr3g1mo75ck1epa91h32v5hla7j8ch.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={id}>
      <GlobalProvider>
        <RouterProvider {...{ router }} />
      </GlobalProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
