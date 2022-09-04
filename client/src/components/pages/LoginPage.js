import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../ui/forms/LoginForm";
import axios from "axios"
import { serverURL } from "../../serverURL";

function LoginPage() {

    const Login = details => {
        axios.post(`${serverURL}/checkLogin`, { details }).then((res) => {
            if (res.data.msg === "User-found") {
                window.location.href = `${origin}/Home/${res.data.user_id}`
            }
        });
    }


    const LogOut = details => { console.log("logout") }

    return (
        <div className="Login-page">
            <LoginForm Login={Login}/>
            <Link to="/SignUp">sign up</Link>
        </div>
    )
}

export default LoginPage;