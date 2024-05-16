import Routes from "./routes";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { config } from "@/constants";
import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import request from "./utils/request";
import Cookies from "js-cookie";
import {useAuth} from "@/providers/AuthProvider.jsx";
function App() {
  const {loading} = useAuth();

  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{config.APP_NAME}</title>
        <link rel="canonical" href="http://mysite.com/example" />
        {/* META DESCRIPTION TAG */}
        <meta name="description" content={config.APP_DESCRIPTION} />
        {/* META KEYWORD TAG */}
        <meta name="keywords" content={config.APP_KEYWORDS} />
        {/* favicon */}
        <link rel="icon" type="image/svg+xml" href={config.APP_FAVICON} />
        {/* META ROBOTS TAG */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      {loading ? (
        <>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: 9999,
            }}
          >
            <CircularProgress size="50px" />
          </div>
        </>
      ) : (
        <Suspense
          fallback={
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                zIndex: 9999,
              }}
            >
              <CircularProgress size="50px" />
            </div>
          }
        >
          <Routes />
        </Suspense>
      )}
    </div>
  );
}

export default App;
