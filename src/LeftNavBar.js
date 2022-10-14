import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
 import LeftBarItem from './LeftBarItem';

export default function LeftNavBar(){
 
    const leftItemsData = [
        {id:Home,value: {
            HomeOutlinedIcon ,
            HomeIcon
        },
        on:true
    },
    {id:NotificationsIcon, value:{NotificationsNoneOutlinedIcon,NotificationsIcon
    }, on:false}

    ]
    const[leftItems,setLeftItems] = React.useState(leftItemsData)


    const itemsElts = leftItems.map(item => (
          <LeftBarItem id={item.id} value={item.value} on={item.on} toggle={() => toggle(square.id)}/>

    ))
       

    function toggle(id) {
        setLeftItems(prevLeftItem => {
            return prevLeftItem.map((item) => {
                return item.id === id ? {...item, on: !item.on} : item
            })
        })
    }



    return <div>
   <nav>
    <itemsElts />
     

   </nav>
    </div>

}
