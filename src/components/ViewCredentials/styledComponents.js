import styled from 'styled-components'
import {IoMdCloseCircleOutline} from 'react-icons/io'

import {ConfirmText} from '../LogoutPopup/styledComponents'

export const CloseButton = styled.button`
  background: none;
  border: none;
  align-self: flex-end;
  margin-right: 0;
  margin-left: auto;
  cursor: pointer;
`
export const CloseIcon = styled(IoMdCloseCircleOutline)`
  font-size: 20px;
`
export const CredSpan = styled.span`
  font-weight: 400;
  color: green;
`
export const ConfirmInfo = styled(ConfirmText)`
  font-size: 14px;
  width: 100%;
  text-align: start;
`
