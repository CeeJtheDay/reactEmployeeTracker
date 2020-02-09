const db = require("../models");
// import Employee from "../models/employee";


module.exports = function (app) {

    app.get("/", (req, res) => {
        console.log("get all employees");
        // console.log(res);
        db.Employee.find({})
            .then(dbEmployees => {
                // console.log(res);
                console.log(dbEmployees);
                res.json(dbEmployees);
            }).catch(err => {
                res.status(400).json(err);
            })

    });

    app.get('/:id', (req, res) => {
        let id = req.params.id;
        db.Employee.findById(id, (err, employee) => {
            res.json(employee);
        });
    });

    app.post("/add", (req, res) => {
        console.log("post route!");
        console.log(req.body);
        const Employee = new db.Employee(req.body);
        Employee.save()
            .then(employee => {
                res.status(200).json({ 'Employee': 'Employee added successfully' });
            })
            .catch(err => {
                res.status(400).send('adding new Employee failed');
        });

    });

    app.post('/update/:id', (req, res) => {
        db.Employee.findById(req.params.id)
        .then(employee => {
            if (!employee) {
                res.status(404).send("data is not found");
            } else {
                employee.employee_firstName = req.body.employee_firstName;
                employee.employee_lastName = req.body.employee_lastName;
                employee.employee_phone = req.body.employee_phone;
                employee.employee_email = req.body.employee_email;
                employee.employee_department = req.body.employee_department
    
                employee.save()
                .then(employee => {
                    res.json('Employee updated!');
                })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
            }
        }).catch(err => {
            res.status(400).send("Update not possible");
        });
    });

};