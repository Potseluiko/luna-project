import classnames from "classnames"
import classes from "./Button.module.scss"

const Button = (props) => {
  const { className, children, ...rest } = props

  return (
    <button className={classnames(classes.button, className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
