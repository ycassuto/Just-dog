import React from 'react';
import { useUserDogs, useUserId } from "../../../Contexts"
import axios from "axios";
import { serverURL } from '../../../serverURL.js';
import DogCard from '../../ui/cards/DogCard';
import AddDogForm from '../../ui/forms/AddDogForm';

function MyDogs() {
    const userId = useUserId()
    const dogs = useUserDogs();

    const AddNewDog = dogDetails => {
        axios.post(`${serverURL}/addNewDog`, { dogDetails, userId }).then((res) => {
            if (res.data === "sqli attemp") {
                alert("no sqli attemps here!!")
            }

            if (res.data === "dog added") {
                window.location.reload();
            }
        });
    }

    let dogList = dogs.map((dog) => {
        return (<DogCard key={dog.dog_id} data={dog} />)
    })

    return (
        <div className='my-dogs-page'>
            <h2>you'r dogs:</h2>
            <div className='dogs-list'>
                {dogList}
            </div>
            <AddDogForm AddDog={AddNewDog} />
        </div>
    )
}

export default MyDogs