import React from 'react'
import "../../../styles/DogCard.scss"

function ReservationCard({ data }) {

    const reservationDetails = data

    // const clickOnCard = () => {
    //     if (isOnClick) {
    //         clickHandler()
    //     }
    // }
    return (
        <div className='reservation-card'>
            {/* <div className="avatar-holder">
                <img alt="" src="https://media.istockphoto.com/vectors/cartoon-cute-beagle-puppy-vector-character-mascot-vector-id1180989037?k=20&m=1180989037&s=612x612&w=0&h=7LRREi55KTZUNdW9eTKxp3iyYhnT7GaVvwA_LoP3jjE=" />
            </div> */}
            <div className='card-text'>
                <p>Dog Name: {reservationDetails.dogname}</p>
                <p>Walk Location: {reservationDetails.location}</p>
                <p>Date: {reservationDetails.date}</p>
                <p>Hour: {reservationDetails.time}</p>
                <p>Walk Time (in minutes): {reservationDetails.walk_time}</p>
                <p>price: {reservationDetails.price}</p>
            </div>
        </div>
    )
}

export default ReservationCard