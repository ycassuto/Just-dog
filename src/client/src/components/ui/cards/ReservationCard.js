import React, { useState } from 'react'
import "../../../styles/ReservationCard.scss"

function ReservationCard({ data }) {
    const [fullReservationDisplay, toggle] = useState(false);
    const reservationDetails = data

    // const clickOnCard = () => {
    //     if (isOnClick) {
    //         clickHandler()
    //     }
    // }
    return (
        <div className='reservation-card' onClick={() => { toggle(!fullReservationDisplay) }}>
            <div className='card-text'>
                <p>Dog Name: {reservationDetails.dogname}</p>
                <p>Walk Location: {reservationDetails.location}</p>
                <p>Date: {reservationDetails.date}</p>
                {fullReservationDisplay &&
                    <div>
                        <p>Hour: {reservationDetails.time}</p>
                        <p>Walk Time (in minutes): {reservationDetails.walk_time}</p>
                        <p>price: {reservationDetails.price}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default ReservationCard