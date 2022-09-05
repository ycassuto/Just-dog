import React from "react";
import { useParams, Route, Routes } from "react-router-dom"
import NavBar from "../ui/NavBar";
import MyDogs from "./mini pages/MyDogs";


function HomePage() {
    const {id} = useParams()

    return (
        <div className="Home-page">
            <NavBar id={id} />
            <Routes>

                <Route path="/myDogs" element={<MyDogs/>} />
                <Route path="/myReservations" element={<div>myReservations</div>} />
                <Route path="/orderWalk" element={<div>orderWalk</div>} />
                <Route path="/reservationsHistory" element={<div>reservationsHistory</div>} />
            </Routes>
        </div>
    )
}

export default HomePage;