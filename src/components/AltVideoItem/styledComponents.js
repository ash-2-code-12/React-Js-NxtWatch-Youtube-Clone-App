import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0;
  padding: 0;
  flex: 1 1 calc(100% - 20px);
  @media (max-width: 575px) {
    max-width: 428px;
  }

  @media (min-width: 768px) {
    flex: 1 1 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
`
export const AltVideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  max-height: 360px;
  gap: 12px;
  cursor: pointer;
  width: 100%;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`
export const AltVideoItemThumbnailContainer = styled.div`
  width: 60%;
  aspect-ratio: 16/9;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0;
  margin: 0;

  @media (max-width: 575px) {
    width: 100%;
  }
`
export const AltVideoItemChannelLogoXs = styled.img`
  width: 36px;
  border: 50%;
  margin: 0 6px;
  align-self: flex-start;

  @media (min-width: 576px) {
    display: none;
    max-height: 100%;
  }
`
export const AltVideoItemChannelLogoSm = styled(AltVideoItemChannelLogoXs)`
  display: block;
  margin: 8px 0;

  @media (max-width: 575px) {
    display: none;
  }
`
export const ChannelLogoNameBox = styled.div`
  margin: 0;
  padding: 0;
  @media (min-width: 576px) {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`
