module.exports = {
    registerCar: async (req, res) => {
        const {miles, year, make, model, img} = req.body
        const {user} = req.session
        const db = req.app.get('db')
        
    }
}