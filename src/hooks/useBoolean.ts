import { useCallback, useState } from 'react';

/**
 * A simple toggle hook for booleans.
 * Useful for UI toggles like modals, drawers, etc.
 *
 * @param initial - Initial boolean state (default: false)
 * @returns An object with the current value and toggle/set helpers
 *
 * @example
 * const { value: isOpen, toggle, setTrue, setFalse } = useBoolean();
 */
export function useBoolean(initial = false) {
  const [value, setValue] = useState(initial);

  const toggle = useCallback(() => setValue(v => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, toggle, setTrue, setFalse };
}
