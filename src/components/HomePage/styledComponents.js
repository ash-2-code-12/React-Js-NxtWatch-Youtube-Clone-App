import styled from 'styled-components'
import {themeOptions} from '../../context/resources'

export const HomeContent = styled.section`
  display: flex;
  flex-direction: column;
  padding: 24px 20px 0 24px;
  @media (max-width: 575px) {
    padding: 0;
  }
`
export const LoaderView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`
export const SearchBarContainer = styled.div`
  margin: 0 0 24px 0;
  width: 100%;
  height: 40px;
  max-width: 556px;
  display: flex;
  overflow: hidden;
  background-color: ${props =>
    props.activeTheme === themeOptions.light ? '#ffffff' : 'transparent'};
  @media (max-width: 575px) {
    width: 94%;
    margin: 20px auto;
  }
`

export const SearchBar = styled.input`
  outline: none;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  border: 1px solid #64748b;
  width: 100%;
  padding: 4px 18px;
  font-size: 16px;
  background: transparent;
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#181818' : '#f9f9f9'};
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus-within {
    border: 1.5px solid #4e94f6;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`

export const SearchBarBtn = styled.button`
  border: 1px solid #64748b;
  outline: none;
  border-left: 1px solid #64748b;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  cursor: pointer;
  margin: 0;
  padding: 2px 0 0 0;
  width: 64px;
  background-color: ${props =>
    props.activeTheme === themeOptions.light ? '#ff0000' : '#383838'};
`
export const VideosSection = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: 576px) {
    justify-content: flex-start;
  }
`
