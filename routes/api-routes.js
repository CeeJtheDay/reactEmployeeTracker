const db = require("../models");


module.exports = function (app) {

    app.get("/", (req, res) => {
        console.log("get api/employees")
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

};