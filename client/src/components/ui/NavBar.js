import React from "react"
import { Link, Outlet } from "react-router-dom"

import "../../styles/NavBar.scss"

function NavBar(props) {

    return (
        <>
            <nav className="topnav">
                <Link to="/Home/myDogs">My Dogs</Link>
                <Link to="/Home/myReservations">My Reservations</Link>
                <Link to="/Home/orderWalk">Order A Walk</Link>
                <Link to="/Home/reservationsHistory">Reservations History</Link>
            </nav>
        </>
    );
}

export default NavBar;