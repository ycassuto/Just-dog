import React, { useState } from "react";
import LoginForm from "../ui/LoginForm";

function LoginPage() {
    const [user, setUser] = useState({ name: "", email: "" })
    const [error, setError] = useState("");

    const Login = details => { console.log(details) }

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