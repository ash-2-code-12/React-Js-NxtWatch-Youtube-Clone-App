import {Component} from 'react'

import AppContext from '../../context/AppContext'
import {
  StyledLink,
  GameItemContainer,
  GameItemThumbnailContainer,
  GameItemThumbnail,
  GameItemTitle,
  GameItemDetail,
} from './styledComponents'

class GameItem extends Component {
  render() {
    const {gameObj} = this.props
    const {activeTheme} = this.context
    const {id, thumbnailUrl, title, viewCount} = gameObj

    return (
      <StyledLink to={`/videos/${id}`}>
        <GameItemContainer>
          <GameItemThumbnailContainer>
            <GameItemThumbnail src={thumbnailUrl} alt="video thumbnail" />
          </GameItemThumbnailContainer>
          <GameItemTitle activeTheme={activeTheme}>{title}</GameItemTitle>
          <GameItemDetail activeTheme={activeTheme}>
            {viewCount} Watching Worldwide
          </GameItemDetail>
        </GameItemContainer>
      </StyledLink>
    )
  }
}

GameItem.contextType = AppContext

export default GameItem
