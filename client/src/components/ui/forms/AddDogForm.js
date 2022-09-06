import React, { useState } from "react";

function AddDogForm({ AddDog }) {


    const [details, setDetails] = useState({ name: "", type: "", age: 0, chipNumber: 0 })

    const submitHandler = e => {
        e.preventDefault();
        AddDog(details)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Add New Dog:</h2>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        name='name'
                        onChange={e => setDetails({ ...details, name: e.target.value })}
                        value={details.name}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='type'>Type:</label>
                    <input
                        type='text'
                        name='type'
                        onChange={e => setDetails({ ...details, type: e.target.value })}
                        value={details.type}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='age'>Age:</label>
                    <input
                        type='number'
                        name='age'
                        onChange={e => setDetails({ ...details, age: e.target.value })}
                        value={details.age}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='chipNumber'>Chip Number:</label>
                    <input
                        type='number'
                        name='chipNumber'
                        onChange={e => setDetails({ ...details, chipNumber: e.target.value })}
                        value={details.chipNumber}
                    />
                </div>
                <input type='submit' value='Add Dog'></input>
            </div>
        </form>
    )
}

export default AddDogForm