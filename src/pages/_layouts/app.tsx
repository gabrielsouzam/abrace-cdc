import { Outlet } from 'react-router-dom'

import { AppHeader } from './components/app-header'

export function AppLayout() {
  return (
    <div className="mb-24 text-zinc-50 ">
      <AppHeader />
      <Outlet />
    </div>
  )
}
