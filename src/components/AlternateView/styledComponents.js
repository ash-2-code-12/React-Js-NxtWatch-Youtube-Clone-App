import styled from 'styled-components'
import {
  NotFoundImg,
  NotFoundHeading,
  NotFoundDesc,
} from '../NotFoundPage/styledComponents'

import {PrimaryButton} from '../../styledComponents'

export const AlternateViewComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`
export const AlternateImg = styled(NotFoundImg)`
  max-width: 360px;
  margin: 0;
`
export const AlternateHeading = styled(NotFoundHeading)`
  margin: 0;
`
export const AlternateDesc = styled(NotFoundDesc)`
  margin: 0;
`
export const RetryFetchBtn = styled(PrimaryButton)`
  width: 80px;
  margin: 0;
`
