import React from "react"

export default function CreateInputs(props){
const [username, setUserName] = React.useState({username: ""})
    const blueborder = {border: props.on? "3px #6699cc solid": "2px lightgrey solid"}
  
    function handleChange(event){
    const {name, value} = event.target
    setUserName(prevname => ({
       
        [name]:value
    }))

  }
  console.log(username)
    return(

        <div >
            <label for="tweet">{props.text}:</label>
            <input type="text"  
                    className="create-input" 
                    style={blueborder}  
                    onClick={props.toggle}  
                    placeholder={props.text}
                    name="username"
                    onChange={handleChange}
                    value={username.username}>
                        
                
                </input> 
               

            </div>
    )

}