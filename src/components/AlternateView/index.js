import {Component} from 'react'

import AppContext from '../../context/AppContext'
import {themeOptions, alternateViewOptions} from '../../context/resources'

import {
  AlternateViewComponent,
  AlternateImg,
  AlternateHeading,
  AlternateDesc,
  RetryFetchBtn,
} from './styledComponents'

const viewDataObjects = {
  [alternateViewOptions.failure]: {
    lightImgUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png',
    darkImgUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png',
    heading: 'Oops! Something Went Wrong',
    desc:
      'We are having some trouble to complete your request.Please try again',
  },
  [alternateViewOptions.noResults]: {
    lightImgUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png',
    darkImgUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png',
    heading: 'No Search results found',
    desc: 'Try different key words or remove search filter',
  },
}

class AlternateView extends Component {
  render() {
    const {activeTheme} = this.context
    const {retryFetch, viewType} = this.props
    const viewObj = viewDataObjects[viewType]
    const alternateImgUrl =
      activeTheme === themeOptions.light
        ? viewObj.lightImgUrl
        : viewObj.darkImgUrl

    const alternateHeading = viewObj.heading
    const alternateDesc = viewObj.desc

    return (
      <AlternateViewComponent>
        <AlternateImg src={alternateImgUrl} alt="failure img" />
        <AlternateHeading activeTheme={activeTheme}>
          {alternateHeading}
        </AlternateHeading>
        <AlternateDesc activeTheme={activeTheme}>{alternateDesc}</AlternateDesc>
        <RetryFetchBtn
          activeTheme={activeTheme}
          type="button"
          onClick={retryFetch}
        >
          Retry
        </RetryFetchBtn>
      </AlternateViewComponent>
    )
  }
}

AlternateView.contextType = AppContext

export default AlternateView
