import { useState } from "react"
import SignInForm from "../SignInForm/SignInForm.jsx"

function SignInFormController() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const onChange = (data) => {
    setFormData({
      ...formData,
      ...data,
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault()

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
        console.log("SUCCESS", body)
      } else {
        console.log("ERROR", body)
      }
    } catch (error) {
      console.error("Submit error: ", error)
    }
  }

  return <SignInForm email={formData.email} password={formData.password} onChange={onChange} onSubmit={onSubmit} />
}

export default SignInFormController
