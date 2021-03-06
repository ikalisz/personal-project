require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const session = require('express-session')
const auth_ctrl = require('./controllers/auth_controller')
const car_ctrl = require('./controllers/car_controller')
const repair_ctrl = require('./controllers/repair_controller')
const twilio_ctrl = require('./controllers/twilio_controller')
app.use(express.static(`${__dirname}/../build`))
app.use(express.static(`${__dirname}/../src/assests`))
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
app.get('/auth/logout', auth_ctrl.checkUser, auth_ctrl.logout)
app.get('/auth/user', auth_ctrl.getUser)
app.post('/car/register', auth_ctrl.checkUser,  car_ctrl.registerCar)
app.get('/car/display', auth_ctrl.checkUser, car_ctrl.getCars)
app.get('/car/:id', auth_ctrl.checkUser, car_ctrl.getCar)
app.put('/car/update/:id', auth_ctrl.checkUser, car_ctrl.updateCar)
app.delete('/car/:id', auth_ctrl.checkUser, car_ctrl.deleteCar)
app.post('/car/mod/:id', auth_ctrl.checkUser, car_ctrl.createMod)
app.put('/car/mod/:id', auth_ctrl.checkUser, car_ctrl.updateMod)
app.get('/repair/date', repair_ctrl.getDate)
app.get('/user/repairs', auth_ctrl.checkUser, repair_ctrl.getUserRepairs)
app.get('/user/repairs/pending', auth_ctrl.checkUser, repair_ctrl.getUserRepairsPending)
app.get('/user/repairs/accepted', auth_ctrl.checkUser, repair_ctrl.getUserRepairsAccepted)
app.get('/user/repairs/ongoing', auth_ctrl.checkUser, repair_ctrl.getUserRepairsOngoing)
app.get('/user/repairs/finished', auth_ctrl.checkUser, repair_ctrl.getUserRepairsFinished)
app.post('/repairs/:id', repair_ctrl.checkRepair, repair_ctrl.createRepair, twilio_ctrl.sendRepairText)
app.put('/repairs/total/:id', repair_ctrl.updateTotal)
app.put('/repairs/dateaccept/:id', repair_ctrl.updateDateAccepted)
app.put('/repairs/datestart/:id', repair_ctrl.updateDateStarted)
app.put('/repairs/datefin/:id', repair_ctrl.updateDateFinished, twilio_ctrl.sendFinishedText)
app.put('/repairs/status/:id', repair_ctrl.updateStatus)