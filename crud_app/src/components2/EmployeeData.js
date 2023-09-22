import React from 'react'
import './EmployeeData.css'

export default function EmployeeData(props) {
    //console.log(props.id);

    return (
        <div className="DivMainEmplyee">
            <button className="delete" onClick={() => props.Delete(props.id)}>Delete</button>
            <button className="edit" onClick={() => props.Edit(props.id)}>Edit</button>
            <div className="EmployeeDiv1">
                <div className="dataDivs">{props.name}</div>
                <div className="dataDivs">{props.dob}</div>
                <div className="dataDivs">{props.gender}</div>
                <div className="dataDivs">{props.email}</div>
                <div className="dataDivs">{props.address}</div>

            </div>
        </div>
    )
}
