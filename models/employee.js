const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
    employee_firstName: {
        type: String
    },
    employee_lastName: {
        type: String
    },
    employee_phone: {
        type: String
    },
    employee_email: {
        type: String
    },
    employee_department: {
        type: String
    }
});

module.exports = mongoose.model('Employee', Employee);