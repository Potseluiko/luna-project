import {useState} from "react"

import LoginForm from "../LoginForm/LoginForm.jsx"


function LoginFormController() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const onChange = (data) => {
        setFormData({
            ...formData,
            ...data
        })
    }

    const onSubmit = () => {
        console.log("onSubmit, form data = ", formData)
    }

    return (
        <LoginForm email={formData.email} password={formData.password} onChange={onChange} onSubmit={onSubmit}/>
    )
}

export default LoginFormController
