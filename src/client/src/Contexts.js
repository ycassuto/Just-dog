import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { serverURL } from "./serverURL";

const userIdContext = React.createContext()
const updateUserIdContext = React.createContext()
const userDogsContext = React.createContext()

export function useUserDogs() {
    return useContext(userDogsContext);
}

export function useUpdateUserId() {
    return useContext(updateUserIdContext)
}

export function useUserId() {
    return useContext(userIdContext);
}

export function InfoProvider({ children }) {
    const userIdFromLocal = JSON.parse(localStorage.getItem("userId"));
    const [userId, setUserId] = useState(userIdFromLocal || 0);

    const userDogsFromLocal = JSON.parse(localStorage.getItem("userDogs"));
    const [userDogs, setUserDogs] = useState(userDogsFromLocal || []);

    useEffect(() => {
        axios.post(`${serverURL}/getUserDogsById`, { id: userId }).then((res) => {
            if (res.data === "sqli attemp") {
                alert("no sqli attemps here!!");
            } else {
                if (res.data !== "no dogs") {
                    setUserDogs(res.data);
                    localStorage.clear();
                    localStorage.setItem("userDogs", JSON.stringify(res.data));
                }
            }
        });
    }, [userId]);

    function setID(id) {
        setUserId(id);
        localStorage.clear();
        localStorage.setItem("userId", JSON.stringify(id));
    }

    return (
        <updateUserIdContext.Provider value={setID}>
            <userIdContext.Provider value={userId}>
                <userDogsContext.Provider value={userDogs}>
                    {children}
                </userDogsContext.Provider>
            </userIdContext.Provider>
        </updateUserIdContext.Provider>
    );
}
