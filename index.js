const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    res.json(
        [
            {
                id: 1,
                employee_name: "Sanchita",
                employee_salary: 7000000,
            },
            {
                id: 2,
                employee_name: "John",
                employee_salary: 600000,
            },
            {
                id: 3,
                employee_name: "Ruby",
                employee_salary: 80000,
            },
            {
                id: 4,
                employee_name: "Virat",
                employee_salary: 1500000,
            },
        ]
    )
})

app.listen(8000, () =>{
    console.log("App is running on port number 8000")
})