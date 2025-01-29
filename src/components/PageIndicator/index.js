import {IoBookmarks} from 'react-icons/io5'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import {pageOptions} from '../../context/resources'

import {PageIndicatorComponent, PageIndicatorTitle} from './styledComponents'

const pageData = {
  [pageOptions.trending]: {
    icon: <HiFire size="28" color="#ff0000" />,
    displayText: 'Trending',
  },
  [pageOptions.gaming]: {
    icon: <SiYoutubegaming size="28" color="#ff0000" />,
    displayText: 'Gaming',
  },
  [pageOptions.saved]: {
    icon: <IoBookmarks size="28" color="#ff0000" />,
    displayText: 'Saved Videos',
  },
}

const PageIndicator = props => {
  const {page, activeTheme} = props
  const {icon, displayText} = pageData[page]

  return (
    <PageIndicatorComponent data-testid="banner" activeTheme={activeTheme}>
      {icon}
      <PageIndicatorTitle activeTheme={activeTheme}>
        {displayText}
      </PageIndicatorTitle>
    </PageIndicatorComponent>
  )
}

export default PageIndicator
