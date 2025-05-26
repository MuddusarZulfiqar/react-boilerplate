import { RouterProvider } from 'react-router'
import { router } from '@/routes'
import { Toaster } from 'react-hot-toast'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '@/theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-center"
        // add duration global
        toastOptions={{
          duration:4000
        }}
      />
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
