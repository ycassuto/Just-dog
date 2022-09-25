import React from 'react'
import "../../../styles/DogCard.scss"

function DogCard({ data, isOnClick, clickHandler }) {

    const dogDetails = data

    const removeDog = (dogId) => {
        console.log(dogId)
    }

    const clickOnCard = () => {
        if (isOnClick) {
            clickHandler()
        }
    }

    return (
        <div className='dog-card' onClick={clickOnCard} >
            <div className="avatar-holder">
                <img alt="" src="https://media.istockphoto.com/vectors/cartoon-cute-beagle-puppy-vector-character-mascot-vector-id1180989037?k=20&m=1180989037&s=612x612&w=0&h=7LRREi55KTZUNdW9eTKxp3iyYhnT7GaVvwA_LoP3jjE=" />
            </div>
            <div className='card-text'>
                <div className='dog-name'><p>Dog Name: {dogDetails.name}</p></div>
                <p>Type: {dogDetails.type}</p>
                <p>Age: {dogDetails.age}</p>
                <p>Chip Number: {dogDetails.chip_number}</p>
            </div>
        </div>
    )
}

export default DogCard