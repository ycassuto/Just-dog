import React from 'react';
import { useUserDogs, useUserId, useUpdateUserId } from "../../../Contexts"
import axios from "axios";
import { serverURL } from '../../../serverURL.js';
import DogCard from '../../ui/cards/DogCard';
import AddDogForm from '../../ui/forms/AddDogForm';
import "../../../styles/Pages/MyDogsPage.scss"

function MyDogs() {
    const userId = useUserId()
    const dogs = useUserDogs();
    const userIdUpdate = useUpdateUserId()

    const AddNewDog = dogDetails => {
        axios.post(`${serverURL}/addNewDog`, { dogDetails, userId }).then((res) => {
            if (res.data === "sqli attemp") {
                alert("no sqli attemps here!!")
            }

            if (res.data === "dog added") {
                userIdUpdate(userId)
                window.location.reload();
            }
        });
    }

    let dogList = dogs.map((dog) => {
        return (<DogCard key={dog.dog_id} data={dog} />)
    })

    return (
        <div className='my-dogs-page'>
            <h2>You'r Dogs:</h2>
            <div className='dogs-list'>
                {dogList}
            </div>
            <AddDogForm AddDog={AddNewDog} />
        </div>
    )
}

export default MyDogs