import { Outlet } from 'react-router-dom'

import { AppHeader } from './components/app-header'

export function AppLayout() {
  return (
    <div className=" text-zinc-900 ">
      <AppHeader />
      <Outlet />
    </div>
  )
}
