import { RouterProvider } from 'react-router'
import { router } from '@/routes'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-center"
        // add duration global
        toastOptions={{
          duration:4000
        }}
      />
    </>
  )
}

export default App
