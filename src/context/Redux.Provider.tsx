// src/context/Redux.Provider.tsx
import { ReactNode, useEffect, useState } from "react";
import { settings } from "@/constants";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/store";

const ReduxProviderWrapper = ({ children }: { children: ReactNode }) => {
  const [ReduxProvider, setReduxProvider] = useState<React.ReactNode>(null);

  useEffect(() => {
    const loadRedux = async () => {
      if (settings.requireRedux) {
        const { Provider } = await import("react-redux");
        const { store } = await import("@/store");
        setReduxProvider(
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {children}
            </PersistGate>
          </Provider>
        );
      } else {
        setReduxProvider(children);
      }
    };

    loadRedux();
  }, [children]);

  return <>{ReduxProvider}</>;
};

export default ReduxProviderWrapper;
