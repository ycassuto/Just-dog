import React, { useState } from 'react'
import DogCard from '../cards/DogCard';
import "../../../styles/FormTemplate.scss";

function OrderWalkForm({ OrderWalk, dogs }) {
    const [details, setDetails] = useState({ dogId: 0, dogName: "", date: "yyyy-MM-dd", time: "00:00:00", location: "", walk_time: 0, price: 0 })

    const submitHandler = e => {
        e.preventDefault();
        OrderWalk(details)
    }

    let dogList = dogs.map((dog) => {
        return (
            <DogCard onClick={() => setDetails({ ...details, dogName: dog.name, dogId: dog.dog_id })} key={dog.dog_id} data={dog} />
        )
    })

    return (<>
        <h2>Order A Walk</h2>
        <p>select dog:</p>
        <div className='dogs-list'>
            {dogList}
        </div>
        <div className="form-template">
            <form onSubmit={submitHandler}>
                <p>selected dog for walk: {details.dogName}</p>
                <div className='form-field'>
                    <label htmlFor='date'>Date:</label>
                    <input
                        className='form-input'
                        type='date'
                        name='date'
                        min={new Date()}
                        onChange={e => setDetails({ ...details, date: e.target.value })}
                        value={details.date}
                    />
                </div>
                <div className='form-field'>
                    <label htmlFor='time'>Time:</label>
                    <input
                        className='form-input'
                        type='time'
                        name='time'
                        onChange={e => setDetails({ ...details, time: e.target.value })}
                        value={details.time}
                    />
                </div>
                <div className='form-field'>
                    <label htmlFor='location'>location:</label>
                    <input
                        className='form-input'
                        type='text'
                        name='location'
                        onChange={e => setDetails({ ...details, location: e.target.value })}
                        value={details.location}
                    />
                </div>
                <div className='form-field'>
                    <label htmlFor='walk_time'>walk time (in minutes):</label>
                    <input
                        className='form-input'
                        type='number'
                        name='walk_time'
                        onChange={e => setDetails({ ...details, walk_time: e.target.value, price: e.target.value * 3 })}
                        value={details.walk_time}
                    /><p>price (3 shekels for minute): {details.price} ILS</p>
                </div>
                <input type='submit' className='form-submit' value='Order A Walk'></input>
            </form>
        </div>
    </>
    )
}

export default OrderWalkForm