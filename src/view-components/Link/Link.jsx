import classnames from "classnames"
import classes from "./Link.module.scss"

const Link = (props) => {
  const { className, children, ...rest } = props

  return (
    <a className={classnames(classes.link, className)} {...rest}>
      {children}
    </a>
  )
}

export default Link
