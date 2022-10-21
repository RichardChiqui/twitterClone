import React from "react"
import axios from 'axios'

export default function CreateInputs(props){
const [username, setUserName] = React.useState({username: ""})
    const blueborder = {border: props.on? "3px #6699cc solid": "2px lightgrey solid"}
  
    function handleChange(event){
    const {name, value} = event.target
    setUserName(prevname => ({
       
        [name]:value
    }))

 

  }
   function allinone(){
        props.toggle
        props.handleSubmitFn(username)
    }
    

    return(

        <div >
            <label for="tweet">{props.text}:</label>
            <input type="text"  
                    className="create-input" 
                    style={blueborder}  
                    onClick={allinone}
                    
                    placeholder={props.text}
                    name="username"
                    onChange={handleChange}
                    value={username.username}>
                        
                
                </input> 
               

            </div>
    )

}