const db = require("../models");


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

    app.post("/add", (req, res) => {
        console.log("post route!");
        let Employee = new Employee(req.body);
        Employee.save()
            .then(employee => {
                res.status(200).json({ 'Employee': 'Employee added successfully' });
            })
            .catch(err => {
                res.status(400).send('adding new Employee failed');
        });

    });

};