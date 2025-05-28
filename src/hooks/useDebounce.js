import { useEffect, useState } from 'react';
/**
 * Debounces a value by a specified delay.
 * Useful for search inputs or slow API calls.
 *
 * @param value - The value to debounce
 * @param delay - Delay in milliseconds (default: 300ms)
 * @returns Debounced version of the value
 *
 * @example
 * const search = useDebounce(inputValue, 500);
 */
export function useDebounce(value, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);
    return debouncedValue;
}
