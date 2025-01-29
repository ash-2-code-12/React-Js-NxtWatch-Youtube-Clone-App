import styled from 'styled-components'
import {themeOptions} from '../../context/resources'

export const SimilarVideosComponent = styled.section`
  width: 100%;
  height: 100%;

  @media (min-width: 1012px) {
    max-width: 420px;
  }
`
export const SimilarVideosHeading = styled.h3`
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#181818' : '#f1f1f1'};
  margin: 0 0 12px 4px;
  font-size: ${props => (props.isSimilar ? '20px' : '17px')};
`
export const SimilarVideosList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`
