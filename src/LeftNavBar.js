import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
 import LeftBarItem from './LeftBarItem';
export default function LeftNavBar(){
    const[clicked,setClicked] = React.useState("false")
    const leftItems = [
        {id:Home,value: {
            HomeOutlinedIcon ,
            HomeIcon
        }
    },
    {id:NotificationsIcon, value:{NotificationsNoneOutlinedIcon,NotificationsIcon
    }}

    ]

    

    function handleClick(){
        setClicked(!clicked)
    }



    return <div>
   <nav>
    <LeftBarItem onClick={handleClick}
     switchIcon={clicked? <HomeOutlinedIcon /> : <HomeOutlinedIcon />}
     
    />
     

   </nav>
    </div>

}
