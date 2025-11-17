// const express = require("express") old version
import express from "express" // new method

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    const data = {
        name: "Shahin",
        location: "Faridpur"
    }
    res.status(200).json(data)
});

app.get("/users", (req, res) => {
    const data = [
        {
        id: "01",
        name: "Shahin",
        location: "Faridpur"
    },
    {
        id: "02",
        name: "Shahin 2",
        location: "Faridpur"
    }
    ]

    res.status(200).json(data)
});

app.post("/users", (req, res)=> {
    const {name, location} = req.body;
    if(!name) return res.status(400).json({message: "Name is required!"});
    if(!location) return res.status(400).json({message: "Location is required!"});

    const data = {
        name, location
    }
    res.status(201).json({message: "Your account is created!", data})
});


app.listen(8080, ()=>{
    console.log("App running at port http://localhost:8080")
})