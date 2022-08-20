const express = require('express');
const app = express();
const port = 3000;

// body parser 
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/', (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

app.post('/bmicalculator', (req, res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var result = weight / Math.pow(height, 2);
    res.send("Your BMI is " + result);
})

  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});