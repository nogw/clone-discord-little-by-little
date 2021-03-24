import styled, { css } from 'styled-components';
import { RiGroupFill, RiPushpinFill } from 'react-icons/ri'
import { MdNotifications } from 'react-icons/md'
import { HiHashtag } from 'react-icons/hi'
import { FiAtSign } from 'react-icons/fi'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { HiPlusCircle } from 'react-icons/hi'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 3rem 1fr 4rem;
  height: 100vh;
  width: 100%;
`;

export const HeaderChat = styled.div`
  background-color: #37393F;
  border-bottom: 1px solid #303239;
  display: flex;
  place-items: center;
  padding: 0px 12px;

  h1 {
    font-size: 1rem;
    height: 1rem;
    color: #fff;
    margin-right: auto;
  }

  .input {
    position: relative;
    display: flex;
    align-items: center;

    input {
      background-color: #202225;
      border: none;
      outline: none;
      padding: 6px 25px 6px 10px;
      margin: 0px 12px;
      width: 9rem;
      border-radius: 4px;
      color: #6F737A;

      &::placeholder {
        color: #6F737A;
        opacity: 1;
        font-weight: bold;
      }
    }
  }
`;

export const IconSearch = styled(FaSearch)`
  color: #6F737A;
  position: absolute;
  right: 20px;
  font-size: 0.8rem;
`;

export const MessagesChat = styled.div`
  background-color: #37393F;
`;

const IconCss = css`
  height: 1.3rem;
  width: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #B9BBBE;
  margin: 4px;
`;

export const IconGroup = styled(RiGroupFill)`
  ${IconCss}
  height: 1.1rem;
  width: 1.1rem;
`;

export const IconPin = styled(RiPushpinFill)`
  ${IconCss}
`;

export const IconNotification = styled(MdNotifications)`
  ${IconCss}
`;

export const IconHashtag = styled(HiHashtag)`
  ${IconCss}
`;

export const IconQuestion  = styled(BsFillQuestionCircleFill)`
  ${IconCss}
  height: 1rem;
  width: 1rem;
`;

export const IconAtSign = styled(FiAtSign)`
  ${IconCss}
  height: 1.1rem;
  width: 1.1rem;
`;

export const InputChat = styled.div`
  background-color: #37393F;
  display: flex;
  align-items: center;
  padding: 15px;

  .input {
    display: flex;
    place-items: center;
    width: 100%;

    input {
      color: #fff;
      height: 2.75rem;
      background-color: #40444B;
      border: none;
      padding: 12px;
      outline: none;
      font-size: 1rem;
      width: 100%;

      &::placeholder {
        color: #fff;
        opacity: 1;
        font-size: 0.9rem;
      }
    }
  }
`;

export const IconPlus = styled(HiPlusCircle)`
  background-color: #40444B;
  border-right: 2px solid #37393F;
  height: 2.75rem;
  width: 2.75rem;
  padding: 10px;
  color: #B9BBBE;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;