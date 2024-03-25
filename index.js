const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3200
const usersRoutes = require('./routes/User')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Arunkalavathi007:Arunkalavathi007@cluster0.4h2nvzl.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})



app.use(cors())

app.use(bodyParser.json())
app.use('/api', usersRoutes)



app.listen(PORT, ()=>{
    console.log('server is started at ' + PORT)
})