import React from "react"
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import WriteTweet from "./WriteTweet";

export default function HomeTweets(){
      return(

<div className="tweet-section">
      <div className="tweet-header">
           <h3 className="tweet-title">Home {<AutoAwesomeOutlinedIcon />}</h3>
 
      </div>

    
    <WriteTweet />

</div>


      )
}

  


