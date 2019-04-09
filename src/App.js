import React, { Component } from 'react';
import Input from "./component/Input";
import Display from "./component/Display";

class App extends Component {
  state={
    artistname: null,
    songname: null,
    lyrics: null
  }
  
  setArtist = name => {
    this.setState({
      artistname: name
    })
  }
  setSong = name => {
    this.setState({
      songname: name
    })
  }
  setLyrics = lyrics =>{
    this.setState({lyrics})
  }
  
  render() {
    return (
      <div className="App" 
        style={{
          "textAlign":"center", 
          "margin": "auto",
          "width":"90%"
        }}
      >
        <h2>Search for a song </h2>
        <Input 
          setArtistName = {this.setArtist}
          setSongName = {this.setSong}
          setLyricsText = {this.setLyrics}
        />
        
        <Display 
          artist={this.state.artistname} 
          song= {this.state.songname}
          lyrics={this.state.lyrics} 
        />
      </div>
    );
  }
}

export default App;
