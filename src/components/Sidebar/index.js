import {Component} from 'react'

import {IoBookmarks} from 'react-icons/io5'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import AppContext from '../../context/AppContext'
import {themeOptions, pageOptions} from '../../context/resources'

import {
  SidebarContainer,
  NavLinksList,
  StyledLink,
  PopupMenuItem,
  PopupNavText,
  ContactUsContainer,
  ContactUsHeading,
  SocialsContainer,
  SocialsIcon,
  SocialsDesc,
  StyledIcon,
} from './styledComponents'

class Sidebar extends Component {
  getIconColor = (activeTheme, activePage, selectedPage) => {
    if (activePage === selectedPage) {
      return '#ff0b37'
    }
    return activeTheme === themeOptions.light ? '#383838' : '#909090'
  }

  render() {
    const {activeTheme, activePage} = this.context

    return (
      <SidebarContainer activeTheme={activeTheme}>
        <NavLinksList>
          <StyledLink to="/">
            <PopupMenuItem
              activeTheme={activeTheme}
              selectedPage={activePage === pageOptions.home}
            >
              <StyledIcon>
                <AiFillHome
                  size="22"
                  color={this.getIconColor(
                    activeTheme,
                    activePage,
                    pageOptions.home,
                  )}
                />
              </StyledIcon>
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
              <StyledIcon>
                <HiFire
                  color={this.getIconColor(
                    activeTheme,
                    activePage,
                    pageOptions.trending,
                  )}
                />
              </StyledIcon>
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
              <StyledIcon>
                <SiYoutubegaming
                  color={this.getIconColor(
                    activeTheme,
                    activePage,
                    pageOptions.gaming,
                  )}
                />
              </StyledIcon>
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
              <StyledIcon>
                <IoBookmarks
                  color={this.getIconColor(
                    activeTheme,
                    activePage,
                    pageOptions.saved,
                  )}
                />
              </StyledIcon>
              <PopupNavText
                activeTheme={activeTheme}
                selectedPage={activePage === pageOptions.saved}
              >
                Saved videos
              </PopupNavText>
            </PopupMenuItem>
          </StyledLink>
        </NavLinksList>
        <ContactUsContainer>
          <ContactUsHeading activeTheme={activeTheme}>
            CONTACT US
            <SocialsContainer>
              <SocialsIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialsIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialsIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialsContainer>
            <SocialsDesc activeTheme={activeTheme}>
              Enjoy! Now to see your channels and recommendations!
            </SocialsDesc>
          </ContactUsHeading>
        </ContactUsContainer>
      </SidebarContainer>
    )
  }
}

Sidebar.contextType = AppContext

export default Sidebar
