import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="flex h-screen items-center bg-zinc-900 ">
      <Outlet />
    </div>
  )
}
