import React from "react"


import CreatAcctpt1 from "./CreateAcctPt1";


export default function LoginPage(){

    const [show, setShow] = React.useState(false)

    const styles= {display: show? "none":"Block"}
    const blurStyle = {filter: show? "blur(2px)":"blur(0px)"}

    function createAccount(){
        setShow(!show)
    }
    console.log(styles)
    return(
    
        <div className="login" >
                <div className="blue-divider" style={blurStyle}> 
                </div>
               

<CreatAcctpt1 style={styles}/>
        <div className="login-info" style={blurStyle}> 
            
        <div className="login-container">
        <img src="https://img.icons8.com/color/48/000000/twitter--v1.png"  />
   
            <h1>See what's happening in the world right now</h1>
            <h2>Join Twitter Today.</h2>

            <div className="login-btns">
            
                <button type="button" onClick={createAccount} className="signup-btn" > Sign up</button>

                <button type="button" className="login-btn"> Log in </button>
            </div>
        </div>
            </div>

        

                

                
                
            </div>
    
            
    )
}