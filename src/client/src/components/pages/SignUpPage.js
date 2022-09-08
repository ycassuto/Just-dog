import React from "react";
import SignUpForm from "../ui/forms/SignUpForm";
import axios from "axios"
import { serverURL } from "../../serverURL";

function SignUpPage() {

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