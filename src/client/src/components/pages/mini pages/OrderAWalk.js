import React from 'react';
import OrderWalkForm from '../../ui/forms/OrderWalkForm';
import { useUserDogs, useUserId } from "../../../Contexts"
import "../../../styles/Pages/OrderWalkPage.scss"
import axios from 'axios';
import { serverURL } from '../../../serverURL';

function OrderAWalk() {
    const userId = useUserId()
    const dogs = useUserDogs();

    const OrderWalk = walkDetails => {
        console.log(walkDetails);
        axios.post(`${serverURL}/orderWalk`, { walkDetails, userId }).then((res) => {
            if (res.data === "sqli attemp") {
                alert("no sqli attemps here!!")
            }

            if (res.data === "reservation added") {
                alert("reservation added")
            }
        });
    }

    return (
        <div className='order-a-walk-page'>
            <OrderWalkForm OrderWalk={OrderWalk} dogs={dogs} />
        </div>
    )
}

export default OrderAWalk