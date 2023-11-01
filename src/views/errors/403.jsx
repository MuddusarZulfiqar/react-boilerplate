// create a component that will be used to render a 403 page using mui
import { Box, Typography } from "@mui/material";

function Forbidden() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1">403 Forbidden!</Typography>
    </Box>
  );
}

export default Forbidden;
