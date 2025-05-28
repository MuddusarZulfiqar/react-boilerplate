import { useEffect } from "react";
import { settings } from "@/constants";
const usePageTitle = (pageName) => {
    useEffect(() => {
        const appName = settings.appName || "My App";
        document.title = pageName ? `${pageName} - ${appName}` : appName;
    }, [pageName]);
};
export default usePageTitle;
