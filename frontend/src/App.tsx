import React, { useContext } from 'react';
import DiscordLayout from './components/DiscordLayout';
import Login from './components/Login';
import GlobalStyle from './styles/GlobalStyle';
import { Context } from './UserProvider'

function App() {
  const [user, setUser] = useContext(Context);

  return (
    <>
      {/* <DiscordLayout /> */}
      <Login/>
      <GlobalStyle />
    </>
  );
}

export default App;
