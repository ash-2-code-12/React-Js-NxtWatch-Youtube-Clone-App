import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {themeOptions} from '../../context/resources'

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0;
  padding: 0;
  flex: 1 1 calc(100% - 20px); /* Default: takes full width minus the gap */

  @media (max-width: 575px) {
    max-width: 428px;
  }

  @media (min-width: 576px) {
    flex: 1 1 calc(50% - 20px); /* 2 items in a row for small devices */
    max-width: (calc(50% - 20px));
  }

  @media (min-width: 768px) {
    flex: 1 1 calc(33.33% - 20px); /* 3 items in a row for medium devices */
    max-width: calc(33.33% - 20px);
  }
`
export const VideoItemContainer = styled.li`
  aspect-ratio: 1 / 0.8;
  display: flex;
  flex-direction: column;
  max-height: 360px;
  gap: 12px;
  cursor: pointer;
  width: 100%;
`
export const VideoItemThumbnailContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0;
  margin: 0;
`
export const VideoItemThumbnail = styled.img`
  width: 100%;
  object-fit: contain;
  @media (min-width: 576px) {
    border-radius: 12px;
  }
`
export const VideoItemDetailsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin: 0;
  flex: 1;
  // max-height: 88px; height: 27%;
`
export const VideoItemChannelLogo = styled.img`
  width: 36px;
  border: 50%;
  margin: 0;
  align-self: flex-start;
`
export const VideoItemDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
`
export const VideoItemTitle = styled.h3`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* Limits text to 2 lines */
  overflow: hidden; /* Hides overflowing content */
  text-overflow: ellipsis; /* Adds the ellipsis (...) */
  white-space: normal; /* Allows wrapping for words */
  margin: 0 0 2px 0;
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#181818' : '#f1f1f1'};
  font-size: 17px;
  font-weight: 500;
  @display (min-width: 576px) {
    margin-top: 6px;
  }
`
export const VideoItemDetail = styled.p`
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#606060' : '#909090'};
  margin: 2px 0 0 0;
  font-size: 13px;
  font-weight: 400;
`
