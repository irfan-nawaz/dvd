import { createContext, useState } from 'react'

export const DateContext = createContext()

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <DateContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </DateContext.Provider>
  )
}
