import styled from 'styled-components'
import {themeOptions} from '../../context/resources'

export const NotFoundImg = styled.img`
  width: 80%;
  max-width: 480px;
  align-self: center;
  display: block;
  margin: 48px auto 20px auto;
`
export const NotFoundHeading = styled.h3`
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#000000' : '#ffffff'};
  font-weight: 500;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 28px;
  }
`

export const NotFoundDesc = styled.p`
  text-align: center;
  color: #7e858e;
  margin: 0 auto;
  @media (max-width: 767px) {
    width: 300px;
  }
`
