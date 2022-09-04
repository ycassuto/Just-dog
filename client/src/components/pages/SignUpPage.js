import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../ui/forms/SignUpForm";
import axios from "axios"
import { serverURL } from "../../serverURL";

function SignUpPage() {

    const SignUp = details => {
        axios.post(`${serverURL}/registerNewUser`, { newUser: details }).then((res) => {
          console.log(res)
        });
    }

    return (
        <div className="Login-page">
            <SignUpForm SignUp={SignUp}/>
        </div>
    )
}

export default SignUpPage;