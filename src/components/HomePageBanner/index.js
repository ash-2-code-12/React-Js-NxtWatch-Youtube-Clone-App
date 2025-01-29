import {Component} from 'react'
import {IoClose} from 'react-icons/io5'

import {
  HomeBanner,
  BannerContent,
  BannerCloseBtn,
  BannerLogo,
  BannerDesc,
  BannerGetPremiumBtn,
} from './styledComponents'

class HomePageBanner extends Component {
  state = {isShrinking: false}

  onCloseBanner = () => {
    const {toggleDisplay} = this.props
    this.setState({isShrinking: true})
    setTimeout(() => {
      toggleDisplay()
    }, 500)
  }

  render() {
    const {display} = this.props
    const {isShrinking} = this.state

    return (
      <HomeBanner display={display} className={isShrinking ? 'shrink' : ''}>
        <BannerContent className={isShrinking ? 'shrink' : ''}>
          <BannerLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerDesc>Buy Nxt Watch Premium prepaid plans with UPI</BannerDesc>
          <BannerGetPremiumBtn type="button">GET IT NOW</BannerGetPremiumBtn>
        </BannerContent>
        <BannerCloseBtn
          data-testid="close"
          type="button"
          onClick={this.onCloseBanner}
        >
          <IoClose size="20" />
        </BannerCloseBtn>
      </HomeBanner>
    )
  }
}

export default HomePageBanner
