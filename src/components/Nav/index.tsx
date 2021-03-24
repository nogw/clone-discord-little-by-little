import React from 'react';

import { 
  Container, 
  ChatIcon, 
  Separator, 
  HeaderIcon,
  IconPlus,
  IconSearch,
} from './styles';

const Nav: React.FC = () => {
  return (
    <Container>
      <HeaderIcon />
      <Separator />
      <ChatIcon>
        <IconSearch className="icon"/>
      </ChatIcon>
      <ChatIcon>
        <IconPlus className="icon"/>
      </ChatIcon>
    </Container>
  );
}

export default Nav;