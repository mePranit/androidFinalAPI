const express = require('express');
const bodyParser = require('body-parser');
require('./Database/mongoose')
const cors = require('cors')


//require('./db/mongoose')
const users = require('./Models/users') 

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })); 


const userRouter = require('./Routers/users')
app.use(userRouter)


const showRouter = require('./Routers/shows')
app.use(showRouter)


app.listen(3000, function(){
});