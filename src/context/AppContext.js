import React from 'react'

const AppContext = React.createContext({
  activeTheme: '',
  toggleTheme: () => {},
  activePage: '',
  togglePage: () => {},
  searchQuery: '',
  fetchVideosData: () => {},
  videosData: [],
  savedVideoIds: [],
  addSavedVideo: () => {},
  removeSavedVideo: () => {},
})

export default AppContext
