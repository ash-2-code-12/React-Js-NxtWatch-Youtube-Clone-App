import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {themeOptions} from '../../context/resources'

export const SidebarContainer = styled.section`
  display: none;
  width: 72px;
  padding: 0 3px;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.8s ease;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &:hover {
    width: 280px;
  }
`
export const NavLinksList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 40px 0 0 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
export const PopupMenuItem = styled.li`
  ${props =>
    props.selectedPage &&
    `background-color: ${
      props.activeTheme === themeOptions.light ? '#c0d3ee' : '#424242'
    };`}

  display: flex;
  align-items: center;
  padding: auto;
  height: 52px;
  transition: all 0.3s ease;
  border-radius: 16px;

  &:hover {
    ${props =>
      !props.selectedPage &&
      `background-color: ${
        props.activeTheme === themeOptions.light ? '#e2e8f0' : '#292929'
      };`}
    transform: translate(0px, -4px);
  }
  ${SidebarContainer}:hover & {
    padding: 0 24px;
  }
`
export const PopupNavText = styled.p`
  color: ${props => {
    if (props.activeTheme === themeOptions.light) {
      return props.selectedPage ? '#212121' : '#59636d'
    }
    return props.selectedPage ? '#ebebeb' : '#7e858e'
  }};
  font-weight: ${props => (props.selectedPage ? '600' : '500')};
  font-size: 16px;
  margin: 0 0 0 22px;
  display: none;
  ${SidebarContainer}:hover & {
    display: block;
  }
`
export const ContactUsContainer = styled.div`
  padding: 0 24px;
  margin: 0;
  display: none;
  ${SidebarContainer}:hover & {
    display: block;
  }
`
export const ContactUsHeading = styled.h4`
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#000000' : '#ffffff'};
`
export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 18px 0 12px 0;
`
export const SocialsIcon = styled.img`
  width: 40px;
  aspect-ratio: 1;
`
export const SocialsDesc = styled.p`
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#000000' : '#ffffff'};
  font-weight: 400;
  margin: 0;
`
export const StyledIcon = styled.div`
  width: 28px;
  height: 28px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    width: 100%;
    height: 100%;
  }

  ${SidebarContainer}:hover & {
    width: 24px;
    height: 24px;
    border: none;
    margin: 0;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`
