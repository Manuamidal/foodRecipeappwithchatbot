const exprees = require('express');
const app = exprees();
const dotenv = require('dotenv').config()
const connectDB = require('./config/connectionDB');
const cors = require('cors');

const PORT = process.env.PORT || 3000
connectDB();  
app.use(exprees.json());
app.use(exprees.static('public'))
app.use(cors());
app.use('/',require('./routes/user'))

app.use('/recipes',require('./routes/recipe'))
app.listen(PORT,(err)=>{
    console.log( `Server is running on port ${PORT}`)
})