import { createBrowserRouter } from 'react-router-dom'

import { AdminLayout } from './pages/_layouts/admin'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { DonateLayout } from './pages/_layouts/donate'
import { ChooseCreate } from './pages/admin/create/choose-create'
import { CreateEvent } from './pages/admin/create/create-event/create-event'
import { Actions } from './pages/app/actions/actions'
import { ChooseDonation } from './pages/app/donate/choose-donetion'
import { Donation } from './pages/app/donate/donation/donation'
import { DonationSignUp } from './pages/app/donate/donation/donation-sign-up'
import { DonationSuccess } from './pages/app/donate/donation/donation-success'
import { MonetaryDonation } from './pages/app/donate/donation/monetary-donation'
import { OtherDonation } from './pages/app/donate/donation/other-donation'
import { Events } from './pages/app/events/events'
import { Home } from './pages/app/home/home'
import { Profile } from './pages/app/profile/profile'
import { Supporters } from './pages/app/supporters/supporters'
import { WhoWeAre } from './pages/app/who-we-are/who-we-are'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'

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
      { path: '/choose-donation', element: <ChooseDonation /> },
      {
        path: '/donate',
        element: <DonateLayout />,
        children: [
          { path: '/donate', element: <Donation /> },
          { path: '/donate/sign-up', element: <DonationSignUp /> },
          { path: '/donate/monetary', element: <MonetaryDonation /> },
          { path: '/donate/other', element: <OtherDonation /> },
          { path: '/donate/success', element: <DonationSuccess /> },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: 'create', element: <ChooseCreate /> },
      { path: 'create/create-event', element: <CreateEvent /> },
    ],
  },
])
