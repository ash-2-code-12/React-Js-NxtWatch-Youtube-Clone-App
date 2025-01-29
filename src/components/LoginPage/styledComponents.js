import styled from 'styled-components'
import {themeOptions} from '../../context/resources'

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  font-family: 'Roboto';
  background-color: ${props =>
    props.activeTheme === themeOptions.light ? '#f1f1f1' : '#181818'};
`

export const LoginCard = styled.form`
  background-color: ${props =>
    props.activeTheme === themeOptions.light ? '#ffffff' : '#000000'};
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.1);
`

export const LoginLogo = styled.img`
  width: 40%;
  min-width: 96px;
  margin-top: 16px;
  margin-bottom: 42px;
`

export const LoginInputBox = styled.div`
  width: 80%;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 24px;
`

export const LoginLabel = styled.label`
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#616e7c' : '#f1f1f1'};
  font-weight: 500;
  font-size: 12px;
`

export const LoginInput = styled.input`
  background: transparent;
  border: 1px solid #94a3b8;
  border-radius: 6px;
  padding: 8px;
  width: 100%;
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#181818' : '#e2e8f0'};
  outline: none;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 12px;
  margin: 0;
  width: 80%;
  min-width: 220px;
`
export const VisibilityInput = styled.input`
  width: 14px;
  height: 14px;
  margin: 0;
`

export const VisibilityLabel = styled.label`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#616e7c' : '#f1f1f1'};
  font-size: 14px;
`
