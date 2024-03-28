import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Actions } from './pages/app/actions/actions'
import { Donate } from './pages/app/donate/donete'
import { Events } from './pages/app/events/events'
import { Home } from './pages/app/home/home'
import { Profile } from './pages/app/profile/profile'
import { Supporters } from './pages/app/supporters/supporters'
import { WhoWeAre } from './pages/app/who-we-are/who-we-are'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/who-we-are', element: <WhoWeAre /> },
      { path: '/actions', element: <Actions /> },
      { path: '/events', element: <Events /> },
      { path: '/supporters', element: <Supporters /> },
      { path: '/profile', element: <Profile /> },
      { path: '/donate', element: <Donate /> },
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/sign-in', element: <SignIn /> }],
  },
])
