const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://admin:12345@cluster0.uxfvh.mongodb.net/student_db?retryWrites=true&w=majority'

mongoose.set('strictQuery',false)

module.exports = () => 
{
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}
