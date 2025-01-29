import styled from 'styled-components'

export const HomeBanner = styled.section`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 240px;
  width: 100%;
  padding: 16px;
  display: ${props => props.display};
  justify-content: space-between;
  transition: all 0.5s ease-in-out;

  &.shrink {
    height: 0;
    padding: 0;
    opacity: 0;
    transform: translateY(-100%);
  }

  @media (min-width: 768px) {
    background-position: left;
  }
`
export const BannerCloseBtn = styled.button`
  padding: 0;
  margin: 0;
  height: 24px;
  width: 24px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`
export const BannerContent = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 12px;
  display: flex;
  margin: 0 0 0 12px;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  &.shrink {
    transform: translateY(-100%);
    opacity: 0;
  }
`
export const BannerLogo = styled.img`
  margin: 0;
  width: 140px;
`
export const BannerDesc = styled.p`
  margin: 12px 0 16px 0;
  font-size: 18px;
  color: #000000;
  line-height: 1.8;
`
export const BannerGetPremiumBtn = styled.button`
  font-size: 16px;
  font-family: 'Roboto';
  border: 1px solid #212121;
  border-radius: 20px;
  color: #212121;
  background: transparent;
  padding: 10px;
`
