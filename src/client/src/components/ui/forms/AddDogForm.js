import React, { useState } from "react";
import "../../../styles/FormTemplate.scss";

function AddDogForm({ AddDog }) {
    const [details, setDetails] = useState({ name: "", type: "", age: 0, chipNumber: 0 })

    const submitHandler = e => {
        e.preventDefault();
        AddDog(details)
    }

    return (
        <div className="form-template">
            <form onSubmit={submitHandler}>
                <h2>Add New Dog:</h2>
                <div className='form-field'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        className='form-input'
                        type='text'
                        name='name'
                        onChange={e => setDetails({ ...details, name: e.target.value })}
                        value={details.name}
                    />
                </div>
                <div className='form-field'>
                    <label htmlFor='type'>Type:</label>
                    <input
                        className='form-input'
                        type='text'
                        name='type'
                        onChange={e => setDetails({ ...details, type: e.target.value })}
                        value={details.type}
                    />
                </div>
                <div className='form-field'>
                    <label htmlFor='age'>Age:</label>
                    <input
                        className='form-input'
                        type='number'
                        name='age'
                        onChange={e => setDetails({ ...details, age: e.target.value })}
                        value={details.age}
                    />
                </div>
                <div className='form-field'>
                    <label htmlFor='chipNumber'>Chip Number:</label>
                    <input
                        className='form-input'
                        type='number'
                        name='chipNumber'
                        onChange={e => setDetails({ ...details, chipNumber: e.target.value })}
                        value={details.chipNumber}
                    />
                </div>
                <input type='submit' value='Add Dog' className='form-submit'></input>
            </form>
        </div>
    )
}

export default AddDogForm