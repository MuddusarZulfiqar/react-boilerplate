import { jsx as _jsx } from "react/jsx-runtime";
import usePageTitle from "@/hooks/usePageTitle";
function UserDashboard() {
    usePageTitle("User Dashboard");
    return _jsx("div", { children: "UserDashboard" });
}
export default UserDashboard;
