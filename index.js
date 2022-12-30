const express = require('express')
const bodyParser = require('body-parser')

const connectDb = require('./db.js')
const studentRoutes = require('./controllers/student.controller')

const app = express()

//middleware
app.use(bodyParser.json()) 
app.use('/api/Student', studentRoutes)

connectDb()
    .then(() => { 
      console.log('db connection succeeded.')
      app.listen(3000,()=>console.log('server started at 3000'))

    }).catch(err => console.log(err))
