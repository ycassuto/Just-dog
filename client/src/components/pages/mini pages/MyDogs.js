import React, { useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

import DogCard from '../../ui/cards/DogCard';

function MyDogs() {
    const { id } = useParams()
    let [dogs, setDogs] = useState([]);

    axios.post(`/getUserDogsById`, { id: id }).then((res) => {
        if (res.data === "sqli attemp") {
            alert("no sqli attemps here!!")
        } else {
            if (res.data !== "no dogs") {
                setDogs(res.data);
            }
        }
    });

    let dogList = dogs.map((dog) => {
        return (<DogCard key={dog.dog_id} data={dog} />)
    })

    return (
        <div className='my-dogs-page'>
            <h2>you'r dogs: {dogList}</h2>
        </div>
    )
}

export default MyDogs