// Create mui theme with custom colors
// https://material-ui.com/customization/default-theme/

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7d5edc",
    },
    secondary: {
      main: "#f50057",
    },
  },

  spacing: 8,
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    htmlFontSize: 16,
    pxToRem(value) {
      return `${value / 16}rem`;
    },
  },
});

export default theme;
