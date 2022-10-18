import React from 'react';
import LeftNavBar from './LeftNavBar';
import HomeTweets from './HomeTweets';


export default function Home(){
    return(<div className="home-page">
  <LeftNavBar />
  <HomeTweets />


    </div>
        )
}