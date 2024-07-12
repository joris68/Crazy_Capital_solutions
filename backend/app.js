const express = require('express');
const {loginUser} = require('./routes/login');
const {registerUser} = require('./routes/register');
const app = express();
const port = 9000;
app.use(express.json());


app.get("/", (req, res) => {
    console.log("Processing a get Request");
    res.end("Hello World");

});

app.post("/checkusername", (req, res) => {
    
})

app.post("/registeruser", (req, res) => {
    registerUser(req, res);
});

app.post("/loginuser", (req, res) => {
    loginUser(req, res);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))