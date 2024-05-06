import Routes from "@/routes";
import {Suspense, useEffect} from "react";
import {Helmet} from "react-helmet";
import {config} from "@/constants";
import {CircularProgress} from "@mui/material";
import useAuth from "@/hooks/useAuth.js";

function App() {
    useEffect(() => {
        document.title = config.APP_NAME;
        setTimeout(() => {
            document.querySelector("#loader").classList.add("loaded");
        }, 2000);
    }, []);



    return (
        <div className="app">
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{config.APP_NAME}</title>
                <link rel="canonical" href="http://mysite.com/example"/>
                {/* META DESCRIPTION TAG */}
                <meta name="description" content={config.APP_DESCRIPTION}/>
                {/* META KEYWORD TAG */}
                <meta name="keywords" content={config.APP_KEYWORDS}/>
                {/* favicon */}
                <link rel="icon" type="image/svg+xml" href={config.APP_FAVICON}/>
                {/* META ROBOTS TAG */}
                <meta name="robots" content="index, follow"/>
            </Helmet>
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
                        <CircularProgress size="50px"/>
                    </div>
                }
            >
                <Routes />
            </Suspense>
        </div>
    );
}

export default App;
