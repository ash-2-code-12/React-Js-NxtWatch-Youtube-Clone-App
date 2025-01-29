import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {themeOptions} from '../../context/resources'

export const PopupContainer = styled.div`
  background-color: ${props =>
    props.activeTheme === themeOptions.light ? '#ffffff' : '#181818'};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const NavIconBtn = styled.button`
  background: transparent;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px;
  align-self: flex-end;
`

export const NavLinksList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
export const PopupMenuItem = styled.li`
  ${props =>
    props.selectedPage &&
    `background-color: ${
      props.activeTheme === themeOptions.light ? '#e2e8f0' : '#424242'
    };`}
  width: 100vw;
  padding-left: 30%;
  display: flex;
  align-items: center;
  height: 52px;
  transition: all 0.3s ease;

  &:hover {
    ${props =>
      !props.selectedPage &&
      `background-color: ${
        props.activeTheme === themeOptions.light ? '#f8fbff' : '#292929'
      };`}
    transform: translate(4px, -4px);
  }
`
export const PopupNavText = styled.p`
  color: ${props => {
    if (props.activeTheme === themeOptions.light) {
      return props.selectedPage ? '#212121' : '#59636d'
    }
    return props.selectedPage ? '#ebebeb' : '#7e858e'
  }};
  font-weight: ${props => (props.selectedPage ? 'bold' : '500')};
  font-size: 20px;
  margin: 0 0 0 14px;
`
