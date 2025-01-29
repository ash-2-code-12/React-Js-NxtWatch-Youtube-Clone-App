import {Component} from 'react'

import MainLayout from '../MainLayout'

import AppContext from '../../context/AppContext'
import {themeOptions} from '../../context/resources'

import {NotFoundImg, NotFoundHeading, NotFoundDesc} from './styledComponents'

class NotFoundPage extends Component {
  render() {
    const {activeTheme} = this.context
    const notFoundUrl =
      activeTheme === themeOptions.light
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
    console.log(notFoundUrl)

    return (
      <MainLayout>
        <NotFoundImg src={notFoundUrl} alt="not found" />
        <NotFoundHeading activeTheme={activeTheme}>
          Page Not Found
        </NotFoundHeading>
        <NotFoundDesc activeTheme={activeTheme}>
          We are sorry, the page you requested could not be found.
        </NotFoundDesc>
      </MainLayout>
    )
  }
}

NotFoundPage.contextType = AppContext

export default NotFoundPage
