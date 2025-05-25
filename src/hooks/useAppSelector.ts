import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

/**
 * Typed version of `useSelector` for Redux.
 * Ensures selected state matches the shape of your store.
 *
 * @example
 * const user = useAppSelector(state => state.auth.user);
 */
export const useAppSelector = useSelector.withTypes<RootState>();
