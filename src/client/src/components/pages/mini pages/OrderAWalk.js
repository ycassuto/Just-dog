import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import OrderWalkForm from '../../ui/forms/OrderWalkForm';
import { serverURL } from '../../../serverURL';

function OrderAWalk() {
    const { id } = useParams()
    let [dogs, setDogs] = useState([]);

    useEffect(() => {
        axios.post(`${serverURL}/getUserDogsById`, { id: id }).then((res) => {
            if (res.data === "sqli attemp") {
                alert("no sqli attemps here!!")
            } else {
                if (res.data !== "no dogs") {
                    setDogs(res.data);
                }
            }
        });
    }, [])

    const OrderWalk = reservaionsDetails => {
        console.log(reservaionsDetails, id);
        // axios.post(`/addNewDog`, { dogDetails, id }).then((res) => {
        //     if (res.data === "sqli attemp") {
        //         alert("no sqli attemps here!!")
        //     }

        //     if (res.data.msg === "WalkOrders") {
        //         console.log("dog added")
        //         //window.location.href = `${origin}/Home/${res.data.user_id}/myDogs`
        //     }
        // });
    }

    return (
        <div className='order-a-walk-page'>
            <OrderWalkForm OrderWalk={OrderWalk} dogs={dogs} />
        </div>
    )
}

export default OrderAWalk