import SignInFormController from "./SignInFormController/SignInFormController.jsx"
import lunaImg from "/luna.svg"
import "./App.css"

function App() {
  return (
    <div className="root">
      <div className="header">
        <div className="logo-container">
          <img src={lunaImg} className="logo-image" alt="Luna logo" />
        </div>
        <div className="logo-text">Luna Project</div>
      </div>
      <div className="contet">
        <SignInFormController />
      </div>
    </div>
  )
}

export default App
