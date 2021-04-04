import React, { useContext } from 'react';
import DiscordLayout from './components/DiscordLayout';
import Login from './components/Login';
import GlobalStyle from './styles/GlobalStyle';
import { Context } from './UserProvider'
import dotenv from 'dotenv'
dotenv.config()

function App() {
  const [user, setUser] = useContext(Context);

  return (
    <>
      {/* <DiscordLayout /> */}
      {
        user ? (
          <DiscordLayout />
        ) : (  
          <Login/>
        )
      }
      {/* <DiscordLayout/> */}
      <GlobalStyle />
    </>
  );
}

export default App;
