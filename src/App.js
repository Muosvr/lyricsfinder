import React, { Component } from 'react';
import Input from "./component/Input";
import Display from "./component/Display";

class App extends Component {
  state = {
    artistname: null,
    songname: null,
    lyrics: null
  }
  
  setArtistSong = (artist, song) =>{
    this.setState({
      artistname: artist,
      songname: song
    })
  }
  
  setLyricsText = lyrics => {
    this.setState({lyrics})
  }
  
  
  render() {
    return (
      <div 
        className="App" 
        style={{"width":"90%","textAlign":"center", "margin":"auto"}}
      >
        <p>My app</p>
        <Input 
          setArtistSongName={this.setArtistSong}
          setLyrics={this.setLyricsText}
        />
        <Display 
          artist={this.state.artistname} 
          song={this.state.songname} 
          lyrics={this.state.lyrics} />
      </div>
    );
  }
}

export default App;
