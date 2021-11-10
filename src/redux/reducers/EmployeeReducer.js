import axios from "axios";

const initState = {
  msgStatus: false,
  errorStatus: false,
  error: "",
  employees: [],
};

const ERROR = "ERROR";
const ERROR_STATUS = "ERROR_STATUS";
const MSG_STATUS = "MSG_STATUS";
const GET_ALL_Employees = "GET_ALL_Employees";

export const getAllEmployees = () => {
  return async (dispatch) => {
    const url = "http://localhost:8080/api/v1/all/employees";
    const response = await axios.get(url);
    dispatch({ type: GET_ALL_Employees, payload: response.data });
  };
};

export const createEmployee = (payload) => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:8080/api/v1/add/employees";
      axios.post(url, payload);
      dispatch({ type: MSG_STATUS, payload: true });
      setTimeout(() => {
        dispatch({ type: MSG_STATUS, payload: false });
      }, 5000);
    } catch (err) {
      dispatch({ type: ERROR_STATUS, payload: true });
      dispatch({ type: ERROR, payload: err.response.data.message });
      setTimeout(() => {
        dispatch({ type: ERROR_STATUS, payload: false });
      }, 4000);
    }
  };
};

export const deleteEmployeeById = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8080/api/v1/employees/${payload}`;
    const response = await axios.delete(url);
    console.log(response);
    dispatch(getAllEmployees());
    dispatch({ type: MSG_STATUS, payload: true });
    setTimeout(() => {
      dispatch({ type: MSG_STATUS, payload: false });
    }, 3000);
  };
};

export function EmployeeReducer(state = initState, action) {
  switch (action.type) {
    case GET_ALL_Employees:
      return { ...state, employees: action.payload };
    case MSG_STATUS:
      return { ...state, msgStatus: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case ERROR_STATUS:
      return { ...state, errorStatus: action.payload };

    default:
      return state;
  }
}
