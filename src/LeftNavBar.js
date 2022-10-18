import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
 import LeftBarItem from './LeftBarItem';
 import MailIcon from '@mui/icons-material/Mail';
 import BookmarkIcon from '@mui/icons-material/Bookmark';
 import PersonIcon from '@mui/icons-material/Person';

export default function LeftNavBar(){
 
    const leftItemsData = [
        {key:"Home", 
         value: {"clicked" : <HomeIcon  style={{ fontSize: "35px" }}  />,
                  "notClicked": <HomeOutlinedIcon style={{ fontSize: "35px" }} />
                },
         on:true,
         text:"Home"

    }   ,

    {key:"Notification", 
        value:{"clicked": <NotificationsIcon style={{ fontSize: "35px" }} />,
            "notClicked" : <NotificationsNoneOutlinedIcon style={{ fontSize: "35px" }}/>
             }, 
    on:false,
    text:"Notification"
},
     {key:"Mail",
      value:{"clicked":<MailIcon style={{ fontSize: "35px" }}/>,
              "notClicked": <MailOutlinedIcon style={{ fontSize: "35px" }}/>

      },
      on:false,
      text:"Mail"
     },
     {key:"BookMark",
       value:{"clicked": <BookmarkIcon style={{ fontSize: "35px" }}/>,
               "notClicked" : <BookmarkBorderOutlinedIcon style={{ fontSize: "35px" }}/>

       },
       on:false,
       text:"BookMark"
      

     },
     {
        key:"Profile",
        value: {
            "clicked": <PersonIcon style={{ fontSize: "35px" }}/>,
            "notClicked" : <PersonOutlineOutlinedIcon style={{ fontSize: "35px" }}/>
        },
        on:false,
        text:"Profile"
        
     }

    ]


     const[leftItems,setLeftItems] = React.useState(leftItemsData)


    const itemsElts = leftItems.map(item => (
          <LeftBarItem key={item.key} value={item.value} on={item.on} toggle={() => toggle(item.key)} text={item.text}/>

    ))
    // !item.on

    function toggle(key) {
        setLeftItems(prevLeftItem => {
            return prevLeftItem.map((item) => {
                return item.key === key ? {...item, on:item.on? item.on:!item.on } : {...item, on:false}
            })
        })
    }
    



    return (
        <div className="left-section">
            <img src="https://img.icons8.com/color/48/000000/twitter--v1.png"  />
   
   
   {itemsElts}

   <button type="button" className="tweet-btn">Tweet </button>

     

   
    </div>
    )

}
