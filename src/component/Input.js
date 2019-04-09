import React, {Component} from "react";
import axios from "axios";

class Input extends Component{
  state={
    artistname: null,
    songname: null,
    lyrics: null
  }
  
  setArtist = e => {
    this.setState({
      artistname: e.target.value
    });
  }
  
  setSong = e => {
    this.setState({
      songname: e.target.value
    });
  }
  
  handleClick = () => {
    console.log(
      "artisname",
      this.state.artistname,
      "songname",
      this.state.songname
    )
    
    const url = 
    "https://api.lyrics.ovh/v1" 
    + "/"
    + this.state.artistname
    + "/"
    + this.state.songname
    console.log(url)
    
    axios(url)
    .then(response=>{
      console.log(response.data);
      this.setState({
        lyrics: response.data.lyrics
      })
      this.props.setLyricsText(response.data.lyrics);
    })
    
    this.props.setArtistName(this.state.artistname);
    this.props.setSongName(this.state.songname);
  }
    render(){
      return(
        <div>
          <input onChange={this.setArtist} placeholder="Artist Name"/>
          <input onChange={this.setSong} placeholder="Song Name" />
          <button onClick={this.handleClick} >Search </button>
        </div>
      )
    }
}

export default Input;