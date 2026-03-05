const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    res.json(
        [
            {
                id: 1,
                employee_name: "Sanchita Bhoy",
                employee_salary: 7000000,
            },
            {
                id: 2,
                employee_name: "John Marty",
                employee_salary: 600000,
            },
            {
                id: 3,
                employee_name: "Ruby D' Suza",
                employee_salary: 80000,
            },
            {
                id: 4,
                employee_name: "Virat Kohli",
                employee_salary: 1500000,
            },
        ]
    )
})

app.listen(8000, () =>{
    console.log("App is running on port number 8000")
})

