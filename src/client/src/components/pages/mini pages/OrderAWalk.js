import React from 'react';
import OrderWalkForm from '../../ui/forms/OrderWalkForm';
import {useUserDogs, useUserId} from "../../../Contexts"

function OrderAWalk() {
    const userId = useUserId()
    const dogs = useUserDogs();

    const OrderWalk = reservaionsDetails => {
        console.log(reservaionsDetails);
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