import React from "react";
import { Outlet, useLocation } from "react-router";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "@/constants";
import { Box, Container } from "@mui/material";
import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";
function PublicLayout() {
  const { pathname } = useLocation();
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Optional Header */}
      <PublicHeader />

      {/* Main Content */}
      <Box component="main" flexGrow={1} py={4}>
        <Container maxWidth="lg">
          <motion.div
            key={pathname}
            initial="initial"
            animate="in"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Outlet />
          </motion.div>
        </Container>
      </Box>

      {/* Footer */}
      <PublicFooter />
    </Box>
  );
}

export default PublicLayout;
