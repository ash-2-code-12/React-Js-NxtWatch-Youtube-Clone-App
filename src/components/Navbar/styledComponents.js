import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  height: 60px;
  padding: 0 24px;

  @media screen and (max-width: 767px) {
    align-items: center;
    height: 54px;
    padding: 0 16px;
  }
`
export const NavBarMobileLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavBarLargeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const WebsiteLogo = styled.img`
  width: 88px;

  @media screen and (min-width: 768px) {
    width: 120px;
  }
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
export const NavOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0;

  @media (min-width: 768px) {
    gap: 20px;
  }
`
export const ProfileIcon = styled.img`
  margin: 0;
  width: 32px;
`
