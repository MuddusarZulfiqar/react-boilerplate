import '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonProps {
    gradient?: 'to-left' | 'to-right' | 'to-top' | 'to-bottom';
  }
}
