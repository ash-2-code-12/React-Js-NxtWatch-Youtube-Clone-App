import {Component} from 'react'

import Popup from 'reactjs-popup'

import {IoMenu, IoBookmarks} from 'react-icons/io5'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import AppContext from '../../context/AppContext'
import {themeOptions, pageOptions} from '../../context/resources'

import {
  NavIconBtn,
  PopupContainer,
  CloseButton,
  NavLinksList,
  StyledLink,
  PopupMenuItem,
  PopupNavText,
} from './styledComponents'

class MenuPopup extends Component {
  renderMenuBtn = activeTheme => (
    <NavIconBtn data-testid="theme" type="button">
      <IoMenu
        size="36"
        color={activeTheme === themeOptions.light ? '#000000' : '#ffffff'}
      />
    </NavIconBtn>
  )

  getIconColor = (activeTheme, activePage, selectedPage) => {
    if (activePage === selectedPage) {
      return '#ff0b37'
    }
    return activeTheme === themeOptions.light ? '#383838' : '#909090'
  }

  renderPopupContent = (close, activeTheme, activePage) => (
    <PopupContainer activeTheme={activeTheme}>
      <CloseButton
        data-testid="closeButton"
        type="button"
        onClick={() => close()}
      >
        <IoMdClose
          size="30"
          color={activeTheme === themeOptions.light ? '#000000' : '#ffffff'}
        />
      </CloseButton>

      <NavLinksList>
        <StyledLink to="/">
          <PopupMenuItem
            activeTheme={activeTheme}
            selectedPage={activePage === pageOptions.home}
          >
            <AiFillHome
              size="22"
              color={this.getIconColor(
                activeTheme,
                activePage,
                pageOptions.home,
              )}
            />
            <PopupNavText
              activeTheme={activeTheme}
              selectedPage={activePage === pageOptions.home}
            >
              Home
            </PopupNavText>
          </PopupMenuItem>
        </StyledLink>
        <StyledLink to="/trending">
          <PopupMenuItem
            activeTheme={activeTheme}
            selectedPage={activePage === pageOptions.trending}
          >
            <HiFire
              size="22"
              color={this.getIconColor(
                activeTheme,
                activePage,
                pageOptions.trending,
              )}
            />
            <PopupNavText
              activeTheme={activeTheme}
              selectedPage={activePage === pageOptions.trending}
            >
              Trending
            </PopupNavText>
          </PopupMenuItem>
        </StyledLink>
        <StyledLink to="/gaming">
          <PopupMenuItem
            activeTheme={activeTheme}
            selectedPage={activePage === pageOptions.gaming}
          >
            <SiYoutubegaming
              size="22"
              color={this.getIconColor(
                activeTheme,
                activePage,
                pageOptions.gaming,
              )}
            />
            <PopupNavText
              activeTheme={activeTheme}
              selectedPage={activePage === pageOptions.gaming}
            >
              Gaming
            </PopupNavText>
          </PopupMenuItem>
        </StyledLink>
        <StyledLink to="/saved-videos">
          <PopupMenuItem
            activeTheme={activeTheme}
            selectedPage={activePage === pageOptions.saved}
          >
            <IoBookmarks
              size="22"
              color={this.getIconColor(
                activeTheme,
                activePage,
                pageOptions.saved,
              )}
            />
            <PopupNavText
              activeTheme={activeTheme}
              selectedPage={activePage === pageOptions.saved}
            >
              Saved videos
            </PopupNavText>
          </PopupMenuItem>
        </StyledLink>
      </NavLinksList>
    </PopupContainer>
  )

  render() {
    const {activeTheme, activePage} = this.context

    return (
      <Popup
        modal
        trigger={this.renderMenuBtn(activeTheme)}
        className="popup-content"
      >
        {close => this.renderPopupContent(close, activeTheme, activePage)}
      </Popup>
    )
  }
}

MenuPopup.contextType = AppContext

export default MenuPopup
