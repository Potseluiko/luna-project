import SignInFormController from "../../controllers/SignInFormController/index.jsx"
import lunaImg from "/luna.svg"
import classes from "./styles.module.scss"

function App() {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src={lunaImg} className={classes["logo-image"]} alt="Luna logo" />
          <div className={classes["logo-text"]}>Luna Project</div>
        </div>
      </div>
      <div className={classes.content}>
        <SignInFormController />
      </div>
    </div>
  )
}

export default App
