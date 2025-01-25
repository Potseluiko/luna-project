import "./LoginForm.css"

function LoginForm(props) {
  const onChange = (event) => {
    props.onChange({
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="login-form">
      <div className="login-form__title">Sign in</div>

      <form onSubmit={props.onSubmit}>
        <div className="login-form__field">
          <input value={props.email} type="text" name="email" placeholder="Email" onChange={onChange} />
        </div>
        <div className="login-form__field">
          <input value={props.password} type="password" name="password" placeholder="Password" onChange={onChange} />
        </div>
        <div>
          <button type="submit">Sign in</button>
        </div>
        <div className="login-form__footer">
          <p>
            <a href="/register" className="login-form__link">
              Sign up
            </a>
          </p>
          <p>
            <a href="/forgot-password" className="login-form__link">
              Forgot your password??
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
