import axios from "axios";

const initState = {
  msgStatus: false,
  errorStatus: false,
  progress: false,
  error: "",
  employees: [],
  uref: {},
};

const ERROR = "ERROR";
const ERROR_STATUS = "ERROR_STATUS";
const MSG_STATUS = "MSG_STATUS";
const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";
const GET_ALL_Employees = "GET_ALL_Employees";
const EMPLOYEE_UPDATE_RENDER_ACTION_TYPE = "EMPLOYEE_UPDATE_RENDER_ACTION_TYPE";

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

export const updateEmployee = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8080/api/v1/employees/${payload.id}`;
    axios.post(url, payload);
    updateRenderAction({});
    // making the uref empty again.
    updateRenderAction({});

    // update the ui. TODO
    dispatch({ type: PROGRESS_ACTION_TYPE, payload: true });

    // after 5 second PROGRESS :: FALSE AGAIN
    setTimeout(() => {
      dispatch({ type: PROGRESS_ACTION_TYPE, payload: false });
    }, 5000);
  };
};

export const updateRenderAction = (payload) => {
  // ONLY UPDATEING THE UI
  // 5
  return { type: EMPLOYEE_UPDATE_RENDER_ACTION_TYPE, payload: payload };
};


export const deleteEmployeeById = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8080/api/v1/employees/${payload.id}`;
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
    case EMPLOYEE_UPDATE_RENDER_ACTION_TYPE:
      return { ...state, uref: action.payload };
    default:
      return state;
  }
}
