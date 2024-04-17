import React, { useContext } from "react";
import { RxAvatar } from "react-icons/rx";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import { COMPANY_NAME, USER_CREDENTIAL } from "../../constants/const";
import { GlobalContext } from "../../Context/GlobalContext";
import styles from "./Login.module.css";

const Login = () => {
  const globalContext = useContext(GlobalContext);
  const { setGlobalState } = globalContext;

  const setCredentials = (credentials) => {
    const userData = jwtDecode(credentials);
    setGlobalState((prev) => {
      return {
        ...prev,
        user: userData,
      };
    });
    localStorage?.setItem(USER_CREDENTIAL, credentials);
  };
  return (
    <div className={styles.container}>
      <RxAvatar size={60} />
      <div>
        <p>Login to {COMPANY_NAME}</p>
      </div>
      <div className={styles.buttonContainer}>
          <GoogleLogin
            onSuccess={(credentialResponse) =>
              setCredentials(credentialResponse?.credential)
            }
            onError={() => {
              console.log("Login Failed");
            }}
          />
      </div>
    </div>
  );
};

export default Login;
