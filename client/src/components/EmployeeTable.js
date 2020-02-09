import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Employee = props => (
    <tr>
        <td>{props.employee.employee_firstName} {props.employee.employee_lastName}</td>
        <td>{props.employee.employee_phone}</td>
        <td>{props.employee.employee_email}</td>
        <td>{props.employee.employee_department}</td>
        <td>
            <Link to={"/edit/"+props.employee._id}>Edit</Link>
        </td>
    </tr>
)

export default class EmployeeTable extends Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/')
            .then(response => {
                this.setState({ employees: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    employeeList() {
        return this.state.employees.map(function(currentEmployee, i){
            return <Employee employee={currentEmployee} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Employee List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.employeeList() }
                    </tbody>
                </table>
            </div>
        )
    }
}