import { useTheme } from '@mui/material/styles';
import useMediaQueryLib from '@mui/material/useMediaQuery';

/**
 * Hook to check if a media query matches the current screen.
 *
 * @param query - The media query string (e.g., '(max-width: 600px)')
 * @returns Boolean value indicating if query matches
 *
 * @example
 * const isSmallScreen = useMediaQuery('(max-width: 768px)');
 */
export function useMediaQuery(query: string): boolean {
  return useMediaQueryLib(query);
}

/**
 * Hook to detect if the screen is a mobile device (based on MUI theme).
 *
 * @returns Boolean indicating if screen is smaller than 'sm' breakpoint
 *
 * @example
 * const isMobile = useIsMobile();
 */
export function useIsMobile(): boolean {
  const theme = useTheme();
  return useMediaQueryLib(theme.breakpoints.down('sm'));
}
