import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteEmployeeById,
  getAllEmployees,
} from "../../redux/reducers/EmployeeReducer";

export const ListAllEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllEmployees());
    // eslint-disable-next-line
  }, []);

  const addEmployee = () => {
    navigate("/create-employees");
  };

  const editEmployee = (id) => {
    navigate(`/update-employees/${id}`);
  };

  const removeEmployee = (e) => {
    console.log(e.target.value);
    dispatch(deleteEmployeeById(e.target.value));
    dispatch(getAllEmployees());
  };

  const state = useSelector((state) => state);
  console.log(state);
  console.log(state.employee.employees);

  return (
    <div>
      <h2 className="text-center">Employees List</h2>
      <div className=" mb-3 row">
        <button className=" btn btn-primary" onClick={addEmployee}>
          Add Employee
        </button>
      </div>
      <div className="container">
        {state.employee.msgStatus === true && (
          <h4 className="alert alert-success text-center message">
            Removed Account Successfully
          </h4>
        )}
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Employee First Name</th>
              <th> Employee Last Name</th>
              <th> Employee Email Id</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.employee.employees.map((item) => (
              <tr key={item.id}>
                <td> {item.firstName} </td>
                <td> {item.lastName}</td>
                <td> {item.emailId}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => editEmployee(item.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={removeEmployee}
                    value={item.id}
                  >
                    Delete
                  </button>
                  {/* <button className="btn btn-info"></button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
