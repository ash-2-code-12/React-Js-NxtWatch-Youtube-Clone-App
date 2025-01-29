import {createGlobalStyle} from 'styled-components'
import {themeOptions} from './context/resources'

const GlobalStyle = createGlobalStyle`
  /* Base Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${props =>
      props.activeTheme === themeOptions.light ? '#ffffff' : '#000000'};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props =>
      props.activeTheme === themeOptions.light ? '#94a3b8' : '#888'};
    border: none;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${props =>
      props.activeTheme === themeOptions.light ? '#6c7c8c' : '#555'};
  }

  /* Optional: Style for horizontal scrollbar */
  ::-webkit-scrollbar-thumb:horizontal {
    background-color: ${props =>
      props.activeTheme === themeOptions.light ? '#94a3b8' : '#888'};
  }
`

export default GlobalStyle
