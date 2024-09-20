/********************************************************************************
* WEB322 – Assignment 02
* 
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
* 
* https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
* 
* Name: Vatsal Tejas Ghael Student ID: 151749223 Date: 20-09-2024
*
********************************************************************************/


const express = require('express'); 
const A2 = express(); 
const legoData = require("./modules/legoSets");
const HTTP_PORT = process.env.PORT || 3000; 

legoData.initialize()
    .then(() => {
        A2.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));
    })
    .catch(err => {
        console.log(err.message);
    })

A2.get('/', (req, res) => {
    res.send('Assignment 2: Vatsal Ghael - 151749223')
});
A2.get('/lego/sets', (req, res) => {
    legoData.getAllSets()
        .then(data => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err.message);
        });
});
A2.get('/lego/sets/num-demo', (req, res) => {
    legoData.getSetByNum(371)
        .then(data => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err.message);
        });
});
A2.get('/lego/sets/theme-demo', (req, res) => {
    legoData.getSetsByTheme('technic')
        .then(data => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err.message);
        });
});