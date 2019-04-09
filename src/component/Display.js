import React from "react";

function Display(props){
    return (
      <div>
        <p>{props.artist}</p>
        <p>{props.song}</p>
        <div>{props.lyrics && props.lyrics
          .split("\n\n")
          .map((paragraph, index)=>{return <p key={index}>{paragraph}</p>})
        }</div>
      </div>
    )
}

export default Display;