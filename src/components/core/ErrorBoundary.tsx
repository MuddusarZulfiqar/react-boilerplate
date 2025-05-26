// src/components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from "react";
import { Box, Button, Typography, Container, Card } from "@mui/material";
import { motion } from "framer-motion";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { ErrorBoundaryProps, ErrorBoundaryState } from "@/types";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container
          maxWidth="sm"
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Card
            component={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            sx={{
              padding: 4,
              boxShadow: 3,
              backgroundColor: "background.paper",
            }}
          >
            <Box mb={3}>
              <ErrorOutlineIcon color="error" sx={{ fontSize: 80 }} />
            </Box>

            <Typography variant="h4" color="error" gutterBottom>
              Oops! Something went wrong.
            </Typography>

            <Typography variant="body1" color="text.secondary" mb={4}>
              {this.state.error?.message ||
                "An unexpected error has occurred. Please try again later."}
            </Typography>

            {/* Optional: You can add an image below instead of the icon */}
            {/* <Box mb={4}>
              <img
                src="/assets/error-illustration.svg"
                alt="Error Illustration"
                style={{ width: "100%", maxHeight: 250 }}
              />
            </Box> */}

            <Button
              variant="contained"
              onClick={this.handleReload}
              size="large"
            >
              Reload Page
            </Button>
          </Card>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
