import { Box, Container, Paper, Typography } from "@mui/material";
import { Outlet, useLocation } from "react-router";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "@/constants";

function AuthLayout() {
  const { pathname } = useLocation();

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: "linear-gradient(to right, #667eea, #764ba2)",
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Welcome
          </Typography>
          <motion.div
            key={pathname}
            initial="initial"
            animate="in"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Outlet />
          </motion.div>
        </Paper>
      </Container>
    </Box>
  );
}

export default AuthLayout;
