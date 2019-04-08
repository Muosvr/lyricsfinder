import React from "react";
function Display(props){
    return(
        <div>
          Artist: {" "}
          {props.artist}
          <br />
          
          Song: {" "}
          {props.song}
          <br />
          
          Lyrics: {" "}
          <div>{ props.lyrics &&
          props.lyrics.split("\n\n").map((paragraph, index)=>{
            return <p key={index}>{paragraph}</p>
          })
            
          }</div>
        </div>
    )
};

export default Display;