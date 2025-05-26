// src/theme/typography.ts
import { TypographyVariantsOptions } from '@mui/material/styles';

const typography: TypographyVariantsOptions = {
  fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
  h1: {
    fontSize: 32,
    fontWeight: 600,
  },
  body1: {
    fontSize: 16,
  },
  body2: {
    fontSize: 14,
  },
  button: {
    fontSize: 14,
    textTransform: 'uppercase',
  },
};

export default typography;
