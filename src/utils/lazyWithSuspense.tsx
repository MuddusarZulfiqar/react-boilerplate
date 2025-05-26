// utils/lazyWithSuspense.tsx
import { CircularProgress } from '@mui/material'
import React, { lazy, Suspense, ComponentType, LazyExoticComponent } from 'react'

export function lazyWithSuspense<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback: React.ReactNode = <CircularProgress color="primary" size={24} />
): LazyExoticComponent<T> {
  const Component = lazy(importFunc)

  // Wrap the lazy-loaded component with Suspense
  const Wrapped = (props: React.ComponentProps<T>) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  )

  return React.memo(Wrapped) as unknown as LazyExoticComponent<T>
}
