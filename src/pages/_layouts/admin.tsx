import { Outlet } from 'react-router-dom'

import { AdminHeader } from './components/admin-header'
import { AppFooter } from './components/app-footer'


export function AdminLayout() {
  return (
    <div className=" text-zinc-900 ">
      <AdminHeader />
      <Outlet />
      <AppFooter />
    </div>
  )
}
