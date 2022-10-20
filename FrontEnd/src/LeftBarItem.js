import React from 'react';

export default function LeftBarItem(props){

const styles ={fontWeight: props.on ? "800":"500"}


return(
<div onClick={props.toggle} className="left-item"  >
    {props.on? props.value.clicked: props.value.notClicked}  
    <h1 style={styles}> {props.text}
        </h1>
   

</div>



)
    
}