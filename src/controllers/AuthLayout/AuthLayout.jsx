import { Outlet } from "react-router"
import lunaImg from "/luna.svg"
import classes from "./AuthLayout.module.scss"

export const AuthLayout = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.logo}>
            <img src={lunaImg} className={classes["logo-image"]} alt="Luna Project logo" />
            <div className={classes["logo-text"]}>Luna Project</div>
          </div>
        </div>
        <div className={classes.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
