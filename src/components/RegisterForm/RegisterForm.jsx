import { Link } from "react-router"

import Button from "../../view-components/Button/Button.jsx"
import Input from "../../view-components/Input/Input.jsx"
import classes from "./RegisterForm.module.scss"

export const RegisterForm = ({ onChange, ...props }) => {
  const handleChange = (event) => {
    onChange({
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <div className={classes.title}>Sign Up</div>
      <form onSubmit={props.onSubmit}>
        <div className={classes.field}>
          <Input
            fullWidth
            autoFocus="autofocus"
            autoComplete="full-name"
            label="false"
            placeholder="Full Name"
            type="text"
            name="fullName"
            value={props.fullName}
            required
            onChange={handleChange}
          />
        </div>
        <div className={classes.field}>
          <Input
            fullWidth
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
          Sign Up
        </Button>
      </form>
      <div className={classes.footer}>
        <Link to="/login">Sign in</Link>
      </div>
    </>
  )
}
