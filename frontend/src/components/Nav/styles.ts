import styled, { css } from 'styled-components';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'

export const Container = styled.div`
  background-color: #202225;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0px;
`;

const NavIconCss = css`
  background-color: #36393F;
  transition: all 300ms ease;
  
  cursor: pointer;
  
  margin: 3px;
  height: 3rem;
  width: 3rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
`; 

const DefaultIcon = css`
  color: #43B581;
  font-size: 24px;
  transition: all 300ms ease;
`;

export const HeaderIcon = styled.div`
  ${NavIconCss}
  border-radius: 10px;
`;

export const ChatIcon = styled.div`
  ${NavIconCss}
  border-radius: 50%;

  &:hover {
    border-radius: 10px;
    background-color: #768AD4;
    transform: scale(0.8);
  } 

  &:hover > .icon {
    color: #202225;
  }
`;

export const Separator = styled.div`
  width: 32px;
  background-color: #060607;
  opacity: 0.25;
  margin: 6px;
  height: 1px;
`;

export const IconSearch = styled(AiOutlinePlus)`
  ${DefaultIcon}  
`;

export const IconPlus = styled(AiOutlineSearch)`
  ${DefaultIcon}
`;