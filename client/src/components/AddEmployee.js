import React, { Component } from "react";
import axios from "axios";

export default class AddEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employee_firstName: '',
            employee_lastName: '',
            employee_phone: '',
            employee_email: '',
            employee_department: ''
        }

        this.onChangeEmployeeFirstName = this.onChangeEmployeeFirstName.bind(this);
        this.onChangeEmployeeLastName = this.onChangeEmployeeLastName.bind(this);
        this.onChangeEmployeePhone = this.onChangeEmployeePhone.bind(this);
        this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);
        this.onChangeEmployeeDepartment = this.onChangeEmployeeDepartment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeEmployeeFirstName(e) {
        this.setState({
            employee_firstName: e.target.value
        });
    }

    onChangeEmployeeLastName(e) {
        this.setState({
            employee_lastName: e.target.value
        });
    }

    onChangeEmployeePhone(e) {
        this.setState({
            employee_phone: e.target.value
        });
    }

    onChangeEmployeeEmail(e) {
        this.setState({
            employee_email: e.target.value
        });
    }

    onChangeEmployeeDepartment(e) {
        this.setState({
            employee_department: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Employee Name: ${this.state.employee_firstName} ${this.state.employee_lastName}`);
        console.log(`Employee Phone: ${this.state.emplpoyee_phone}`);
        console.log(`Employee Email: ${this.state.employee_email}`);
        console.log(`Employee Department: ${this.state.employee_department}`);

        const newEmployee = {
            employee_firstName: this.state.employee_firstName,
            employee_lastName: this.state.employee_lastName ,
            employee_phone: this.state.employee_phone,
            employee_email: this.state.employee_email,
            employee_department: this.state.employee_department
        }

        axios.post('/api/employees', newEmployee)
            .then(res => console.log(res.data));
        
        this.setState({
            employee_firstName: '',
            employee_lastName: '',
            employee_phone: '',
            employee_email: '',
            employee_department: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Employee</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Fiist Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.employee_firstName}
                                onChange={this.onChangeEmployeeFirstName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.employee_lastName}
                                onChange={this.onChangeEmployeeLastName}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Phone Number: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.employee_phone}
                                onChange={this.onChangeEmployeePhone}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.employee_email}
                                onChange={this.onChangeEmployeeEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Department: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.employee_department}
                                onChange={this.onChangeEmployeeDepartment}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Employee" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}