import React from 'react';

import { 
  Container,
  HeaderChat,
  InputChat,
  IconHashtag,
  IconNotification,
  IconPin,
  IconGroup,
  IconAtSign,
  MessagesChat,
  IconQuestion,
  IconSearch,
  IconPlus,
} from './styles';

const Chat: React.FC = () => {
  return (
    <Container>
      <HeaderChat>
        <IconHashtag />
        <h1>general</h1>
        <IconNotification />
        <IconPin />
        <IconGroup />
        <div className="input">
          <input type="text" placeholder="Search"/>
          <IconSearch className="icon"/>
        </div>
        <IconAtSign />
        <IconQuestion />
      </HeaderChat>
      <MessagesChat />
      <InputChat>
        <div className="input">
          <IconPlus/>
          <input type="text" placeholder="Message #general"/>
        </div>
      </InputChat>
    </Container>
  );
}

export default Chat;