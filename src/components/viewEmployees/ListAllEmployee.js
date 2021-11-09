import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmployees } from '../../redux/reducers/EmployeeReducer';

export const ListAllEmployee =() => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllEmployees());
      // eslint-disable-next-line
    }, []);
    const state = useSelector((state) => state);
    console.log(state.employee.employees);
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
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
                    <button className="btn btn-info"></button>
                    <button className="btn btn-danger"></button>
                    <button className="btn btn-info"></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}