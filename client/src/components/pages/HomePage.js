import React, { useState } from "react";
import { useParams, Link, Route, Routes } from "react-router-dom"
import NavBar from "../ui/NavBar";
import axios from "axios"

function HomePage() {
    
    const [error, setError] = useState("");
    return (
        <div className="Home-page">
            <NavBar />
            <Routes>
                <Route path="/" element={<div>home</div>} />
                <Route path="/myDogs" element={<div>mydogs</div>} />
                <Route path="/myReservations" element={<div>myReservations</div>} />
                <Route path="/orderWalk" element={<div>orderWalk</div>} />
                <Route path="/reservationsHistory" element={<div>reservationsHistory</div>} />
            </Routes>
        </div>
    )
}

export default HomePage;