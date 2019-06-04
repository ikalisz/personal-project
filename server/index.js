require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const session = require('express-session')
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))
massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    console.log('DB connected')
})

app.listen(SERVER_PORT, () => {
    console.log(`Working on port ${SERVER_PORT}`)
})