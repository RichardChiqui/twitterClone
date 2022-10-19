import React from "react"

export default function CreateInputs(props){

    const blueborder = {border: props.on? "3px #6699cc solid": "2px lightgrey solid"}
    
    return(

        <div>
            <label for="tweet">Name:</label>
<input type="text"  style={blueborder} className="create-input" onClick={props.toggle}  placeholder="Name"></input>
        
<label for="tweet">Email:</label>
<input type="text"  style={blueborder} className="create-input" onClick={props.toggle} placeholder="Email"></input>
        

            </div>
    )

}