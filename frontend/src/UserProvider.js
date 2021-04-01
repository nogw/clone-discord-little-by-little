import React, { useState } from 'react'

export const Context = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  
  return (
    <Context.Provider value={[ user, setUser ]}>
      {children}
    </Context.Provider>
  )
}

export default UserProvider