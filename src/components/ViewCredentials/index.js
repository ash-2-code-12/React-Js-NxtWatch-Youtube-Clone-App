import Popup from 'reactjs-popup'
import {themeOptions} from '../../context/resources'

import {
  ModalContainer,
  ModalContent,
  ConfirmText,
} from '../LogoutPopup/styledComponents'

import {CloseButton, CloseIcon, CredSpan, ConfirmInfo} from './styledComponents'

import {PrimaryButton} from '../../styledComponents'

const ViewCredentials = ({activeTheme}) => (
  <Popup
    trigger={
      <PrimaryButton activeTheme={activeTheme} type="button">
        View Credentials
      </PrimaryButton>
    }
    position="center center"
    modal
    closeOnDocumentClick
  >
    {close => (
      <ModalContainer>
        <ModalContent activeTheme={activeTheme}>
          <CloseButton activeTheme={activeTheme} type="button" onClick={close}>
            <CloseIcon
              color={`${
                activeTheme === themeOptions.light ? '#424242' : '#ff0000'
              }`}
            />
          </CloseButton>
          <ConfirmText activeTheme={activeTheme}>User credentials:</ConfirmText>
          <ConfirmInfo activeTheme={activeTheme}>
            username: <CredSpan>rahul</CredSpan>
            <br /> password: <CredSpan>rahul@2021</CredSpan>
          </ConfirmInfo>
        </ModalContent>
      </ModalContainer>
    )}
  </Popup>
)

export default ViewCredentials
