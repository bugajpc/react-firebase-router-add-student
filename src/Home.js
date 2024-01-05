import React, { useState } from "react";
import { useEffect } from "react";
import db from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function Home() {
    const [list, setList] = useState([])
    useEffect(() => {fetchData()}, []);

    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "students"));
        const newList = []
        querySnapshot.forEach((doc) => {
            newList.push({
                'name': doc.data().name, 
                'lastName': doc.data().lastName
            })
            
            
            console.log(doc.id, " => ", doc.data());
        });

        setList(newList)
    }

    return (
        <div>
            <h1>Home</h1>
            {list.map((item, index) => (
                <li key={index}> {item.name} - {item.lastName}</li>
            ) )}
        </div>
    )
}

export default Home