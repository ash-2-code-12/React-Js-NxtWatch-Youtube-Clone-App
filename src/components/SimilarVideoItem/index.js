import {Component} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import AppContext from '../../context/AppContext'

import {
  AltVideoItemContainer,
  AltVideoItemThumbnailContainer,
  AltVideoItemChannelLogoXs,
  AltVideoItemChannelLogoSm,
  ChannelLogoNameBox,
} from '../AltVideoItem/styledComponents'

import {
  VideoItemThumbnail,
  VideoItemDetailsContainer,
  VideoItemDetails,
  VideoItemTitle,
  VideoItemDetail,
} from '../VideoItem/styledComponents'

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0;
  padding: 0;
  flex: 1;
`

class SimilarVideoItem extends Component {
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
              <VideoItemTitle activeTheme={activeTheme} isSimilar>
                {title}
              </VideoItemTitle>
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

SimilarVideoItem.contextType = AppContext

export default SimilarVideoItem
