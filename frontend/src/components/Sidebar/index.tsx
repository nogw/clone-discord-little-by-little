import React from 'react';

import { 
  Container, 
  HeaderSidebar,
  ArrowDown,
  SubChats,
  UserContainer,
  IconMic,
  IconHeadset,
  IconCog,
} from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <HeaderSidebar>
        <h1>Guild</h1>
        <ArrowDown/>
      </HeaderSidebar>

      <SubChats/>

      <UserContainer>
        <img src="https://i.ytimg.com/vi/26QraleGyqc/maxresdefault.jpg" alt="user"/>
        <div className="texts">
          <h1>noge</h1>
          <p>noge #2124</p>
        </div>
        <IconMic />
        <IconHeadset />
        <IconCog />
      </UserContainer>
    </Container>
  );
}

export default Sidebar;