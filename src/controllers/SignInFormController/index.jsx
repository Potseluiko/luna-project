import { useState } from "react"
import SignInForm from "../../components/SignInForm/index.jsx"

function SignInFormController() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const onChange = (data) => {
    setError("")

    setFormData({
      ...formData,
      ...data,
    })
  }

  const clearPassword = () => {
    setFormData({
      ...formData,
      password: "",
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    setIsLoading(true)

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })

      const body = await response.json()

      if (response.ok) {
        setError("")
        console.log("Sign in successful. Redirecting to the App.")
      } else {
        setError(body.message)
        clearPassword()
      }
      setIsLoading(false)
    } catch (error) {
      console.error("Submit error: ", error)
      setError("Something went wrong. Try again later")
      setIsLoading(false)
    }
  }

  return (
    <SignInForm
      email={formData.email}
      password={formData.password}
      error={error}
      isLoading={isLoading}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}

export default SignInFormController
