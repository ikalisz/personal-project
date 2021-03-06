require('dotenv').config()
const {TWILIO_SID, TWILIO_TOKEN, TWILIO_PHONE} = process.env
const client = require('twilio')(TWILIO_SID, TWILIO_TOKEN)

module.exports = {
    sendRepairText: async (req, res) => {
        const {date, carYear, carMake, carModel} = req.body
        let splitDate = date.split('-')
        let year = splitDate.shift()
        splitDate.push(year)
        let correctDate = splitDate.join('-')
        client.messages.create({
            body: `Your repair for your ${carYear} ${carMake} ${carModel} was submitted on ${correctDate}`,
            to: `+1${req.session.user.phone}`,
            from: TWILIO_PHONE
        })
        return res.status(200).send('Text send')
    },
    sendFinishedText: async (req, res) => {
        const {carYear, carMake, carModel, phone} = req.body
        console.log('Here')
        console.log(req.body)
        client.messages.create({
            body: `Your ${carYear} ${carMake} ${carModel} is ready to pick up!`,
            to: `+1${phone}`,
            from: TWILIO_PHONE
        })
        return res.status(200).send('Text send')
    }
}