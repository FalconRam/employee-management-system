import axios from "axios";

const initState = {
    employees: [],
};

const GET_ALL_Employees = "GET_ALL_Employees";

export const getAllEmployees = () => {
    return async (dispatch) => {
        const url = "http://localhost:8080/api/v1/all/employees";
        const response = await axios.get(url);
        dispatch({ type: GET_ALL_Employees, payload: response.data });
    };
};

export function EmployeeReducer(state = initState, action) {
    switch (action.type) {
        case GET_ALL_Employees:
            return { ...state, employees: action.payload };
        default:
      return state;
    }
}
