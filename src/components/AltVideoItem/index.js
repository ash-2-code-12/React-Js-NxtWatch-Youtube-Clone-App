import {Component} from 'react'

import AppContext from '../../context/AppContext'

import {
  StyledLink,
  AltVideoItemContainer,
  AltVideoItemThumbnailContainer,
  AltVideoItemChannelLogoXs,
  AltVideoItemChannelLogoSm,
  ChannelLogoNameBox,
} from './styledComponents'

import {
  VideoItemThumbnail,
  VideoItemDetailsContainer,
  VideoItemDetails,
  VideoItemTitle,
  VideoItemDetail,
} from '../VideoItem/styledComponents'

class AltVideoItem extends Component {
  render() {
    const {activeTheme} = this.context
    const {videoObj} = this.props
    const {id, thumbnailUrl, title, viewCount, publishedAt} = videoObj
    const {channel} = videoObj
    const {name, profileImageUrl} = channel

    return (
      <StyledLink to={`/videos/${id}`}>
        <AltVideoItemContainer>
          <AltVideoItemThumbnailContainer>
            <VideoItemThumbnail src={thumbnailUrl} alt="video thumbnail" />
          </AltVideoItemThumbnailContainer>
          <VideoItemDetailsContainer>
            <AltVideoItemChannelLogoXs
              src={profileImageUrl}
              alt="channel logo"
            />
            <VideoItemDetails>
              <VideoItemTitle activeTheme={activeTheme}>{title}</VideoItemTitle>
              <ChannelLogoNameBox>
                <AltVideoItemChannelLogoSm
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <VideoItemDetail activeTheme={activeTheme}>
                  {name}
                </VideoItemDetail>
              </ChannelLogoNameBox>
              <VideoItemDetail activeTheme={activeTheme}>
                {viewCount} views • {publishedAt}
              </VideoItemDetail>
            </VideoItemDetails>
          </VideoItemDetailsContainer>
        </AltVideoItemContainer>
      </StyledLink>
    )
  }
}

AltVideoItem.contextType = AppContext

export default AltVideoItem
