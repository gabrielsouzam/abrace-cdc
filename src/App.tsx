import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Toaster richColors theme="dark" />
      <Helmet titleTemplate="%s | Casa de caridade" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
