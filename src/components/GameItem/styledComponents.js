import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {themeOptions} from '../../context/resources'

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0;
  padding: 0;

  flex: 1 1 calc(50% - 20px); /* 2 items in a row for extra small devices */
  max-width: calc(50% - 20px);

  @media (min-width: 576px) {
    flex: 1 1 calc(33.33% - 20px); /* 3 items in a row for small devices */
    max-width: calc(33.33% - 20px);
  }

  @media (min-width: 768px) {
    flex: 1 1 calc(25% - 20px); /* 4 items in a row for medium devices */
    max-width: calc(25% - 20px);
  }
`
export const GameItemContainer = styled.li`
  aspect-ratio: 9/13;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const GameItemThumbnailContainer = styled.div`
  width: 100%;
  aspect-ratio: 9/11;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0;
  margin: 0;
`

export const GameItemThumbnail = styled.img`
  width: 100%;
  object-fit: contain;
  @media (min-width: 576px) {
    border-radius: 12px;
  }
`

export const GameItemTitle = styled.h3`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; /* Limits text to 1 line */
  overflow: hidden; /* Hides overflowing content */
  text-overflow: ellipsis; /* Adds the ellipsis (...) */
  white-space: normal; /* Allows wrapping for words */
  margin: 0 0 2px 0;
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#181818' : '#f1f1f1'};
  font-size: 17px;
  font-weight: 500;
`

export const GameItemDetail = styled.p`
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#606060' : '#909090'};
  margin: 0;
  font-size: 14px;
  font-weight: 400;
`
