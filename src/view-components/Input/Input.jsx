import classnames from "classnames"
import classes from "./Input.module.scss"

const Input = (props) => {
  const { className, ...rest } = props

  return <input className={classnames(classes.input, className)} {...rest} />
}

export default Input
