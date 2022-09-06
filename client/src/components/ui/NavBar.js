import React from "react"
import { Link } from "react-router-dom"

import "../../styles/NavBar.scss"

function NavBar(props) {
    const userId = props.id
    return (
        <>
            <nav className="topnav">
                <Link to={`/Home/${userId}/myDogs`}>My Dogs</Link>
                <Link to={`/Home/${userId}/myReservations`}>My Reservations</Link>
                <Link to={`/Home/${userId}/orderWalk`}>Order A Walk</Link>
                <Link to={`/Home/${userId}/reservationsHistory`}>Reservations History</Link>
            </nav>
        </>
    );
}

export default NavBar;