import { useState } from 'react'

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const tokenType = localStorage.getItem('token_type')
    const accessToken = localStorage.getItem('access_token')
    return !!tokenType && !!accessToken
  })

  const login = (tokenType, accessToken) => {
    localStorage.setItem('token_type', tokenType)
    localStorage.setItem('access_token', accessToken)
    setIsLoggedIn(true)
  }

  return { isLoggedIn, login }
}

export default useAuth
