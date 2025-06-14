const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/employee");

app.post("/login", (req, res) => {
    const{email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) { 
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("The password is incorrect")
            }
        } else {
            res.json("No record Existed")
        }
    })
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employyees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})   