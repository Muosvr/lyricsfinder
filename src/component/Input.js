import React from 'react';
import axios from 'axios';

class Input extends React.Component {
  state = {
    artistname: null,
    songname: null,
    lyrics: null
  }
  
  handleClick = () => {
    const url = "https://api.lyrics.ovh/v1/" 
      + this.state.artistname
      + "/" + this.state.songname;
    console.log(url);
    console.log("artistname", this.state.artistname,"songname", this.state.songname);
    
    axios.get(url)
    .then(response=>{
      console.log(response.data.lyrics);
      
      this.props.setLyrics(response.data.lyrics);
    })
    
    this.props.setArtistSongName(
      this.state.artistname, 
      this.state.songname
    );
  }
  
  setArtistName = e => {
    this.setState({
      artistname: e.target.value
    })
  }
  
  setSongName = e =>{
    this.setState({
      songname:e.target.value
    })
  }
  
    render(){
      return(
          <div>
            <input onChange={this.setArtistName} placeholder="Artist Name" />
            <input onChange={this.setSongName} placeholder="Song Name" />
            <button onClick={this.handleClick}>Submit</button>
          </div>
        )
    }
}

export default Input