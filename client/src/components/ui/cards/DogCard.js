import React from 'react'
import "../../../styles/DogCard.scss"

function DogCard(props) {

    const dogDetails = props.data

    return (
        <div className='dog-card'>
            <div><p>name: {dogDetails.name}</p></div>
            <div><p>type: {dogDetails.type}</p></div>
            <div><p> age: {dogDetails.age}</p></div>
            <div><p>chip number: {dogDetails.chip_number}</p></div>
        </div>
    )
}

export default DogCard