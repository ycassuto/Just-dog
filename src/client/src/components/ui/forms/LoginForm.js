import React, { useState } from 'react';
import "../../../styles/FormTemplate.scss";

function LoginForm({ Login, toggle }) {

    const [details, setDetails] = useState({ email: "", password: "" })

    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    }

    return (
        <div className='form-template'>
            <form onSubmit={submitHandler}>
                <div className='form-title'><p>Login</p></div>
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
            <p className="signuplogin-click" onClick={toggle}>Did not sign up? click here</p>
        </div>
    )
}

export default LoginForm