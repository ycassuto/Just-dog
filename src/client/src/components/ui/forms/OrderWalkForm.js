import React, { useState, useEffect } from 'react'
import DogCard from '../cards/DogCard';
import "../../../styles/FormTemplate.scss";
import validation from './OrderWalkValidation';

function OrderWalkForm({ OrderWalk, dogs }) {
    const [details, setDetails] = useState({ dogId: 0, dogName: "", date: "", time: "", location: "", walk_time: 0, price: 0 })
    const [errors, setErrors] = useState({ err: "" });

    const submitHandler = e => {
        e.preventDefault();
        setErrors(validation(details))
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0) { //means no errors
            OrderWalk(details)
        }
    }, [errors])

    const clickHandelr = (name, id) => {
        setDetails({ ...details, dogName: name, dogId: id })
    }

    let dogList = dogs.map((dog) => {
        return (
            <DogCard
                data={dog}
                isOnClick={true}
                clickHandler={() => clickHandelr(dog.name, dog.dog_id)} key={dog.dog_id}
            />
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
                {errors.dogName && <h4>{errors.dogName}</h4>}
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
                    {errors.date && <h4>{errors.date}</h4>}
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
                    {errors.time && <h4>{errors.time}</h4>}
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
                    {errors.location && <h4>{errors.location}</h4>}
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
                    {errors.walk_time && <h4>{errors.walk_time}</h4>}
                </div>
                <input type='submit' className='form-submit' value='Order A Walk'></input>
            </form>
        </div>
    </>
    )
}

export default OrderWalkForm