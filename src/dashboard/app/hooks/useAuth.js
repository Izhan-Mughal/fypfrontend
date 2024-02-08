import { useContext } from 'react'
import AuthContext from 'dashboard/app/contexts/JWTAuthContext'

const useAuth = () => useContext(AuthContext)

export default useAuth
