import { useState } from 'react'
import lunaImg from '/luna.svg'
import './App.css'

import LoginFormController from "./LoginFormController/LoginFormController.jsx"


function App() {

    return (
        <div className="root">
            <div className="header">
                <div className="logo-container">
                    <img src={lunaImg} className="logo-image" alt="Luna logo"/>
                </div>
                <div className="logo-text">Luna Project</div>
            </div>
            <div className="contet">
                <LoginFormController/>
            </div>
        </div>
    )
}

export default App
