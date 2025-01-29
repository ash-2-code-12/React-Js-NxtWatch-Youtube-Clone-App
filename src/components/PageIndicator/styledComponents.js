import styled from 'styled-components'
import {themeOptions} from '../../context/resources'

export const PageIndicatorComponent = styled.div`
  background-color: ${props =>
    props.activeTheme === themeOptions.light ? '#f4f4f4' : '#212121'};
  display: flex;
  align-items: center;
  gap: 12px;
  height: 48px;
  padding: 20px;
`
export const PageIndicatorTitle = styled.h3`
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#181818' : '#f1f1f1'};
  margin: 0;
`
