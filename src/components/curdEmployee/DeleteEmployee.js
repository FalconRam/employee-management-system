import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DeleteEmployee = () => {

    const state = useSelector((state) => state);
    const history = useNavigate();

    return (
        <div>
            
        </div>
    )
}

export default DeleteEmployee
