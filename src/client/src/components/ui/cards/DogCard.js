import React from 'react'

function DogCard(props) {

    const dogDetails = props.data

    const removeDog = (dogId) =>{
        console.log(dogId)
    } 

    return (
        <div className='dog-card'>
            <button onClick={()=>removeDog(dogDetails.dog_id)}>remove dog</button>
            <div><p>name: {dogDetails.name}</p></div>
            <div><p>type: {dogDetails.type}</p></div>
            <div><p> age: {dogDetails.age}</p></div>
            <div><p>chip number: {dogDetails.chip_number}</p></div>
        </div>
    )
}

export default DogCard