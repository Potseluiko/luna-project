import spinner from "../assets/spinner.svg"

import "./SignInForm.css"

function SignInForm(props) {
  const onChange = (event) => {
    props.onChange({
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="signin-form">
      <div className="signin-form__title">Sign in</div>

      <form onSubmit={props.onSubmit} method="post">
        <div className="signin-form__field">
          <input
            autoFocus="autofocus"
            autoComplete="email"
            label="false"
            placeholder="Email"
            type="email"
            name="email"
            value={props.email}
            required
            onChange={onChange}
          />
        </div>
        <div className="signin-form__field">
          <input
            autoComplete="current-password"
            label="false"
            placeholder="Password"
            type="password"
            name="password"
            value={props.password}
            required
            onChange={onChange}
          />
        </div>
        {!!props.error && <div className="signin-form__error">{props.error}</div>}
        <div>
          <button type="submit" disabled={props.isLoading}>
            <span className={props.isLoading ? "invisible" : ""}>Sign in</span>
            {props.isLoading && <img src={spinner} className="signin-form__spinner" alt="" />}
          </button>
        </div>
        <div className="signin-form__footer">
          <p>
            <a href="/register" className="signin-form__link">
              Sign up
            </a>
          </p>
          <p>
            <a href="/forgot-password" className="signin-form__link">
              Forgot your password?
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
