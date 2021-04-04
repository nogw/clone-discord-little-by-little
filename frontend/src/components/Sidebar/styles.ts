import styled, { css } from 'styled-components';
import { MdKeyboardArrowDown, MdMic, MdHeadset } from 'react-icons/md'
import { FaCog } from 'react-icons/fa'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 3rem 1fr 3.25rem;
  height: 100vh;
  width: 100%;
`;

export const IconProfile = styled.div`
  height: 32px;
  width: 32px;

  img {
    height: 24px;
    width: 24px;
    margin-right: 8px;
    margin-left: 4px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const HeaderSidebar = styled.div`
  background-color: #2E3036;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #222327;

  h1 {
    font-size: 1rem;
    height: 1rem;
    color: #fff;
  }
`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
  height: 1.4rem;
  width: 1.4rem;
  color: #fff;
`; 

export const SubChats = styled.div`
  background-color: #2E3036;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #292B2F;

  .texts {
    margin-right: auto;

    h1 {
      color: #fff;
      font-size: 0.9rem;
    }

    p {
      color: #B9BBBE;
      font-size: 0.8rem;
      text-transform: uppercase;
    }
  }
`;

const IconCss = css`
  height: 1.4rem;
  width: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #B9BBBE;
  margin: 4px;
`;

export const IconMic = styled(MdMic)`
  ${IconCss}
`;

export const IconHeadset = styled(MdHeadset)`
  ${IconCss}
`;

export const IconCog = styled(FaCog)`
  ${IconCss}
  height: 1.2rem;
  width: 1.2rem;
`;
