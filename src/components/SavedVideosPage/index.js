import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

import MainLayout from '../MainLayout'
import AlternateView from '../AlternateView'
import PageIndicator from '../PageIndicator'
import AltVideoItem from '../AltVideoItem'

import AppContext from '../../context/AppContext'
import {
  apiStatusConstants,
  alternateViewOptions,
  pageOptions,
  themeOptions,
} from '../../context/resources'

import {LoaderView} from '../HomePage/styledComponents'
import {AltVideosSection} from '../../styledComponents'

const SavedPageContainer = styled(MainLayout)`
  background-color: ${props =>
    props.activeTheme === themeOptions.light ? '#f9f9f9' : '#0f0f0f'};
`

class SavedVideosPage extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    const {togglePage} = this.context
    togglePage(pageOptions.saved)
    this.fetchVideosData()
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

  fetchVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {savedVideoIds} = this.context
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const formattedData = fetchedData.videos.map(this.formatVideoObj)
      const savedVideosList = formattedData.filter(each =>
        savedVideoIds.includes(each.id),
      )
      console.log(savedVideoIds)
      this.setState({
        videosList: savedVideosList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({videosList: [], apiStatus: apiStatusConstants.failure})
    }
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
        <PageIndicator activeTheme={activeTheme} page={pageOptions.saved} />
        <AltVideosSection>
          {videosList.map(videoObj => (
            <AltVideoItem key={videoObj.id} videoObj={videoObj} />
          ))}
        </AltVideosSection>
      </>
    )
  }

  renderSavedVideosContent = () => {
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
      <SavedPageContainer data-testid="savedVideos">
        {this.renderSavedVideosContent()}
      </SavedPageContainer>
    )
  }
}

SavedVideosPage.contextType = AppContext

export default SavedVideosPage
