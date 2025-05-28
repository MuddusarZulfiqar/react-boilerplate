import { useDispatch } from 'react-redux';
import { settings } from '@/constants';
/**
 * Safe version of `useDispatch` that returns a no-op dispatch if Redux is disabled.
 */
export const useAppDispatch = () => {
    if (!settings.requireRedux) {
        // Return a no-op function to avoid crashes
        return (() => {
            console.warn('Redux is disabled: dispatch ignored');
        });
    }
    return useDispatch();
};
