import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editEmpDetails,
  getEmpDetails,
  updateEmployee,
} from "../../redux/reducers/EmployeeReducer";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";

// export const UpdateEmployee = () => {
//   const formEl = useRef();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const state = useSelector((state) => state);
//   console.log(state);
//   console.log(
//     "Previous Value: " + state.employee.uref.firstName,
//     state.employee.uref.lastName,
//     state.employee.uref.emailId
//   );
//   const [firstName, setFirstName] = useState(state.employee.uref.firstName);
//   const [lastName, setLastName] = useState(state.employee.uref.lastName);
//   const [emailId, setEmailId] = useState(state.employee.uref.emailId);

//   const updateFirstName = (e) => {
//     // const charValue = e.target.value.replace(/[\d]/gi, "");
//     console.log(e.target.value);
//     setFirstName(e.target.value);
//   };
//   const updateLastName = (e) => {
//     // const charValue = e.target.value.replace(/[\d]/gi, "");
//     console.log(e.target.value);
//     setLastName(e.target.value);
//   };
//   const updateEmailId = (e) => {
//     // const charValue = e.target.value;
//     console.log(e.target.value);
//     setEmailId(e.target.value);
//   };

//   const updateEmployeeHandler = (e) => {
//     console.log(formEl.current);
//     e.preventDefault();
//     console.log(formEl.current.checkValidity());
//     if (formEl.current.checkValidity()) {
//       dispatch(
//         updateEmployee({
//           id: state.employee.uref.id,
//           firstName: firstName,
//           lastName: lastName,
//           emailId: emailId,
//         })
//       );
//       setFirstName("");
//       setLastName("");
//       setEmailId("");
//     }
//     let empData = {
//       NewFirstName: firstName,
//       NewLastName: lastName,
//       NewEmailId: emailId,
//     };
//     console.log("Employee updated =>" + JSON.stringify(empData));
//   };
//   const cancel = () => {
//     navigate("/");
//   };
//   return (
//     <div className="container  ">
//       <div className="row  ">
//         <div className="container">
//           {state.employee.msgStatus === true && (
//             <h4 className="alert alert-success text-center message">
//               Employee updated successfully
//             </h4>
//           )}
//           {state.employee.errorStatus === true && (
//             <h4 className="alert alert-danger text-center message">
//               {state.employee.error}
//             </h4>
//           )}
//         </div>
//         <div className="card col-md-6 offset-md-3 offset-md-3">
//           <h3 className="text-center">Update Employee</h3>
//           <div className="card-body">
//             <form ref={formEl}>
//               <div className="form-group">
//                 <label>First Name</label>
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   name="firstName"
//                   value={firstName}
//                   className="form-control"
//                   onChange={updateFirstName}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Last Name</label>
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   name="lasttName"
//                   value={lastName}
//                   className="form-control"
//                   onChange={updateLastName}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Email Id</label>
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   name="emailId"
//                   value={emailId}
//                   className="form-control"
//                   onChange={updateEmailId}
//                   required
//                 />
//               </div>

//               <button
//                 className="btn btn-success form-control mt-3 p-1 px-2"
//                 onClick={updateEmployeeHandler}
//               >
//                 Save
//               </button>
//               <button
//                 className="btn btn-danger form-control mt-3 p-1 px-2 "
//                 onClick={cancel}
//               >
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const initialValue = {
  firstName: "",
  lastName: "",
  emailId: "",
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

export const UpdateEmployee = () => {
  const [empParam, setEmpDetails] = useState(initialValue);
  const { firstName, lastName, emailId } = empParam;
  const { id } = useParams();
  const classes = useStyles();
  let navigate = useNavigate();

  useEffect(() => {
    loadEmpDetails();
  }, []);

  const loadEmpDetails = async () => {
    const response = await getEmpDetails(id);
    setEmpDetails(response.data);
  };

  const updateEmpolyeeDetails = async () => {
    const response = await editEmpDetails(id, empParam);
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setEmpDetails({ ...empParam, [e.target.firstName]: e.target.value });
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Update Details</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">First Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="fisrt Name"
          value={firstName}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Last Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="last Name"
          value={lastName}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email Id</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email Id"
          value={emailId}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>

      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={updateEmpolyeeDetails}
        >
          Update
        </Button>
      </FormControl>
    </FormGroup>
  );
};
