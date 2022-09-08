import React, { useState } from 'react'

function OrderWalkForm({ OrderWalk, dogsName }) {

    const [details, setDetails] = useState({ dogName: "", date: "00-00-00", time: "00:00:00", location: "" })

    const submitHandler = e => {
        e.preventDefault();
        OrderWalk(details)
    }

    let dogsNamesOptionElem = dogsName.map((dogName) => { return <option value={dogName} key={dogName}>{dogName}</option> });

    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Order A Walk</h2>
                <div className='form-group'>
                    <label htmlFor='dogName'>Dog Name:</label>
                    <select name="dogName"
                        onChange={e => setDetails({ ...details, dogName: e.target.value })}
                        defaultValue = {dogsName[0]}
                        value={details.dogName}
                    >
                        {dogsNamesOptionElem}
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='date'>Date:</label>
                    <input
                        type='date'
                        name='date'
                        min={new Date()}
                        onChange={e => setDetails({ ...details, date: e.target.value })}
                        value={details.date}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='time'>Time:</label>
                    <input
                        type='time'
                        name='time'
                        onChange={e => setDetails({ ...details, time: e.target.value })}
                        value={details.time}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='location'>location:</label>
                    <input
                        type='text'
                        name='location'
                        onChange={e => setDetails({ ...details, location: e.target.value })}
                        value={details.location}
                    />
                </div>
                <input type='submit' value='Order A Walk'></input>
            </div>
        </form>
    )
}

export default OrderWalkForm