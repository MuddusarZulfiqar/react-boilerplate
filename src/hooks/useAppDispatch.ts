import { AppDispatch } from '@/types/store';
import { useDispatch } from 'react-redux';
import { settings } from '@/constants';

export const useAppDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();

  if (!settings.requireRedux) {
    // Return a wrapper that ignores dispatch
    return ((..._args: unknown[]) => {
      console.warn('Redux is disabled: dispatch ignored', ..._args);
      return undefined as unknown as AppDispatch;
    }) as AppDispatch;
  }

  return dispatch;
};
