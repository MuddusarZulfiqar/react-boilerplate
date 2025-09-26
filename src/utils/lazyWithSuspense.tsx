import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense, ComponentType, LazyExoticComponent } from "react";

export function lazyWithSuspense<P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallback: React.ReactNode = <CircularProgress color="primary" size={24} />
): LazyExoticComponent<ComponentType<P>> {
  const Component = lazy(importFunc);

  const Wrapped: React.FC<P> = (props) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );

  return React.memo(Wrapped) as LazyExoticComponent<ComponentType<P>>;
}
