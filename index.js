const express = require('express');
const bodyParser = require('body-parser');
const db = require('./app/config/db');

// import routes 
const userRoute = require('./app/routes/user.routes');
const StatusRoute = require('./app/routes/status.routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Express MVC');
});

// User 
app.use('/users', userRoute);

// Status 
app.use('/status',StatusRoute);


const port = 3000;
app.listen(port, () => console.log(`Server Running on PORT : ${port} `));