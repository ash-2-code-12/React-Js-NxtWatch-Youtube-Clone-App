import {Component} from 'react'
import Loader from 'react-loader-spinner'

import MainLayout from '../MainLayout'
import AlternateView from '../AlternateView'
import PageIndicator from '../PageIndicator'
import GameItem from '../GameItem'

import AppContext from '../../context/AppContext'
import {
  apiStatusConstants,
  alternateViewOptions,
  pageOptions,
} from '../../context/resources'

import {LoaderView} from '../HomePage/styledComponents'
import {GameVideosSection} from '../../styledComponents'

class GamingPage extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamesList: [],
  }

  componentDidMount() {
    const {togglePage} = this.context
    togglePage(pageOptions.gaming)
    this.fetchVideosList()
  }

  formatGameObj = gameObj => ({
    id: gameObj.id,
    thumbnailUrl: gameObj.thumbnail_url,
    title: gameObj.title,
    viewCount: gameObj.view_count,
  })

  fetchVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {fetchVideosData} = this.context
    const apiStatus = await fetchVideosData(pageOptions.gaming)

    const {videosData} = this.context
    this.setState({
      apiStatus,
      gamesList: videosData.map(this.formatGameObj),
    })
  }

  renderLoaderView = () => (
    <LoaderView data-testid="loader">
      <Loader type="ThreeDots" color="#ff0000" width="90" height="40" />
    </LoaderView>
  )

  renderFailureView = () => (
    <AlternateView
      viewType={alternateViewOptions.failure}
      retryFetch={this.fetchVideosData}
    />
  )

  renderNoSearchResultsView = () => (
    <AlternateView
      viewType={alternateViewOptions.noResults}
      retryFetch={this.fetchVideosData}
    />
  )

  renderSuccessView = () => {
    const {gamesList} = this.state
    const {activeTheme} = this.context

    return (
      <>
        <PageIndicator activeTheme={activeTheme} page={pageOptions.gaming} />
        <GameVideosSection>
          {gamesList.map(gameObj => (
            <GameItem key={gameObj.id} gameObj={gameObj} />
          ))}
        </GameVideosSection>
      </>
    )
  }

  renderGamingContent = () => {
    const {apiStatus, gamesList} = this.state

    switch (apiStatus) {
      case apiStatusConstants.initial:
        return null
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return gamesList.length > 0
          ? this.renderSuccessView()
          : this.renderNoSearchResultsView()
      default:
        return null
    }
  }

  render() {
    return <MainLayout>{this.renderGamingContent()}</MainLayout>
  }
}

GamingPage.contextType = AppContext

export default GamingPage
