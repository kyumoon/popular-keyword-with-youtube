import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './index.scss'
import Searchbar from './components/searchbar';
import PopularKeywordList from './components/popular_keyword_list'
import VideoDetail from './components/video_detail'
import VideoList from './components/video_list'

class App extends Component {

  render() {
    return (
      <div className="App">
          <Searchbar />
          <PopularKeywordList />
          <VideoDetail />
          <VideoList />
      </div>
    );
  }

}

export default App;
