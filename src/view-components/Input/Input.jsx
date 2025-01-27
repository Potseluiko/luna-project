import classnames from "classnames"
import classes from "./Input.module.scss"

const Input = (props) => {
  const { className, fullWidth, ...rest } = props

  return (
    <input
      className={classnames(classes.input, className, { [classes["full-width"]]: fullWidth }, classes.medium)}
      {...rest}
    />
  )
}

export default Input
