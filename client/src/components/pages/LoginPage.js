import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../ui/forms/LoginForm";
import axios from "axios"

function LoginPage() {

    const Login = details => {
        axios.post(`/checkLogin`, { details }).then((res) => {
            if (res.data === "sqli attemp") {
                alert("no sqli attemps here!!")
            }

            if (res.data === "Invalid email or password") {
                alert("Invalid email or password")
            }

            if (res.data.msg === "User-found") {
                window.location.href = `${origin}/Home/${res.data.user_id}/myDogs`
            }
        });
    }

    const LogOut = details => { console.log("logout") }

    return (
        <div className="Login-page">
            <LoginForm Login={Login} />
            <Link to="/SignUp">sign up</Link>
        </div>
    )
}

export default LoginPage;