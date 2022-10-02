import React, { useEffect, useState } from 'react';
import { useUserId } from "../../../Contexts"
import axios from 'axios';
import { serverURL } from '../../../serverURL';
import "../../../styles/Pages/MyReservationsPage.scss";
import ReservationCard from '../../ui/cards/ReservationCard';

function MyReservations() {
    const userId = useUserId()
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        axios.post(`${serverURL}/userReservations`, { userId }).then((res) => {
            setReservations(res.data)
        });
    }, [])
    let reservationList = reservations.map((reservation) => {
        return <ReservationCard key={reservation.reservation_id} data={reservation} />
    })

    return (
        <div className='my-reservations-page'>
            <div className='reservations-list'>
                {reservationList}
            </div>
        </div>
    )
}

export default MyReservations