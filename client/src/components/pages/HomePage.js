import React, { useState } from "react";
import { useParams, Link, Route, Routes } from "react-router-dom"
import NavBar from "../ui/NavBar";
import axios from "axios"

function HomePage() {
    const { id } = useParams();

    return (
        <div className="Home-page">
            <NavBar />
            <Routes>
                <Route path="/:id" element={<div>home</div>} />
                <Route path="/myDogs/:id" element={<div>mydogs</div>} />
                <Route path="/myReservations/:id" element={<div>myReservations</div>} />
                <Route path="/orderWalk/:id" element={<div>orderWalk</div>} />
                <Route path="/reservationsHistory/:id" element={<div>reservationsHistory</div>} />
            </Routes>
        </div>
    )
}

export default HomePage;