import {Component} from 'react'
import {Link} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'

import AppContext from '../../context/AppContext'
import {themeOptions} from '../../context/resources'
import {
  NavHeader,
  NavBarMobileLogoContainer,
  NavBarLargeContainer,
  WebsiteLogo,
  NavIconBtn,
  NavOptionsContainer,
  ProfileIcon,
} from './styledComponents'

import MenuPopup from '../MenuPopup'
import LogoutPopup from '../LogoutPopup'

class Navbar extends Component {
  renderThemeBtn = (activeTheme, toggleTheme) => (
    <NavIconBtn onClick={toggleTheme} data-testid="theme" type="button">
      {activeTheme === themeOptions.light ? (
        <FaMoon size="24" color="#000000" />
      ) : (
        <FiSun size="28" color="#ffffff" />
      )}
    </NavIconBtn>
  )

  renderWebsiteLogo = logoUrl => (
    <Link to="/">
      <WebsiteLogo src={logoUrl} alt="website logo" />
    </Link>
  )

  render() {
    const {activeTheme, toggleTheme} = this.context
    const logoUrl =
      activeTheme === themeOptions.light
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

    return (
      <NavHeader>
        <NavBarMobileLogoContainer>
          {this.renderWebsiteLogo(logoUrl)}

          <NavOptionsContainer>
            {this.renderThemeBtn(activeTheme, toggleTheme)}
            <MenuPopup />
            <LogoutPopup />
          </NavOptionsContainer>
        </NavBarMobileLogoContainer>

        <NavBarLargeContainer>
          {this.renderWebsiteLogo(logoUrl)}
          <NavOptionsContainer>
            {this.renderThemeBtn(activeTheme, toggleTheme)}
            <ProfileIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <LogoutPopup />
          </NavOptionsContainer>
        </NavBarLargeContainer>
      </NavHeader>
    )
  }
}

Navbar.contextType = AppContext

export default Navbar
