import { Box, Container, Paper, Typography } from '@mui/material'
import { Outlet } from 'react-router'

function AuthLayout() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: 'linear-gradient(to right, #667eea, #764ba2)',
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Welcome
          </Typography>
          <Outlet />
        </Paper>
      </Container>
    </Box>
  )
}

export default AuthLayout