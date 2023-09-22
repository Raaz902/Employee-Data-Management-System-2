import "./App.css";
import EmployeeData from "./components2/EmployeeData";
import AddEmployeeData from "./components2/AddEmployeeData";
import { useState } from "react";
const EmployeeArray = [
  /* { id: 1, name: "Raaz", dob: "23" },
  { id: 2, name: "Rizwan", dob: "16" },
  { id: 3, name: "Afzal", dob: "26" },
  { id: 4, name: "Afsar", dob: "29" }, */
];
function App() {
  const [inputData, setInputdata] = useState(EmployeeArray);
  const [editableData, setEditableData] = useState(null);
  function handlerAddData(data) {
    setInputdata([...inputData, { ...data, id: inputData.length + 1 }]);
    // console.log(inputData);
  }
  function Delete(id) {
    setInputdata(inputData.filter((data2) => data2.id !== id));
    // console.log(id);
  }
  function Edit(id) {
    setEditableData(inputData.find((edit) => edit.id === id));
  }
  function handelerUpdateData(editedData) {
    //console.log(editedData);
    const index = inputData.findIndex((data) => data.id === editedData.id);
    const updatedData = [...inputData];
    updatedData.splice(index, 1, editedData);
    setInputdata(updatedData);
    setEditableData(null);

    // console.log(inputData);
    //setEditableData(input);
  }
  return (
    <div style={{ margin: 20 }}>
      <AddEmployeeData
        addNewEmployeeData={handlerAddData}
        editableData={editableData}
        updateData={handelerUpdateData}
      ></AddEmployeeData>
      <div className="main">
        <div className="EmployeeDiv2">
          <h3>Name</h3>
          <h3>DOB</h3>
          <h3>Gender</h3>
          <h3>Email</h3>
          <h3>Address</h3>
        </div>
        {inputData.map((employee) => (
          <EmployeeData
            Delete={Delete}
            Edit={Edit}
            key={employee.id}
            id={employee.id}
            name={employee.name}
            dob={employee.dob}
            gender={employee.gender}
            email={employee.email}
            address={employee.address}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
