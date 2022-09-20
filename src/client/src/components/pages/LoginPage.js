import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../ui/forms/LoginForm";
import axios from "axios"
import { serverURL } from "../../serverURL";
import { useUpdateUserId } from "../../Contexts"

function LoginPage() {
    const navigate = useNavigate();
    const userIdUpdate = useUpdateUserId()

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

    return (
        <div className="Login-page">
            <LoginForm Login={Login} />
            <Link to="/SignUp">sign up</Link>
        </div>
    )
}

export default LoginPage;