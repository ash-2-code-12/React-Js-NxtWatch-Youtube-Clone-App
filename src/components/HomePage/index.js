import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {IoIosSearch} from 'react-icons/io'

import MainLayout from '../MainLayout'
import HomePageBanner from '../HomePageBanner'
import AlternateView from '../AlternateView'
import VideoItem from '../VideoItem'

import AppContext from '../../context/AppContext'
import {
  pageOptions,
  apiStatusConstants,
  alternateViewOptions,
} from '../../context/resources'

import {
  HomeContent,
  LoaderView,
  SearchBarContainer,
  SearchBar,
  SearchBarBtn,
  VideosSection,
} from './styledComponents'

class HomePage extends Component {
  state = {
    showBanner: true,
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    searchQuery: '',
  }

  componentDidMount() {
    const {togglePage} = this.context
    togglePage(pageOptions.home)
    this.fetchVideosList()
  }

  componentWillUnmount() {
    this.setState({
      showBanner: true,
      apiStatus: apiStatusConstants.initial,
      videosList: [],
      searchQuery: '',
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
      videosList: videosData.map(this.formatVideoObj),
    })
  }

  toggleDisplay = () => {
    this.setState({showBanner: false})
  }

  onSearchInputChange = event => {
    this.setState({searchQuery: event.target.value})
  }

  onSearchSubmit = () => {
    const {searchQuery} = this.state
    const {updateSearchQuery} = this.context
    updateSearchQuery(searchQuery)
    this.fetchVideosList()
  }

  onSearchEnter = event => {
    if (event.key === 'Enter') this.onSearchSubmit()
  }

  renderSearchBar = () => {
    const {searchQuery} = this.state
    const {activeTheme} = this.context

    return (
      <SearchBarContainer>
        <SearchBar
          value={searchQuery}
          onChange={this.onSearchInputChange}
          onKeyDown={this.onSearchEnter}
          type="search"
          placeholder="Search"
          activeTheme={activeTheme}
        />
        <SearchBarBtn
          activeTheme={activeTheme}
          type="button"
          onClick={this.onSearchSubmit}
        >
          <IoIosSearch color="#ffffff" size="22" />
        </SearchBarBtn>
      </SearchBarContainer>
    )
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

    return (
      <VideosSection>
        {videosList.map(videoObj => (
          <VideoItem key={videoObj.id} videoObj={videoObj} />
        ))}
      </VideosSection>
    )
  }

  renderHomeContent = () => {
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
    const {showBanner} = this.state
    const display = showBanner ? 'flex' : 'none'

    return (
      <MainLayout data-testid="home">
        <HomePageBanner
          data-testid="banner"
          display={display}
          toggleDisplay={this.toggleDisplay}
        />
        <HomeContent>
          {this.renderSearchBar()}
          {this.renderHomeContent()}
        </HomeContent>
      </MainLayout>
    )
  }
}

HomePage.contextType = AppContext

export default HomePage
