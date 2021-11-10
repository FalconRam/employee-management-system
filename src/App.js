import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterComp from "./components/footer/FooterComp";
import HeaderComp from "./components/header/HeaderComp";
import { ListAllEmployee } from "./components/curdEmployee/ListAllEmployee";
import { CreateEmployee } from "./components/curdEmployee/CreateEmployee";
import { UpdateEmployee } from "./components/curdEmployee/UpdateEmployee";

function App() {
  return (
    <div>
      <Router>
        <HeaderComp />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListAllEmployee />}></Route>
            <Route
              path="/view-all-employees"
              exact
              element={<ListAllEmployee />}
            ></Route>
            <Route
              path="/create-employees"
              exact
              element={<CreateEmployee />}
            ></Route>
            <Route
              path="/update-employee/:id"
              exact
              element={<UpdateEmployee />}
            ></Route>{" "}
          </Routes>
        </div>
        <FooterComp />
      </Router>
    </div>
  );
}

export default App;
