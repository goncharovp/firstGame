import React, { Component } from 'react';
import './App.css';

import MainZone from "./components/MainZone"
import PlayerIcon from "./components/PlayerIcon"

class App extends React.Component {
  render() {
    return(
    <div className = "App">
      <MainZone>
      <PlayerIcon />
      </MainZone>
      
    </div>
    )
  }
}



export default App;
