import classnames from "classnames"
import classes from "./Button.module.scss"

const Button = (props) => {
  const { className, fullWidth, children, ...rest } = props

  return (
    <button
      className={classnames(classes.button, className, { [classes["full-width"]]: fullWidth }, classes.medium)}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
