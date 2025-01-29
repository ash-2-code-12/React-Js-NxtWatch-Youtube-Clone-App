import styled from 'styled-components'
import {themeOptions} from '../../context/resources'
import {PrimaryButton} from '../../styledComponents'

export const NavMobileBtn = styled.button`
  background: transparent;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutDesktopBtn = styled(PrimaryButton)`
  width: 80px;
  margin: 0;
`
export const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalContent = styled.div`
  max-width: 400px;
  padding: 20px;
  background: ${props =>
    props.activeTheme === themeOptions.light ? '#f1f1f1' : '#181818'};
  border-radius: 10px;
  text-align: center;
  position: relative;
`
export const ConfirmText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#000000' : '#ffffff'};
`
export const BtnsContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
`
export const ConfirmBtn = styled(PrimaryButton)`
  border-radius: 4px;
  width: 72px;
`
export const CancelBtn = styled(PrimaryButton)`
  background: transparent;
  border: 1px solid #606060;
  border-radius: 4px;
  color: #606060;
  width: 72px;
`
