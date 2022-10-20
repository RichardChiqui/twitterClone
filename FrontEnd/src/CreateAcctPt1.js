import React from "react"
import CreateInputs from "./CreateInputs"
import {BrowserRouter as Router, Link} from 'react-router-dom';
import useComponentVisible from "./CustomeHooks/useCompVis";

export default function CreatAcctpt1(props){
 
    const inputfield = [{key:"Name", on:false, text: "Name"},{key:"Email",on:false, text:"Email"}]
    const[inputData, setInputData] = React.useState(inputfield)

    

const itemsElts = inputData.map(item => (
    <CreateInputs key={item.key} text={item.text} on={item.on} toggle={() => toggle(item.key)}/>

))

 function toggle(key){
    
    setInputData(previnputfield => {
        return previnputfield.map((item) => {
            return item.key === key ? {...item, on:item.on? item.on:!item.on } : {...item, on:false}
        })
    })
}





    return(
<div className="create-acct-section" style={props.style}>

    <div className="create-container"    >
<h2>Create your account</h2>

 {itemsElts}
 <Link to="/home">
    <button type="button" className="create-btn">Next </button>

 </Link>

 
     
 
    </div>
         
    </div>


    )
}