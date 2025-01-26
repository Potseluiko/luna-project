import Button from "../components/button"
import Input from "../components/input"
import Link from "../components/Link"
import classes from "./styles.module.scss"

function SignInForm({ onChange, ...props }) {
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
        <Button type="submit" disabled={props.isLoading}>
          Sign in
        </Button>
      </form>
      <div className={classes.footer}>
        <Link href="/sign-up">Sign up</Link>
        <br />
        <Link href="/forgot-password">Forgot your password?</Link>
      </div>
    </>
  )
}

export default SignInForm
