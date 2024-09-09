import { Outlet } from 'react-router-dom'

export function CreateLayout() {
  return (
    <div className="flex flex-col items-center">
      <Outlet />
    </div>
  )
}
