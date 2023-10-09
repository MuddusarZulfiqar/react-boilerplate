import AuthProvider from "./providers/authProvider";
import Routes from "./routes";
import "./App.scss";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { config } from "@/constants";
function App() {
  useEffect(() => {
    document.title = "React App";
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
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
