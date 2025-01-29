import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {FiLogOut} from 'react-icons/fi'

import AppContext from '../../context/AppContext'
import {themeOptions} from '../../context/resources'

import {
  LogoutDesktopBtn,
  NavMobileBtn,
  ModalContainer,
  ModalContent,
  ConfirmText,
  BtnsContainer,
  ConfirmBtn,
  CancelBtn,
} from './styledComponents'

class LogoutPopup extends Component {
  state = {isMobile: window.innerWidth <= 768}

  componentDidMount() {
    window.addEventListener('resize', this.updateScreenSize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenSize)
  }

  updateScreenSize = () => {
    this.setState({isMobile: window.innerWidth <= 768})
  }

  onLogout = close => {
    close()
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  smTriggerBtn = activeTheme => (
    <NavMobileBtn type="button">
      <FiLogOut
        size="28"
        color={activeTheme === themeOptions.light ? '#000000' : '#ffffff'}
      />
    </NavMobileBtn>
  )

  lgTriggerBtn = activeTheme => (
    <LogoutDesktopBtn activeTheme={activeTheme} type="button">
      Logout
    </LogoutDesktopBtn>
  )

  renderLogoutContainer = (activeTheme, close) => (
    <ModalContainer>
      <ModalContent activeTheme={activeTheme}>
        <ConfirmText activeTheme={activeTheme}>
          Are you sure you want to logout?
        </ConfirmText>
        <BtnsContainer>
          <CancelBtn type="button" onClick={close}>
            Cancel
          </CancelBtn>
          <ConfirmBtn
            activeTheme={activeTheme}
            type="button"
            onClick={() => this.onLogout(close)}
          >
            Confirm
          </ConfirmBtn>
        </BtnsContainer>
      </ModalContent>
    </ModalContainer>
  )

  render() {
    const {isMobile} = this.state
    const {activeTheme} = this.context

    return (
      <Popup
        modal
        trigger={
          isMobile
            ? this.smTriggerBtn(activeTheme)
            : this.lgTriggerBtn(activeTheme)
        }
        className="popup-content"
      >
        {close => this.renderLogoutContainer(activeTheme, close)}
      </Popup>
    )
  }
}

LogoutPopup.contextType = AppContext

export default withRouter(LogoutPopup)
