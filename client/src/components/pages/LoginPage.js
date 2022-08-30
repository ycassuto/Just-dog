import React, { useState } from "react";
import LoginForm from "../ui/LoginForm";
import axios from "axios"

function LoginPage() {
    const [user, setUser] = useState({ name: "", email: "" })
    const [error, setError] = useState("");

    const Login = details => {
        axios.post("http://localhost:5002/checkLogin", { details }).then((res) => {
            console.log(res.data);
        });
    }


    const LogOut = details => { console.log("logout") }

    return (
        <div className="Login-page">
            {(user.email !== "") ?
                (<div>Welcome</div>) :
                (<LoginForm Login={Login} error={error} />)}
        </div>
    )
}

export default LoginPage;