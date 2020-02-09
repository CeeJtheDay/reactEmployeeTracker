let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:Password1@ds033767.mlab.com:33767/heroku_vd5fdbf6", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let employeeSeed = [
    {
        employee_firstName: "John",
        employee_lastName: "Johnson",
        employee_phone: "(253) 111-1234",
        employee_email: "john@johnson.com",
        employee_department: "Development"
    },
    {
        employee_firstName: "Tedd",
        employee_lastName: "Tedderson",
        employee_phone: "(206) 111-1111",
        employee_email: "tedd@tedderson.com",
        employee_department: "Management"
    },
    {
        employee_firstName: "Frank",
        employee_lastName: "Franklin",
        employee_phone: "(425) 111-4321",
        employee_email: "frank@franklin.com",
        employee_department: "Human Resources"
    },
    {
        employee_firstName: "Sally",
        employee_lastName: "Sallyson",
        employee_phone: "(718) 222-2345",
        employee_email: "sally@sallyson.com",
        employee_department: "Management"
    },
    {
        employee_firstName: "Trudy",
        employee_lastName: "Trudier",
        employee_phone: "(253) 444-5678",
        employee_email: "trudy@trudier.com",
        employee_department: "Human Resources"
    }
  ];
  
  db.Employee.deleteMany({})
    .then(() => db.Employee.collection.insertMany(employeeSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });