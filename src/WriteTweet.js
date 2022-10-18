import React from "react"
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';

export default function(){
    return(<div className="writetweet-section">
      
<label for="tweet"></label>
<input type="text"  className="tweet-input"placeholder="What is Happening?"></input>
        <div className="tweet-options">
            <div className="tweet-imports">
            <GifBoxOutlinedIcon />
            <InsertPhotoOutlinedIcon />
            <BarChartOutlinedIcon />
            <SentimentSatisfiedOutlinedIcon />


        </div>
        <button type="button" className="write-btn">Tweet </button>

        </div>

        
    </div>)
}