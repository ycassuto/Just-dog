import React from "react";
import { Route, Routes } from "react-router-dom"
import NavBar from "../ui/NavBar";
import MyDogs from "./mini pages/MyDogs";
import OrderAWalk from "./mini pages/OrderAWalk";

function HomePage() {

    return (
        <div className="Home-page">
            <NavBar />
            <Routes>
                <Route path="/myDogs" element={<MyDogs/>} />
                <Route path="/myReservations" element={<div>myReservations</div>} />
                <Route path="/orderWalk" element={<OrderAWalk/>} />
                <Route path="/reservationsHistory" element={<div>reservationsHistory</div>} />
            </Routes>
        </div>
    )
}

export default HomePage;