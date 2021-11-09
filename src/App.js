import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterComp from "./components/footer/FooterComp";
import HeaderComp from "./components/header/HeaderComp";
import { ListAllEmployee } from "./components/viewEmployees/ListAllEmployee";

function App() {
  return (
    <div>
      <Router>
        <HeaderComp />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListAllEmployee />}></Route>
            <Route path="/employees" element={<ListAllEmployee />}></Route>
            {/* <Route
              path="/add-employee/:id"
              component={CreateEmployeet}
            ></Route>
            <Route
              path="/view-employee/:id"
              component={ViewEmployee}
            ></Route> */}
            {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
          </Routes>
        </div>
        <FooterComp />
      </Router>
    </div>
  );
}

export default App;
