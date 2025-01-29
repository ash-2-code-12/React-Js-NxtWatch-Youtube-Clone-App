import {Component} from 'react'
import Loader from 'react-loader-spinner'

import MainLayout from '../MainLayout'
import AlternateView from '../AlternateView'
import PageIndicator from '../PageIndicator'
import AltVideoItem from '../AltVideoItem'

import AppContext from '../../context/AppContext'
import {
  apiStatusConstants,
  alternateViewOptions,
  pageOptions,
} from '../../context/resources'

import {LoaderView} from '../HomePage/styledComponents'
import {AltVideosSection} from '../../styledComponents'

class TrendingPage extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    const {togglePage} = this.context
    togglePage(pageOptions.trending)
    this.fetchVideosList()
  }

  formatChannelObj = channelObj => ({
    name: channelObj.name,
    profileImageUrl: channelObj.profile_image_url,
  })

  formatVideoObj = video => ({
    channel: this.formatChannelObj(video.channel),
    id: video.id,
    publishedAt: video.published_at,
    thumbnailUrl: video.thumbnail_url,
    title: video.title,
    viewCount: video.view_count,
  })

  fetchVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {fetchVideosData} = this.context
    const apiStatus = await fetchVideosData(pageOptions.trending)

    const {videosData} = this.context
    this.setState({
      apiStatus,
      videosList: videosData.map(this.formatVideoObj),
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
    const {videosList} = this.state
    const {activeTheme} = this.context

    return (
      <>
        <PageIndicator activeTheme={activeTheme} page={pageOptions.trending} />
        <AltVideosSection>
          {videosList.map(videoObj => (
            <AltVideoItem key={videoObj.id} videoObj={videoObj} />
          ))}
        </AltVideosSection>
      </>
    )
  }

  renderTrendingContent = () => {
    const {apiStatus, videosList} = this.state

    switch (apiStatus) {
      case apiStatusConstants.initial:
        return null
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return videosList.length > 0
          ? this.renderSuccessView()
          : this.renderNoSearchResultsView()
      default:
        return null
    }
  }

  render() {
    return (
      <MainLayout data-testid="trending">
        {this.renderTrendingContent()}
      </MainLayout>
    )
  }
}

TrendingPage.contextType = AppContext

export default TrendingPage
