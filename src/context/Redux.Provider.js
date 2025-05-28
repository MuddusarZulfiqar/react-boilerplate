import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
// src/context/Redux.Provider.tsx
import { useEffect, useState } from "react";
import { settings } from "@/constants";
const ReduxProviderWrapper = ({ children }) => {
    const [ReduxProvider, setReduxProvider] = useState(null);
    useEffect(() => {
        const loadRedux = async () => {
            if (settings.requireRedux) {
                const { Provider } = await import("react-redux");
                const { store } = await import("@/store");
                setReduxProvider(_jsx(Provider, { store: store, children: children }));
            }
            else {
                setReduxProvider(children);
            }
        };
        loadRedux();
    }, [children]);
    return _jsx(_Fragment, { children: ReduxProvider });
};
export default ReduxProviderWrapper;
