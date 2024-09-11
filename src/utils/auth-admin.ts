import Cookies from 'js-cookie'
import { JwtPayload } from 'jsonwebtoken'
import { jwtDecode } from 'jwt-decode'

interface CustomJwtPayload extends JwtPayload {
  userId?: string
  userRole?: string
}

export const isAdminAuthenticated = (): boolean => {
  const token = Cookies.get('authToken')

  if (!token) {
    return false
  }

  try {
    const decodedToken = jwtDecode<CustomJwtPayload>(token)
    const currentTime = Date.now() / 1000

    if (decodedToken.exp && decodedToken.exp < currentTime) {
      return false
    }

    console.log(decodedToken)

    if (decodedToken.userRole === 'user') {
      return false
    }

    return true
  } catch (error) {
    return false
  }
}
