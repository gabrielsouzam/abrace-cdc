import { useEffect, useRef } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'sonner'

import { isAdminAuthenticated } from '../../utils/auth-admin'
import { AdminHeader } from './components/admin-header'
import { AppFooter } from './components/app-footer'

export function AdminLayout() {
  const isAuthenticated = isAdminAuthenticated()
  const hasShownToast = useRef(false) // Variável para controlar se o toast já foi exibido

  useEffect(() => {
    if (!isAuthenticated && !hasShownToast.current) {
      toast.error('Você não possuí acesso a essa parte do sistema.')
      hasShownToast.current = true // Marca que o toast já foi exibido
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />
  }

  return (
    <div className="text-zinc-900">
      <AdminHeader />
      <Outlet />
      <AppFooter />
    </div>
  )
}
