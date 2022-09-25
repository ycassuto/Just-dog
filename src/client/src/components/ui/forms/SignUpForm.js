import React, { useState, useEffect } from 'react'
import validation from './SignupValidation';
import "../../../styles/FormTemplate.scss";

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
        <div className='form-template'>
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
                    {errors.full_name && <h4>{errors.full_name}</h4>}
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
                    {errors.email && <h4>{errors.email}</h4>}
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
                    {errors.password && <h4>{errors.password}</h4>}
                </div>
                <input type='submit' value='Sign Up' className='form-submit'></input>
            </form >
            <p className="signuplogin-click" onClick={toggle}>Already sign up? click here</p>
        </div>
    )
}

export default SignUpForm