import { jsx as _jsx } from "react/jsx-runtime";
// utils/lazyWithSuspense.tsx
import { CircularProgress } from '@mui/material';
import React, { lazy, Suspense } from 'react';
export function lazyWithSuspense(importFunc, fallback = _jsx(CircularProgress, { color: "primary", size: 24 })) {
    const Component = lazy(importFunc);
    // Wrap the lazy-loaded component with Suspense
    const Wrapped = (props) => (_jsx(Suspense, { fallback: fallback, children: _jsx(Component, { ...props }) }));
    return React.memo(Wrapped);
}
