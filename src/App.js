import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import AppContext from './context/AppContext'
import {
  themeOptions,
  pageOptions,
  apiStatusConstants,
} from './context/resources'

import {AppContainer} from './styledComponents'

import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import TrendingPage from './components/TrendingPage'
import GamingPage from './components/GamingPage'
import SavedVideosPage from './components/SavedVideosPage'
import VideoItemDetailsPage from './components/VideoItemDetailsPage'
import NotFoundPage from './components/NotFoundPage'

import './App.css'
import GlobalStyle from './GlobalStyle'

// Persisting searchQuery and savedVideoIds
const storedVideoIds = JSON.parse(localStorage.getItem('savedVideos')) || []
const storedSearchQuery = localStorage.getItem('searchQuery') || ''
// prettier-ignore
const storedThemeOption = localStorage.getItem('themeOption') || themeOptions.dark

class App extends Component {
  state = {
    activeTheme: storedThemeOption,
    activePage: pageOptions.home,
    searchQuery: storedSearchQuery,
    savedVideoIds: storedVideoIds,
    videosData: [],
  }

  togglePage = pageId => {
    console.log(`PAGE ID : ${pageId}`)
    const {activePage} = this.state
    if (activePage === pageId) return
    this.setState({activePage: pageId})
  }

  toggleTheme = () => {
    console.log('Change Theme')
    this.setState(prevState => ({
      activeTheme:
        prevState.activeTheme === themeOptions.light
          ? themeOptions.dark
          : themeOptions.light,
    }))
  }

  updateLocally = () => {
    try {
      const {savedVideoIds, searchQuery} = this.state
      localStorage.setItem('savedVideos', JSON.stringify(savedVideoIds))
      localStorage.setItem('searchQuery', searchQuery)
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }

  addSavedVideo = id => {
    this.setState(
      prevState => ({savedVideoIds: [...prevState.savedVideoIds, id]}),
      this.updateLocally,
    )
  }

  removeSavedVideo = id => {
    this.setState(
      prevState => ({
        savedVideoIds: prevState.savedVideoIds.filter(
          videoId => videoId !== id,
        ),
      }),
      this.updateLocally,
    )
  }

  updateSearchQuery = search => {
    this.setState({searchQuery: search})
    console.log(`search query: ${search}`)
  }

  fetchVideosData = async page => {
    const jwtToken = Cookies.get('jwt_token')
    let url
    if (page === pageOptions.home) {
      const {searchQuery} = this.state
      url = `https://apis.ccbp.in/videos/all?search=${searchQuery}`
    } else if (page === pageOptions.trending) {
      url = `https://apis.ccbp.in/videos/trending`
    } else if (page === pageOptions.gaming) {
      url = `https://apis.ccbp.in/videos/gaming`
    }
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      this.setState({
        videosData: fetchedData.videos,
      })
      return apiStatusConstants.success
    }

    this.setState({videosData: []})
    return apiStatusConstants.failure
  }

  render() {
    // prettier-ignore
    const {activeTheme, activePage, savedVideoIds, searchQuery, videosData} = this.state

    return (
      <AppContext.Provider
        value={{
          activeTheme,
          toggleTheme: this.toggleTheme,
          activePage,
          togglePage: this.togglePage,
          searchQuery,
          fetchVideosData: this.fetchVideosData,
          videosData,
          updateSearchQuery: this.updateSearchQuery,
          savedVideoIds,
          addSavedVideo: this.addSavedVideo,
          removeSavedVideo: this.removeSavedVideo,
        }}
      >
        <GlobalStyle activeTheme={activeTheme} />
        <AppContainer activeTheme={activeTheme}>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <ProtectedRoute exact path="/" component={HomePage} />
            <ProtectedRoute exact path="/trending" component={TrendingPage} />
            <ProtectedRoute exact path="/gaming" component={GamingPage} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideosPage}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetailsPage}
            />
            <Route exact path="/not-found" component={NotFoundPage} />
            <Redirect to="/not-found" />
          </Switch>
        </AppContainer>
      </AppContext.Provider>
    )
  }
}

export default App
