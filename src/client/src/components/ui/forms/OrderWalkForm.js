import React, { useState } from 'react'
import DogCard from '../cards/DogCard';

function OrderWalkForm({ OrderWalk, dogs }) {
    const [details, setDetails] = useState({ dogName: "", date: "00-00-00", time: "00:00:00", location: "" })

    const submitHandler = e => {
        e.preventDefault();
        OrderWalk(details)
    }

    let dogList = dogs.map((dog) => {
        return (
            <div key={dog.dog_id} onClick={() => setDetails({ ...details, dogName: dog.name })}
            >
                <DogCard data={dog} />
            </div>
        )
    })

    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Order A Walk</h2>
                {dogList}
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