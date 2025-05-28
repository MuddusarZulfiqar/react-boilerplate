import { useEffect, useRef } from 'react';
/**
 * Tracks whether the component is currently mounted.
 * Useful to prevent state updates after unmounting.
 *
 * @returns A ref with `.current` as true (mounted) or false
 *
 * @example
 * const isMounted = useIsMounted();
 *
 * useEffect(() => {
 *   fetchData().then(() => {
 *     if (isMounted.current) {
 *       setData(response);
 *     }
 *   });
 * }, []);
 */
export function useIsMounted() {
    const isMounted = useRef(false);
    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}
