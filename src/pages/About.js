import { jsx as _jsx } from "react/jsx-runtime";
import usePageTitle from "@/hooks/usePageTitle";
function About() {
    usePageTitle("About Us");
    return _jsx("div", { children: "About" });
}
export default About;
