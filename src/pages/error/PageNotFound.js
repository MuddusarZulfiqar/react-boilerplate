import { jsx as _jsx } from "react/jsx-runtime";
import usePageTitle from "@/hooks/usePageTitle";
function PageNotFound() {
    usePageTitle("Page Not Found");
    return _jsx("div", { children: "PageNotFound" });
}
export default PageNotFound;
