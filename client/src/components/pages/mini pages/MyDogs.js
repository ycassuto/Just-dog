import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

import DogCard from '../../ui/cards/DogCard';
import AddDogForm from '../../ui/forms/AddDogForm';

function MyDogs() {
    const { id } = useParams()
    let [dogs, setDogs] = useState([]);

    useEffect(() => {
        axios.post(`/getUserDogsById`, { id: id }).then((res) => {
            if (res.data === "sqli attemp") {
                alert("no sqli attemps here!!")
            } else {
                if (res.data !== "no dogs") {
                    setDogs(res.data);
                }
            }
        });
    }, [])

    const AddNewDog = walkDetails => {
        axios.post(`/addNewDog`, { dogDetails: walkDetails, id }).then((res) => {
            if (res.data === "sqli attemp") {
                alert("no sqli attemps here!!")
            }
            console.log(res.data.msg)
            if (res.data === "dog-added") {
                alert("dog-added!")
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
            {dogList}
            <AddDogForm AddDog={AddNewDog} />
        </div>
    )
}

export default MyDogs