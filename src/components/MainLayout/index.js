import {Component} from 'react'

import AppContext from '../../context/AppContext'
import {
  PageContainer,
  ContentContainer,
  MainContentContainer,
} from '../../styledComponents'

import Sidebar from '../Sidebar'
import Navbar from '../Navbar'

class MainLayout extends Component {
  render() {
    const {children} = this.props
    const {activeTheme} = this.context

    return (
      <PageContainer>
        <Navbar />
        <ContentContainer>
          <Sidebar />
          <MainContentContainer activeTheme={activeTheme}>
            {children}
          </MainContentContainer>
        </ContentContainer>
      </PageContainer>
    )
  }
}

MainLayout.contextType = AppContext

export default MainLayout
