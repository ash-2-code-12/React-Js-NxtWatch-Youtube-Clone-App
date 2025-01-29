import styled from 'styled-components'
import {themeOptions} from '../../context/resources'
import {PrimaryButton} from '../../styledComponents'

export const VideoItemDetailsComponent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;

  @media (min-width: 576px) {
    padding: 20px 16px;
  }

  @media (min-width: 1012px) {
    flex-direction: row;
  }
`
export const VideoDetailsContainer = styled.section`
  padding: 0;
  width: 100%;
  height: 100%;

  @media (min-width: 1012px) {
    max-width: 880px;
  }
`
export const VideoPlayerContainer = styled.section`
  width: 100%;
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: center;
  background-color: #181818;
  border-radius: 12px;

  @media (max-width: 575px) {
    aspect-ratio: 16 / 9;
    border-radius: 0;
  }
`
export const VideoPlayer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  margin: auto 0;
  overflow: hidden;
`
export const VideoPlayerTitle = styled.h3`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  margin: 8px 12px 0 12px;
  font-size: 21px;
  font-family: 'Roboto';
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#181818' : '#f1f1f1'};
`
export const VideoPlayerDetails = styled.div`
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 12px 0;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const VideoInterationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  @media (min-width: 576px) {
    width: 308px;
  }
`
export const LikeDisLikeContainer = styled.div`
  margin: 0;
  padding: 6px;
  background-color: ${props =>
    props.activeTheme === themeOptions.light ? '#ebebeb' : '#383838'};
  display: flex;
  border-radius: 16px;
`
export const LikeBtn = styled(PrimaryButton)`
  background-color: ${props =>
    props.activeTheme === themeOptions.light ? '#ebebeb' : '#383838'};
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#424242' : '#f4f4f4'};
  width: 84px;
  height: 22px;
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  border-right: 1.6px solid
    ${props =>
      props.activeTheme === themeOptions.light ? '#424242' : '#f4f4f4'};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`
export const DislikeBtn = styled(LikeBtn)`
  width: 100px;
  border: none;
  border-radius: 18px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin: 0;
`
export const SaveBtn = styled(LikeBtn)`
  border: none;
  border-radius: 18px;
  width: 88px;
  margin: 0 0 0 20px;
  height: 34px;
`
export const VideoChannelInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 576px) {
    width: 320px;
  }
`
export const VideoChannelInfo = styled.div`
  display: flex;
  align-items: center;
`
export const VideoChannelLogo = styled.img`
  border-radius: 50%;
  width: 44px;
  margin: 0 8px 0 0;
`
export const ChannelNameCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
`
export const VideoChannelName = styled.p`
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#181818' : '#f1f1f1'};
  font-weight: 500;
  margin: 0;
`
export const VideoViewsDate = styled.p`
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#606060' : '#909090'};
  margin: 0;
  font-size: 14px;
  font-weight: 400;
`
export const SubscriberCount = styled(VideoViewsDate)`
  font-size: 14px;
  margin: 0 8px 0 0;
  display: flex;
  gap: 6px;
`
export const SubscriberText = styled(SubscriberCount)`
  // display: none;
  margin: 0;
  @media (min-width: 576px) {
    display: block;
  }
`
export const SubscribeBtn = styled(SaveBtn)`
  width: 124px;
`
export const VideoDescViewDateContainer = styled.div`
  background-color: ${props =>
    props.activeTheme === themeOptions.light ? '#ebebeb' : '#383838'};
  padding: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const VideoDesc = styled.p`
  padding: 0;
  margin: 0;
  color: ${props =>
    props.activeTheme === themeOptions.light ? '#181818' : '#f1f1f1'};
`
