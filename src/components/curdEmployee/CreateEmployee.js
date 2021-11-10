import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../../redux/reducers/EmployeeReducer";

export const CreateEmployee = () => {
  const formEl = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const updateFirstName = (e) => {
    const charValue = e.target.value.replace(/[\d]/gi, "");
    console.log(firstName);
    setFirstName(charValue);
  };
  const updateLastName = (e) => {
    const charValue = e.target.value.replace(/[\d]/gi, "");
    console.log(lastName);
    setLastName(charValue);
  };
  const updateEmailId = (e) => {
    const charValue = e.target.value;
    console.log(emailId);
    setEmailId(charValue);
  };

  const saveEmployee = (e) => {
    console.log(formEl.current);
    e.preventDefault();
    console.log(formEl.current.checkValidity());
    if (formEl.current.checkValidity()) {
      dispatch(
        createEmployee({
          firstName: firstName,
          lastName: lastName,
          emailId: emailId,
        })
      );
      setFirstName("");
      setLastName("");
      setEmailId("");
    }
    let empData = {
      FirstName: firstName,
      LastName: lastName,
      EmailId: emailId,
    };
    console.log("Employee Added =>" + JSON.stringify(empData));
  };
  const cancel = () => {
    navigate("/");
  };
  return (
    <div className="container  ">
      <div className="row  ">
        <div className="container">
          {state.employee.msgStatus === true && (
            <h4 className="alert alert-success text-center message">
              Employee Added Successfully
            </h4>
          )}
          {state.employee.errorStatus === true && (
            <h4 className="alert alert-danger text-center message">
              {state.employee.error}
            </h4>
          )}
        </div>
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h3 className="text-center">Add Employee</h3>
          <div className="card-body">
            <form ref={formEl}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  className="form-control"
                  onChange={updateFirstName}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lasttName"
                  value={lastName}
                  className="form-control"
                  onChange={updateLastName}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Id</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="emailId"
                  value={emailId}
                  className="form-control"
                  onChange={updateEmailId}
                  required
                />
              </div>

              <button
                className="btn btn-success form-control mt-3 p-1 px-2"
                onClick={saveEmployee}
              >
                Save
              </button>
              <button
                className="btn btn-danger form-control mt-3 p-1 px-2 "
                onClick={cancel}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
