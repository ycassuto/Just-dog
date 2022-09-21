import React, { useState } from 'react';
import "../../../styles/Login&SignupForm.scss";

function LoginForm({ Login, error }) {

    const [details, setDetails] = useState({ email: "", password: "" })

    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    }

    return (
        <div className='login-form'>
            <form onSubmit={submitHandler}>
                <span><h2>Login</h2></span>
                <div className='form-field'>
                    <label htmlFor='email'>Email:</label><br />
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        onChange={e => setDetails({ ...details, email: e.target.value })}
                        value={details.email}
                    />
                </div>
                <div className='form-field'>
                    <label htmlFor='password'>Password:</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        onChange={e => setDetails({ ...details, password: e.target.value })}
                        value={details.password}
                    />
                </div>
                <input type='submit' value='Login' className='form-submit'></input>
            </form>
        </div>
    )
}

export default LoginForm