import React, { useState } from "react";
import db from "./firebase-config";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";

function AddPost() {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleAddData = async () => {
        const docRef = await addDoc(collection(db, "students"), {
            name: name,
            lastName: lastName
          });
          console.log("Document written with ID: ", docRef.id);
    }
    return (
        <div className="add-post">
            <h1>Add Post</h1>
            <input placeholder="name" onChange={(e) => setName(e.target.value)}></input>
            <input placeholder="lastname" onChange={(e) => setLastName(e.target.value)}></input>
            <button onClick={handleAddData}>Add Student</button>
        </div>
    )
}

export default AddPost