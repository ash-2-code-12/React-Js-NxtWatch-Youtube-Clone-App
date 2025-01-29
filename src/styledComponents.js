import styled from 'styled-components'

import {themeOptions} from './context/resources'

export const AppContainer = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.activeTheme === themeOptions.light ? '#ffffff' : '#000000'};
`
export const PrimaryButton = styled.button`
  margin: 0 0 4px 0;
  background-color: ${props =>
    props.activeTheme === themeOptions.light ? '#ff0000' : '#383838'};
  border-radius: 8px;
  width: 80%;
  height: 32px;
  border: none;
  cursor: pointer;
  color: #f8fafc;
  font-weight: 600;
  font-family: 'Roboto';
`
export const PageContainer = styled.div`
  height: 100vh;
`
export const ContentContainer = styled.div`
  height: calc(100vh - 54px);
  display: block;

  @media (min-width: 768px) {
    height: calc(100vh - 60px);
    display: flex;
  }
`
export const MainContentContainer = styled.section`
  width: 100%;
  height: calc(100vh - 54px);
  overflow: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    height: calc(100vh - 60px);
  }
`
export const AltVideosSection = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  @media (min-width: 576px) {
    padding: 12px;
    justify-content: flex-start;
  }
`
export const GameVideosSection = styled(AltVideosSection)`
  padding: 12px;
  align-items: flex-start;
  @media (min-width: 576px) {
    justify-content: flex-start;
  }
`
