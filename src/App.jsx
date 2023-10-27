import { useAuth } from "./providers/authProvider";
import Routes from "./routes";
import "./App.scss";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { config } from "@/constants";
import { CircularProgress } from "@mui/material";

function App() {
  const [loading, setLoading] = useState(true);
  const { setUser } = useAuth();
  useEffect(() => {
    document.title = config.APP_NAME;
  }, []);
  useEffect(() => {
    if (window) {
      setLoading(true);
      if (localStorage.getItem("token")) {
        setUser({
          user: {
            name: "John Doe",
            email: "test@gmail.com",
            role: "admin",
          },
          token: "1234567890",
        });
      }
      setLoading(false);
    }
  }, []);
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
        <Routes />
      )}
    </div>
  );
}

export default App;
