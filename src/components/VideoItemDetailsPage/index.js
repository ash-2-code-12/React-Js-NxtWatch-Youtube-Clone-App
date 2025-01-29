import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'

import {BiLike, BiDislike} from 'react-icons/bi'
import {IoMdThumbsDown, IoMdThumbsUp} from 'react-icons/io'
import {IoBookmarkOutline, IoBookmark} from 'react-icons/io5'

import AppContext from '../../context/AppContext'
import {apiStatusConstants, alternateViewOptions} from '../../context/resources'

import AlternateView from '../AlternateView'
import {LoaderView} from '../HomePage/styledComponents'
import MainLayout from '../MainLayout'
import SimilarVideos from '../SimilarVideos'

import {
  VideoItemDetailsComponent,
  VideoDetailsContainer,
  VideoPlayerContainer,
  VideoPlayer,
  VideoPlayerDetails,
  VideoPlayerTitle,
  VideoViewsDate,
  VideoChannelInfoContainer,
  VideoChannelInfo,
  VideoChannelLogo,
  ChannelNameCountContainer,
  VideoChannelName,
  SubscriberCount,
  SubscriberText,
  SubscribeBtn,
  VideoInterationContainer,
  LikeDisLikeContainer,
  LikeBtn,
  DislikeBtn,
  SaveBtn,
  VideoDesc,
  VideoDescViewDateContainer,
} from './styledComponents'

class VideoItemDetailsPage extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoObj: {},
    isSaved: false,
    isLiked: false,
    isDisliked: false,
    isSubscribed: false,
  }

  componentDidMount() {
    this.fetchVideosData()
  }

  formatChannelObj = channelObj => ({
    name: channelObj.name,
    profileImageUrl: channelObj.profile_image_url,
    subscriberCount: channelObj.subscriber_count,
  })

  formatVideoObj = videoObj => ({
    channel: this.formatChannelObj(videoObj.channel),
    id: videoObj.id,
    description: videoObj.description,
    publishedAt: videoObj.published_at,
    thumbnailUrl: videoObj.thumbnail_url,
    title: videoObj.title,
    videoUrl: videoObj.video_url,
    viewCount: videoObj.view_count,
  })

  fetchVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const formattedVideoObj = this.formatVideoObj(fetchedData.video_details)
      const {savedVideoIds} = this.context
      this.setState({
        videoObj: formattedVideoObj,
        apiStatus: apiStatusConstants.success,
        isSaved: savedVideoIds.includes(formattedVideoObj.id),
      })
    } else {
      this.setState({videoObj: {}, apiStatus: apiStatusConstants.failure})
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

  onLike = () => this.setState(prevState => ({isLiked: !prevState.isLiked}))

  onDisLike = () =>
    this.setState(prevState => ({isDisliked: !prevState.isDisliked}))

  saveVideo = () => {
    const {addSavedVideo} = this.context
    const {videoObj} = this.state
    const {id} = videoObj
    addSavedVideo(id)
  }

  unsaveVideo = () => {
    const {removeSavedVideo} = this.context
    const {videoObj} = this.state
    const {id} = videoObj
    removeSavedVideo(id)
  }

  onSave = () => {
    const {isSaved} = this.state
    if (isSaved) {
      this.setState({isSaved: !isSaved}, this.unsaveVideo)
    } else {
      this.setState({isSaved: !isSaved}, this.saveVideo)
    }
  }

  onSubscribe = () =>
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))

  renderVideoPlayer = videoUrl => (
    <VideoPlayerContainer>
      <VideoPlayer>
        <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
      </VideoPlayer>
    </VideoPlayerContainer>
  )

  renderChannelInfo = (
    profileImageUrl,
    activeTheme,
    name,
    subscriberCount,
    isSubscribed,
  ) => (
    <VideoChannelInfoContainer>
      <VideoChannelInfo>
        <VideoChannelLogo src={profileImageUrl} alt="channel logo" />
        <ChannelNameCountContainer>
          <VideoChannelName activeTheme={activeTheme}>{name}</VideoChannelName>
          <SubscriberCount activeTheme={activeTheme}>
            {subscriberCount}
            <SubscriberText as="span" activeTheme={activeTheme}>
              subscribers
            </SubscriberText>
          </SubscriberCount>
        </ChannelNameCountContainer>
      </VideoChannelInfo>
      <SubscribeBtn
        onClick={this.onSubscribe}
        isSubscribed={isSubscribed}
        type="button"
      >
        {isSubscribed ? 'Subscribed ✔' : `Subscribe`}
      </SubscribeBtn>
    </VideoChannelInfoContainer>
  )

  renderInteractionContainer = (isDisliked, isLiked, activeTheme, isSaved) => (
    <VideoInterationContainer>
      <LikeDisLikeContainer activeTheme={activeTheme}>
        <LikeBtn
          disabled={isDisliked}
          activeTheme={activeTheme}
          type="button"
          onClick={this.onLike}
        >
          {isLiked ? (
            <IoMdThumbsUp color="#3b82f6" size="22" />
          ) : (
            <BiLike size="22" />
          )}
          Like
        </LikeBtn>
        <DislikeBtn
          disabled={isLiked}
          activeTheme={activeTheme}
          type="button"
          onClick={this.onDisLike}
        >
          {isDisliked ? (
            <IoMdThumbsDown color="#3b82f6" size="22" />
          ) : (
            <BiDislike size="22" />
          )}
          Dislike
        </DislikeBtn>
      </LikeDisLikeContainer>
      <SaveBtn activeTheme={activeTheme} type="button" onClick={this.onSave}>
        {isSaved ? (
          <IoBookmark color="#3b82f6" size="21" />
        ) : (
          <IoBookmarkOutline size="21" />
        )}
        {isSaved ? 'Saved' : 'Save'}
      </SaveBtn>
    </VideoInterationContainer>
  )

  renderSuccessView = () => {
    const {activeTheme} = this.context
    const {videoObj, isSaved, isLiked, isDisliked, isSubscribed} = this.state
    // prettier-ignore
    const {channel, description, publishedAt, title, videoUrl, viewCount} = videoObj

    const {name, profileImageUrl, subscriberCount} = channel

    return (
      <VideoItemDetailsComponent
        activeTheme={activeTheme}
        data-testid="videoItemDetails"
      >
        <VideoDetailsContainer>
          {this.renderVideoPlayer(videoUrl)}

          <VideoPlayerTitle activeTheme={activeTheme}>{title}</VideoPlayerTitle>

          <VideoPlayerDetails>
            {this.renderChannelInfo(
              profileImageUrl,
              activeTheme,
              name,
              subscriberCount,
              isSubscribed,
            )}

            {this.renderInteractionContainer(
              isDisliked,
              isLiked,
              activeTheme,
              isSaved,
            )}
          </VideoPlayerDetails>

          <VideoDescViewDateContainer activeTheme={activeTheme}>
            <VideoViewsDate activeTheme={activeTheme}>
              {`${viewCount} views  •  ${publishedAt}`}
            </VideoViewsDate>
            <VideoDesc activeTheme={activeTheme}>{description}</VideoDesc>
          </VideoDescViewDateContainer>
        </VideoDetailsContainer>

        <SimilarVideos />
      </VideoItemDetailsComponent>
    )
  }

  renderVideoItemDetailsContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.initial:
        return null
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return <MainLayout>{this.renderVideoItemDetailsContent()}</MainLayout>
  }
}

VideoItemDetailsPage.contextType = AppContext

export default VideoItemDetailsPage
