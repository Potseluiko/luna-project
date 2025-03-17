import { Outlet, Link } from "react-router"
import lunaImg from "/luna.svg"
import classes from "./AuthLayout.module.scss"

export const AuthLayout = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <Link to={"/"} className={classes.logo}>
            <img src={lunaImg} className={classes["logo-image"]} alt="Luna Project logo" />
            <span className={classes["logo-text"]}>Luna Project</span>
          </Link>
        </div>
        <div className={classes.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
