import { Outlet } from 'react-router-dom'

import { AdminHeader } from './components/admin-header'

export function AdminLayout() {
  return (
    <div className=" text-zinc-900 ">
      <AdminHeader />
      <Outlet />
    </div>
  )
}
