import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import AppContext from '../../context/AppContext'
import {themeOptions} from '../../context/resources'

import {PrimaryButton} from '../../styledComponents'
import ViewCredentials from '../ViewCredentials'

import {
  LoginPageContainer,
  LoginCard,
  LoginLogo,
  LoginInputBox,
  LoginLabel,
  LoginInput,
  ErrorMessage,
  VisibilityInput,
  VisibilityLabel,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    errorMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = responseJwtToken => {
    this.setState({errorMsg: ''})
    Cookies.set('jwt_token', responseJwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = responseErrorMsg => {
    this.setState({errorMsg: responseErrorMsg})
  }

  submitLoginForm = async event => {
    event.preventDefault()

    const {usernameInput, passwordInput} = this.state
    const loginDetails = {username: usernameInput, password: passwordInput}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(loginDetails),
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok) {
        this.onSubmitSuccess(data.jwt_token)
      } else {
        this.onSubmitFailure(data.error_msg)
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  onChangeUsername = event => this.setState({usernameInput: event.target.value})

  renderUsernameField = activeTheme => {
    const {usernameInput} = this.state

    return (
      <>
        <LoginLabel activeTheme={activeTheme} htmlFor="usernameField">
          USERNAME
        </LoginLabel>
        <LoginInput
          activeTheme={activeTheme}
          id="usernameField"
          type="text"
          onChange={this.onChangeUsername}
          value={usernameInput}
          placeholder="Username"
        />
      </>
    )
  }

  onChangePassword = event => this.setState({passwordInput: event.target.value})

  changePasswordVisiblity = () =>
    this.setState(prevState => ({showPassword: !prevState.showPassword}))

  renderPasswordField = activeTheme => {
    const {passwordInput, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <LoginLabel activeTheme={activeTheme} htmlFor="passwordField">
          PASSWORD
        </LoginLabel>
        <LoginInput
          activeTheme={activeTheme}
          id="passwordField"
          type={inputType}
          onChange={this.onChangePassword}
          value={passwordInput}
          placeholder="Password"
        />
        <VisibilityLabel htmlFor="showPassword" activeTheme={activeTheme}>
          <VisibilityInput
            id="showPassword"
            onChange={this.changePasswordVisiblity}
            checked={showPassword}
            type="checkbox"
          />{' '}
          Show Password
        </VisibilityLabel>
      </>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {errorMsg} = this.state
    const {activeTheme} = this.context
    const logoUrl =
      activeTheme === themeOptions.light
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

    return (
      <LoginPageContainer activeTheme={activeTheme}>
        <LoginCard activeTheme={activeTheme} onSubmit={this.submitLoginForm}>
          <LoginLogo
            className="login-site-logo"
            alt="website logo"
            src={logoUrl}
          />
          <LoginInputBox>{this.renderUsernameField(activeTheme)}</LoginInputBox>
          <LoginInputBox>{this.renderPasswordField(activeTheme)}</LoginInputBox>
          <PrimaryButton activeTheme={activeTheme} type="submit">
            Login
          </PrimaryButton>
          {errorMsg !== '' && <ErrorMessage>*{errorMsg}</ErrorMessage>}
          <ViewCredentials activeTheme={activeTheme} />
        </LoginCard>
      </LoginPageContainer>
    )
  }
}

LoginPage.contextType = AppContext

export default LoginPage
