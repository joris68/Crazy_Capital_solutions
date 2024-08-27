const express = require('express')
const capm = require("./routes/capm.js");
const prev = require("./routes/prevPriced.js")

const app = express();
const port = Number(process.env.PORT) || 3000;
app.use(express.json());


app.use('/api/capm', capm);

app.use('/api/capm/prev',prev );

app.get('/', (req, res) => {
    res.send('Hello World');
})


app.listen(port, () => console.log(`listening on port ${port}!`))

process.on('uncaughtException', (err) => {
    console.log('We have an uncaught Exception: ' + err) ; 
})