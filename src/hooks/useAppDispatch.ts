import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';

/**
 * Typed version of `useDispatch` for Redux.
 * Ensures the dispatch function supports thunk and async actions.
 *
 * @returns The Redux `dispatch` function with correct typing
 *
 * @example
 * const dispatch = useAppDispatch();
 * dispatch(fetchUser());
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
