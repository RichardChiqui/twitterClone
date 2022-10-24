import React from "react"
import {BrowserRouter as Router, Link} from 'react-router-dom';
import axios, * as others from 'axios';


export default function CreatAcctpt1(props){
    
 
    const inputfield = [{key:"Name", on:false, text: "Name"},{key:"Email",on:false, text:"Email"}]
    const[inputData, setInputData] = React.useState(inputfield)
    const [username, setUserName] = React.useState({username: ""})
    const nameBorder = {border: inputData[0].on? "3px #6699cc solid": "2px lightgrey solid"}
    const emailBorder = {border: inputData[1].on? "3px #6699cc solid": "2px lightgrey solid"}
  
    function handleChange(event){
    const {name, value} = event.target
    setUserName(prevname => ({
       
        [name]:value
    }))}

    


 function toggle(key){
    
    setInputData(previnputfield => {
        return previnputfield.map((item) => {
            return item.key === key ? {...item, on:item.on? item.on:!item.on } : {...item, on:false}
        })
    })
}

function handleSubmitFn(){

    axios.post('/username', {
        
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("we in here")
    //  React.useEffect(()=>{

    //     axios.post('/username')
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err))

    // })

}


    return(
<div className="create-acct-section" style={props.style}>

    <div className="create-container"    >
<h2>Create your account</h2>

 

<form >
            <label for="tweet">Name: </label>
            <input type="text"  
                    className="create-input" 
                    style={nameBorder}  
                    onClick={() => toggle(inputData[0].key)}
                    placeholder="Name"
                    name="username"
                    onChange={handleChange}>
                </input> 

                <label for="tweet">Email: </label>
            <input type="text"  
                    className="create-input" 
                    style={emailBorder}  
                    onClick={() => toggle(inputData[1].key)}
                    placeholder="Name"
                    name="username"
                   >
                </input> 
                
       
 
 {/* <Link to="/home" onClick={handleSubmitFn}> */}
    
        <button type="button"  onClick={handleSubmitFn}className="create-btn">Next </button>

   
    
 {/* </Link> */}
 </form>
 
     
 
    </div>
         
    </div>


    )
}