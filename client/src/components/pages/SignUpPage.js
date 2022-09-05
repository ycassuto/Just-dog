import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../ui/forms/SignUpForm";
import axios from "axios"

function SignUpPage() {

    const SignUp = details => {
        axios.post(`/registerNewUser`, { newUser: details }).then((res) => {
            if (res.data === "sqli attemp") {
                alert("no sqli attemps here!!")
            }

            if (res.data === "Email in use") {
                alert("email in use")
            }

            if (res.data === "user added") {
                alert("user added")
                window.location.href = `${origin}/`
            }
        });
    }

    return (
        <div className="Login-page">
            <SignUpForm SignUp={SignUp} />
        </div>
    )
}

export default SignUpPage;