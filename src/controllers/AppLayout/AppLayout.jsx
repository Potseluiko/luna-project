import { Outlet, Link } from "react-router"
import lunaImg from "/luna.svg"
import classes from "./AppLayout.module.scss"

export const AppLayout = () => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes["header-left"]}>
            <Link to={"/"} className={classes.logo}>
              <img src={lunaImg} className={classes["logo-image"]} alt="Luna Project logo" />
              <span className={classes["logo-text"]}>Luna Project</span>
            </Link>
          </div>
          <div className={classes["header-right"]}>
            <Link to={"/login"}>Sign In</Link>
            <Link to={"/register"}>Sign Up</Link>
          </div>
        </div>
        <div className={classes.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
