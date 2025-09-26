import { RootState } from '@/types/store';
import { useSelector } from 'react-redux';
import { settings } from '@/constants';

/**
 * Safe version of `useSelector` that always calls the hook
 * but returns `undefined` if Redux is disabled.
 */
export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected
): TSelected | undefined => {
  const value = useSelector((state: RootState) => selector(state));

  if (!settings.requireRedux) {
    console.warn('Redux is disabled: selector skipped');
    return undefined;
  }

  return value;
};
