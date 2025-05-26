// src/components/layout/PublicHeader.tsx
import { useAuth } from "@/hooks";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { NavLink } from "react-router";

const PublicHeader = () => {
  const { user } = useAuth();
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        <Box display="flex" gap={2}>
          <Button component={NavLink} to="/" color="inherit">
            Home
          </Button>
          <Button component={NavLink} to="/about" color="inherit">
            About
          </Button>
          <Button component={NavLink} to="/contact" color="inherit">
            Contact
          </Button>
          {user ? (
            <Button component={NavLink} to="/dashboard" color="inherit">
              Dashboard
            </Button>
          ) : (
            <Button component={NavLink} to="/auth/login" color="inherit">
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default PublicHeader;
