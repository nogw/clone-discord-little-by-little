import React from 'react';
import Chat from '../Chat';
import Nav from '../Nav';
import Sidebar from '../Sidebar';

import { Container } from './styles';

const DiscordLayout: React.FC = () => {
  return (
    <Container>
      <Nav />
      <Sidebar />
      <Chat />
    </Container>
  );
}

export default DiscordLayout;