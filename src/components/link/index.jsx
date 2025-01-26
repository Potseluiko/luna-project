import classnames from "classnames"
import classes from "./styles.module.scss"

const Link = (props) => {
  const { className, children, ...rest } = props

  return (
    <a className={classnames(classes.link, className)} {...rest}>
      {children}
    </a>
  )
}

export default Link
