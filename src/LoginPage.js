import React from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default function LoginPage(){
    return(<div className="login">
        <div className="blue-divider"> 
        </div>

        <div className="login-info">
        <button type="button" className="enter-btn"> Sign up</button>
        <button type="button" className="enter-btn"> Log in </button>

        </div>

        
        
    </div>
    )
}