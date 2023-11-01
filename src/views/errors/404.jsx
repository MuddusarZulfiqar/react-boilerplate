import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { PropTypes } from "prop-types";

function PageNotFound({ height }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: height ? `calc(100vh - ${height}px)` : "100vh",
      }}
    >
      <Typography variant="h1">404 Page Not Found!</Typography>
    </Box>
  );
}

export default PageNotFound;

PageNotFound.propTypes = {
  height: PropTypes.string,
};
