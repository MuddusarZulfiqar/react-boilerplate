import { jsx as _jsx } from "react/jsx-runtime";
import usePageTitle from "@/hooks/usePageTitle";
function NotFound() {
    usePageTitle("Not Found");
    return _jsx("div", { children: "NotFound" });
}
export default NotFound;
