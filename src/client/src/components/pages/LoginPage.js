import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { serverURL } from "../../serverURL";
import { useUpdateUserId } from "../../Contexts"
import LoginForm from "../ui/forms/LoginForm";
import SignUpForm from "../ui/forms/SignUpForm"
import "../../styles/Pages/LoginPage.scss"

function LoginPage() {
    const navigate = useNavigate();
    const userIdUpdate = useUpdateUserId()
    const [loginSignupToggle, setLoginSingupToggle] = useState(true)

    const toggleLoginSignup = () => {
        setLoginSingupToggle(!loginSignupToggle)
    }

    const Login = details => {
        axios.post(`${serverURL}/checkLogin`, { details }).then((res) => {
            if (res.data === "sqli attemp") {
                alert("no sqli attemps here!!")
            }

            if (res.data === "Invalid email or password") {
                alert("Invalid email or password")
            }

            if (res.data.msg === "User-found") {
                userIdUpdate(res.data.user_id);
                navigate(`/Home/myDogs`)
            }
        });
    }

    const SignUp = details => {
        axios.post(`${serverURL}/registerNewUser`, { newUser: details }).then((res) => {
            if (res.data === "sqli attemp") {
                alert("no sqli attemps here!!")
            }

            if (res.data === "Email in use") {
                alert("email in use")
            }

            if (res.data === "user added") {
                alert("user added")
                setLoginSingupToggle(true)
            }
        });
    }

    return (<>
        <div className="Login-page">
            {loginSignupToggle ? <LoginForm Login={Login} toggle={toggleLoginSignup} /> : <SignUpForm SignUp={SignUp} toggle={toggleLoginSignup} />}
        </div>
    </>
    )
}

export default LoginPage;