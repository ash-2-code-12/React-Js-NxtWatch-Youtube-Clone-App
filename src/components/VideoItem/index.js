import {Component} from 'react'

import AppContext from '../../context/AppContext'

import {
  VideoItemContainer,
  VideoItemThumbnailContainer,
  VideoItemThumbnail,
  VideoItemDetailsContainer,
  VideoItemChannelLogo,
  VideoItemDetails,
  VideoItemTitle,
  VideoItemDetail,
  StyledLink,
} from './styledComponents'

class VideoItem extends Component {
  render() {
    const {activeTheme} = this.context
    const {videoObj} = this.props
    const {id, thumbnailUrl, title, viewCount, publishedAt} = videoObj
    const {channel} = videoObj
    const {name, profileImageUrl} = channel

    return (
      <StyledLink to={`/videos/${id}`}>
        <VideoItemContainer>
          <VideoItemThumbnailContainer>
            <VideoItemThumbnail src={thumbnailUrl} alt="video thumbnail" />
          </VideoItemThumbnailContainer>
          <VideoItemDetailsContainer>
            <VideoItemChannelLogo src={profileImageUrl} alt="channel logo" />
            <VideoItemDetails>
              <VideoItemTitle activeTheme={activeTheme}>{title}</VideoItemTitle>
              <VideoItemDetail activeTheme={activeTheme}>
                {name}
              </VideoItemDetail>
              <VideoItemDetail activeTheme={activeTheme}>
                {viewCount} views • {publishedAt}
              </VideoItemDetail>
            </VideoItemDetails>
          </VideoItemDetailsContainer>
        </VideoItemContainer>
      </StyledLink>
    )
  }
}

VideoItem.contextType = AppContext

export default VideoItem
