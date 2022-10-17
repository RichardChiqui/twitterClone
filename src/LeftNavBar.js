import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
 import LeftBarItem from './LeftBarItem';

export default function LeftNavBar(){
 
    const leftItemsData = [
        {key:"Home", 
         value: {"homeClicked" : <HomeIcon />,
                  "homeNotClicked": <HomeOutlinedIcon />
                },
         on:false
    }    ,

    {key:"Notification", 
        value:{"notiClicked": <NotificationsNoneOutlinedIcon />,
            "notiNotClicked" : <NotificationsIcon />
             }, 
    on:false
}
    ]


     const[leftItems,setLeftItems] = React.useState(leftItemsData)


    const itemsElts = leftItems.map(item => (
          <LeftBarItem key={item.key} value={item.value} on={item.on} toggle={() => toggle(item.key)}/>

    ))
       

    function toggle(key) {
        setLeftItems(prevLeftItem => {
            return prevLeftItem.map((item) => {
                return item.key === key ? {...item, on: !item.on} : item
            })
        })
    }
    



    return (
        <div>
   <nav className="nav-section">
   hello
   {itemsElts}
     

   </nav>
    </div>
    )

}
