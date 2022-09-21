import React, { useState } from 'react'
import DogCard from '../cards/DogCard';

function OrderWalkForm({ OrderWalk, dogs }) {
    const [details, setDetails] = useState({ dogId: 0, dogName: "", date: "yyyy-MM-dd", time: "00:00:00", location: "", walk_time: 0, price: 0 })

    const submitHandler = e => {
        e.preventDefault();
        OrderWalk(details)
    }

    let dogList = dogs.map((dog) => {
        return (
            <div key={dog.dog_id} onClick={() => setDetails({ ...details, dogName: dog.name, dogId: dog.dog_id })}
            >
                <DogCard data={dog} />
            </div>
        )
    })

    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Order A Walk</h2>
                <p>select dog:</p>
                <div className='dogs-list'>
                    {dogList}
                </div>
                <p>selected dog for walk: {details.dogName}</p>
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
                <div className='form-group'>
                    <label htmlFor='walk_time'>walk time (in minutes):</label>
                    <input
                        type='number'
                        name='walk_time'
                        onChange={e => setDetails({ ...details, walk_time: e.target.value, price: e.target.value * 3 })}
                        value={details.walk_time}
                    /><p>price (3 shekels for minute): {details.price}</p>
                </div>
                <input type='submit' value='Order A Walk'></input>
            </div>
        </form>
    )
}

export default OrderWalkForm