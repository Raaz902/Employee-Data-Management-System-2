import React from 'react'
import { useState } from 'react';
import { useEffect } from "react";

const initialData = { name: "", dob: "", gender: "", email: "", address: "" };


export default function AddEmployeeData({ addNewEmployeeData, editableData, updateData }) {
    /* if (editableData) { console.log(editableData) } */

    const [newData, setData] = useState(initialData);

    function handleChange(e) {
        setData({ ...newData, [e.target.name]: e.target.value });
        // console.log(newData);
    }
    /*  function handleChangeAge(e) {
         setData({ ...newData, dob: e.target.value });
         // console.log(newData);
     }
     function handleChangeGender(e) {
         setData({ ...newData, gender: e.target.value });
         // console.log(newData);
     }
     function handleChangeEmail(e) {
         setData({ ...newData, email: e.target.value.toString() });
         // console.log(newData);
     }
     function handleChangeAddress(e) {
         setData({ ...newData, address: e.target.value });
         // console.log(newData);
     } */

    function handleSubmit(e) {
        const Emp = { name: newData.name, dob: newData.dob, gender: newData.gender, email: newData.email, address: newData.address }
        e.preventDefault();
        if (editableData !== null) {
            updateData(newData);
            // console.log(newData)
            // console.log(editableData.id)

        } else {
            addNewEmployeeData(Emp);
            //console.log('newData')
        }
        setData(initialData);

    }
    useEffect(() => {
        if (editableData) {
            setData(editableData);
            //  console.log(newData)
        }
    }, [editableData])
    return (
        <div>
            <form action="" onSubmit={handleSubmit} className="input">
                <b>Name</b> <input value={newData.name} name="name" type="text" placeholder='Name' onChange={handleChange} />
                <b>Date of Birth</b> <input value={newData.dob} name="dob" type="date" placeholder='Date of Birth' onChange={handleChange} />

                <b>Gender</b> <input value={newData.gender} name="gender" type="text" placeholder='Gender' onChange={handleChange} />

                <b>Email</b> <input value={newData.email} name="email" type="email" placeholder='Email' onChange={handleChange} />

                <b>Address</b>  <input value={newData.address} name="address" type="text" placeholder='Address' onChange={handleChange} />
                <button type='submit' ><b>{editableData ? 'Edit Data' : 'Submit Data'}</b></button>
            </form>
        </div>
    )
}
