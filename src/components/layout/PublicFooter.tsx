// src/components/layout/PublicFooter.tsx
import { Box, Typography } from "@mui/material";

const PublicFooter = () => {
  return (
    <Box component="footer" py={2} textAlign="center" bgcolor="grey.100">
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </Typography>
    </Box>
  );
};

export default PublicFooter;
