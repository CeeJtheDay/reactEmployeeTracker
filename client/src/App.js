import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import EmployeeTable from "./components/EmployeeTable.js";
import AddEmployee from "./components/AddEmployee.js";
import EditEmployee from "./components/EditEmployee.js";
import AlphabetizeEmployee from "./components/AlphabetButton.js/index.js";

import employee from "./images/employee.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="./images/employee.png" target="_blank">
              <img src={employee} width="30" height="30" alt="" />
            </a>
            <Link to="/" className="navbar-brand">Employee Tracker</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">View Employees</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/add" className="nav-link">Add an Employee</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
        <Switch>
          <Route path="/" exact component={EmployeeTable} />
          <Route path="/edit/:id" component={EditEmployee} />
          <Route path="/add" component={AddEmployee} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
