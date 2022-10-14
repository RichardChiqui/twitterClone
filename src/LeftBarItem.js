import React from 'react';

export default function LeftBarItem(props){



return(
<div>
    
{props.on? props.value[0]:props.value[1]}
</div>



)
    
}