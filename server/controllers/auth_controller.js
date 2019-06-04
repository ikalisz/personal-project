const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {username, password, firstname, lastname, phone, email, pic} = req.body
        const db = req.app.get('db')
        
    }
}