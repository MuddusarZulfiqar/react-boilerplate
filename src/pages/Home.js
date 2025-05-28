import { jsx as _jsx } from "react/jsx-runtime";
import usePageTitle from "@/hooks/usePageTitle";
function HomeView() {
    usePageTitle("Home");
    return _jsx("div", { children: "Home" });
}
export default HomeView;
