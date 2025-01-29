import {Component} from 'react'
import Loader from 'react-loader-spinner'

import AppContext from '../../context/AppContext'
import {
  apiStatusConstants,
  alternateViewOptions,
  pageOptions,
} from '../../context/resources'

import SimilarVideoItem from '../SimilarVideoItem'
import {LoaderView} from '../HomePage/styledComponents'
import AlternateView from '../AlternateView'

import {
  SimilarVideosComponent,
  SimilarVideosHeading,
  SimilarVideosList,
} from './styledComponents'

class SimilarVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.fetchVideosList()
  }

  componentWillUnmount() {
    this.setState({
      apiStatus: apiStatusConstants.initial,
      videosList: [],
    })
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
    const apiStatus = await fetchVideosData(pageOptions.home)

    const {videosData} = this.context
    this.setState({
      apiStatus,
      videosList: videosData.slice(0, 10).map(this.formatVideoObj),
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
    const {activeTheme} = this.context
    const {videosList} = this.state

    return (
      <>
        <SimilarVideosHeading activeTheme={activeTheme} isSimilar>
          Similar Videos
        </SimilarVideosHeading>
        <SimilarVideosList>
          {videosList.map(videoObj => (
            <SimilarVideoItem key={videoObj.id} videoObj={videoObj} />
          ))}
        </SimilarVideosList>
      </>
    )
  }

  renderSimilarContent = () => {
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
      <SimilarVideosComponent>
        {this.renderSimilarContent()}
      </SimilarVideosComponent>
    )
  }
}

SimilarVideos.contextType = AppContext

export default SimilarVideos
