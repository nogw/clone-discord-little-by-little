import React, { useState, ReactNode } from 'react'

interface AppContextInterface {
  message: string,
  token: string
}

export const Context = React.createContext<AppContextInterface | null>(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  
  return (
    <Context.Provider value={[user, setUser]}>
      {children}
    </Context.Provider>
  )
}

export default UserProvider