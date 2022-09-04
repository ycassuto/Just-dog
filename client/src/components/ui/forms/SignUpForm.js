import React, { useState, useEffect } from 'react'
import validation from './SignupValidation';
import axios from 'axios';
import { serverURL } from '../../../serverURL';

function SignUpForm({ SignUp }) {

    const [details, setDetails] = useState({ full_name: "", email: "", password: "" })
    const [errors, setErrors] = useState({err:""});

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
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>SignUp</h2>
                <div className='form-group'>
                    <label htmlFor='full_name'>full name:</label>
                    <input
                        type='text'
                        name='fullname'
                        onChange={e => setDetails({ ...details, full_name: e.target.value })}
                        value={details.name}
                    />
                    {errors.full_name && <p>{errors.full_name}</p>}
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        name='email'
                        onChange={e => setDetails({ ...details, email: e.target.value })}
                        value={details.email}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        name='password'
                        onChange={e => setDetails({ ...details, password: e.target.value })}
                        value={details.password}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <input type='submit' value='SignUp'></input>
            </div>
        </form>
    )
}

export default SignUpForm