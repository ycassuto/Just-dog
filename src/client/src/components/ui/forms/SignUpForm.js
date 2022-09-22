import React, { useState, useEffect } from 'react'
import validation from './SignupValidation';
import "../../../styles/Login&SignupForm.scss";
function SignUpForm({ SignUp, toggle }) {

    const [details, setDetails] = useState({ full_name: "", email: "", password: "" })
    const [errors, setErrors] = useState({ err: "" });

    const submitHandler = e => {
        e.preventDefault();
        setErrors(validation(details))
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0) { //means no errors
            SignUp(details)
        }
    }, [errors])

    return (
        <div className='signup-form'>
            <form onSubmit={submitHandler}>
                <span><h2>Sign Up</h2></span>
                <div className='form-field'>
                    <label htmlFor='full_name'>Full name:</label>
                    <input
                        className='form-input'
                        type='text'
                        name='fullname'
                        onChange={e => setDetails({ ...details, full_name: e.target.value })}
                        value={details.name}
                    />
                    {errors.full_name && <p>{errors.full_name}</p>}
                </div>
                <div className='form-field'>
                    <label htmlFor='email'>Email:</label><br />
                    <input
                        className='form-input'
                        type='email'
                        name='email'
                        onChange={e => setDetails({ ...details, email: e.target.value })}
                        value={details.email}
                    />
                    {errors.email && <p>{errors.email}</p>}
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
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <input type='submit' value='Sign Up' className='form-submit'></input>
            </form >
            <p className="signuplogin-click" onClick={toggle}>Already sign up? click here</p>
        </div>
    )
}

export default SignUpForm