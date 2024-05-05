import Routes from "@/routes";
import {Suspense, useEffect} from "react";
import {Helmet} from "react-helmet";
import {config} from "@/constants";
import {CircularProgress} from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import {getMe} from "@/services/user/index.js";

function App() {
    useEffect(() => {
        document.title = config.APP_NAME;
    }, []);

    const {loading, refetch} = useQuery({
        queryKey: ['user'],
        queryFn: getMe,
        enabled: false
    });


    useEffect(() => {
        if (localStorage.getItem('token')) {
            refetch()
        }
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
                        <CircularProgress size="50px"/>
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
                            <CircularProgress size="50px"/>
                        </div>
                    }
                >
                    <Routes/>
                </Suspense>
            )}
        </div>
    );
}

export default App;
