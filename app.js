// login Andrew
// password 
// link mongodb+srv://Andrew:SbWl49o10joNIlEY@cluster0.9wmzw.mongodb.net/contactList?retryWrites=true&w=majority
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('<h2>Home page</h2>')
})

const DB_HOST = 'mongodb+srv://Andrew:SbWl49o10joNIlEY@cluster0.9wmzw.mongodb.net/contactList?retryWrites=true&w=majority'
mongoose.connect(DB_HOST)
    .then(() => {
        app.listen(3000)
    })
    .catch(error => {
        console.log(error.message)
        process.exit(1)
    })
