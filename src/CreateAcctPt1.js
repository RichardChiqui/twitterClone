import React from "react"
import CreateInputs from "./CreateInputs"

export default function CreatAcctpt1(props){

    const inputfield = [{key:"Name", on:false},{key:"Email",on:false}]
    const[inputData, setInputData] = React.useState(inputfield)

    
function toggle(key){
    
    setInputData(previnputfield => {
        return previnputfield.map((item) => {
            return item.key === key ? {...item, on:item.on? item.on:!item.on } : {...item, on:false}
        })
    })
}
const itemsElts = inputData.map(item => (
    <CreateInputs key={item.key}  on={item.on} toggle={() => toggle(item.key)}/>

))

 
    return(
<div className="create-acct-section" style={props.style}>

    <div className="create-container">
<h2>Create your account</h2>

 {itemsElts}
    </div>
         
    </div>


    )
}