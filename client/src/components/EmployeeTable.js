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
            <Link to={"/edit/" + props.employee._id}>Edit</Link>
        </td>
    </tr>
)

export default class EmployeeTable extends Component {

    constructor(props) {
        super(props);
        this.state = { employees: [] };
    }


    componentDidMount() {
        axios.get('/api/employees')
            .then(response => {
                this.setState({ employees: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleOnClick = (event) => {
        event.preventDefault();
        axios.get('/api/employees')
            .then(({ data }) => {
                let empArray = data;
                empArray.sort((a, b) => {
                    var nameA = a.employee_lastName.toLowerCase(), nameB = b.employee_lastName.toLowerCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                    
                });
                this.setState({ employees: empArray });

            }).catch((error) => {
                console.log(error);
            });
    };

    employeeList() {
        return this.state.employees.map(function (currentEmployee, i) {
            return <Employee employee={currentEmployee} key={i} />;
        })
    };

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
                        {this.employeeList()}
                    </tbody>
                </table>
                <button onClick={this.handleOnClick}>Sort By Name</button>
            </div>
        )
    }
}