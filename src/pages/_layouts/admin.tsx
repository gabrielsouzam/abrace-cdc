import { Outlet } from 'react-router-dom'

import { AppFooter } from './components/app-footer'
import { AppHeaderAdmin } from './components/app-header-admin'

export function AdminLayout() {
  return (
    <div className=" text-zinc-900 ">
      <AppHeaderAdmin />
      <Outlet />
      <AppFooter />
    </div>
  )
}
