import React, { useState } from "react";
import './CRUD.css';

const CRUD = () => {
    const [arr, setArr] = useState(["Avnil", "Kavyam", "Jeel", "Atmik"]); // Correct initialization
    const [name, setName] = useState("");
    const [editIndex, setEditIndex] = useState(-1); // To track which item is being edited

    const addIntoArray = () => {
        if (name !== '') {
            if (editIndex !== -1) {
                // If editing, replace the item
                const newArr = arr.map((item, index) => index === editIndex ? name : item);
                setArr(newArr);
                setEditIndex(-1); // Reset edit index
            } else {
                // Add new item
                setArr([...arr, name]);
            }
            setName(""); // Clear input
        }
    };

    const deleteFromArray = (index) => {
        const newArr = arr.filter((_, i) => i !== index); // Delete item by index
        setArr(newArr);
    };

    const startEditing = (index) => {
        setName(arr[index]); // Set the name to the item being edited
        setEditIndex(index); // Set the edit index
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                />
                <button onClick={addIntoArray}>{editIndex !== -1 ? "Update" : "Add"}</button>
            </div>
            <ul>
                {arr.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => startEditing(index)}>Edit</button>
                        <button onClick={() => deleteFromArray(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CRUD;
