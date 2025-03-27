import { useState } from "react"
import { useDispatch } from "react-redux"
import { postSignIn } from "../../features/currentUser/currentUserActions"
import { LoginForm } from "../../components/LoginForm/LoginForm"

export const LoginController = () => {
  const dispatch = useDispatch()

  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const onChange = (data) => {
    setError(null)

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

    setIsPending(true)

    dispatch(
      postSignIn({
        payload: {
          email: formData.email,
          password: formData.password,
        },
      })
    )
      .unwrap()
      .then((response) => {
        console.log("Sign in successful. Redirecting to the App.", response)
        setIsPending(false)
      })
      .catch((error) => {
        if (error?.response?.data?.code === "USER_NOT_FOUND") {
          clearPassword()
        }

        setIsPending(false)
        setError(error?.response?.data?.message || "Something went wrong. Try again later")
      })
  }

  return (
    <LoginForm
      email={formData.email}
      password={formData.password}
      error={error}
      isPending={isPending}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}
