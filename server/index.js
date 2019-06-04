require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const session = require('express-session')
const auth_ctrl = require('./controllers/auth_controller')
const car_ctrl = require('./controllers/car_controller')
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
app.post('/auth/register', auth_ctrl.register)
app.post('/auth/login', auth_ctrl.login)
app.get('/auth/logout', auth_ctrl.logout)
app.post('/car/register', car_ctrl.registerCar)
app.get('/car/display', car_ctrl.getCars)
app.put('/car/update/:id', car_ctrl.updateCar)
app.delete('/car/mod/:id', car_ctrl.deleteCar)
app.post('/car/mod/:id', car_ctrl.createMod)
app.put('/car/mod/:id', car_ctrl.updateMod)