import SignInFormController from "../SignInFormController/SignInFormController.jsx"
import lunaImg from "/luna.svg"
import styles from "./App.module.scss"

function App() {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles["logo-container"]}>
          <img src={lunaImg} className={styles["logo-image"]} alt="Luna logo" />
        </div>
        <div className={styles["logo-text"]}>Luna Project</div>
      </div>
      <div className={styles.contet}>
        <SignInFormController />
      </div>
    </div>
  )
}

export default App
