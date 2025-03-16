import { Link } from "react-router"
import Button from "../../view-components/Button/Button.jsx"
import Input from "../../view-components/Input/Input.jsx"
import LinkNormal from "../../view-components/Link/Link.jsx"

import classes from "./LoginForm.module.scss"

export const LoginForm = ({ onChange, ...props }) => {
  const handleChange = (event) => {
    onChange({
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <div className={classes.title}>Sign In</div>
      <form onSubmit={props.onSubmit}>
        <div className={classes.field}>
          <Input
            fullWidth
            autoFocus="autofocus"
            autoComplete="email"
            label="false"
            placeholder="Email"
            type="email"
            name="email"
            value={props.email}
            required
            onChange={handleChange}
          />
        </div>
        <div className={classes.field}>
          <Input
            fullWidth
            autoComplete="current-password"
            label="false"
            placeholder="Password"
            type="password"
            name="password"
            value={props.password}
            required
            onChange={handleChange}
          />
        </div>
        {!!props.error && <div className={classes.error}>{props.error}</div>}
        <Button fullWidth type="submit" disabled={props.isPending}>
          Sign In
        </Button>
      </form>
      <div className={classes.footer}>
        <Link to="/register">Sign up</Link>
        <br />
        <LinkNormal href="/forgot-password">Forgot your password?</LinkNormal>
      </div>
    </>
  )
}
