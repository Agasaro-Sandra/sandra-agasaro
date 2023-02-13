const express = require('express')
const app =  express()

app.get('/add', (req, res)=>{
    let n1 = 3;
    let n2 = 4;
    let sum = n1+n2;
    res.send(`Sum = ${sum}`);
    })

    app.get('/multiply', (req, res)=>{
        let n1 = [3,4,5,6,7,8];
        let product = 1;
        for(i=0; i<n1.length; i++){
             product = product * n1[i]
        }
        res.send(`Product = ${product}`);
        })

        app.listen(3000);

