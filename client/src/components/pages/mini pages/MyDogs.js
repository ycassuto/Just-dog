import React, { useState, useEffect} from 'react';
import axios from "axios";

import DogCard from '../../ui/cards/DogCard';
import { serverURL } from '../../../serverURL';

function MyDogs(props) {

    let [dogs, setDogs] = useState([]);
    useEffect(() => {
        axios.get(`${serverURL}/getUserDogsById`,{id:props.userId}).then((res) => {
            setDogs(res.data);
        });
    }, []);

    return (
        <div className='my-dogs-page'>
            <h2>you'r dogs:</h2>
        </div>
    )
}

export default MyDogs