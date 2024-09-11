import { Navigate, Outlet } from 'react-router-dom'

import { isAdminAuthenticated } from '../../utils/auth-admin'
import { AdminHeader } from './components/admin-header'
import { AppFooter } from './components/app-footer'

export function AdminLayout() {
  return isAdminAuthenticated() ? (
    <div className="text-zinc-900">
      <AdminHeader />
      <Outlet />
      <AppFooter />
    </div>
  ) : (
    <Navigate to="/sign-in" />
  )
}
