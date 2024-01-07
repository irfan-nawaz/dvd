import { createContext, useState } from 'react'

export const DateCon = createContext({ isLoggedIn: false })

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <DateCon.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </DateCon.Provider>
  )
}
