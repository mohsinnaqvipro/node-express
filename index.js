const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const morgan = require('morgan');

//Routers
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const hostName = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

const server = http.createServer(app);

server.listen(port, hostName, ()=>{
    console.log(`Server is running at http://${hostName}: ${port}`);
});