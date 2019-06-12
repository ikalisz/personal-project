const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        //registering user in database as long as username does not exist
        const {username, password, firstname, lastname, phone, email, pic} = req.body
        const db = req.app.get('db')
        const result = await db.check_username({username})
        if (result[0]) return res.status(500).send('Username already taken')
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)
        const newUser = await db.register_user({username, password: hash, firstname, lastname, phone, email, pic})
        req.session.user = {
            firstname: newUser[0].firstname,
            lastname: newUser[0].lastname,
            username: newUser[0].username,
            phone: newUser[0].phone,
            email: newUser[0].email,
            id: newUser[0].user_id,
            pic: newUser[0].pic
        }
        return res.status(201).send(req.session.user)
    },
    login: async (req, res) => {
        //Checking username given by front end against database password
        const {username, password} = req.body
        const db = req.app.get('db')
        const result = await db.get_user({username})
        if (!result[0]) return res.status(404).send('User not found')
        if (!bcrypt.compareSync(password, result[0].password)) return res.status(401).send('Username or password incorrect')
        req.session.user = {
            firstname: result[0].firstname,
            lastname: result[0].lastname,
            username: result[0].username,
            phone: result[0].phone,
            email: result[0].email,
            id: result[0].user_id,
            pic: result[0].pic
        }
        return res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy()
        return res.status(200).send('Logged out')
    },
    getUser: async (req, res) => {
        const db = req.app.get('db')
        if (!req.session.user) {
            return res.status(401).send('Please login')
        } else {
            const {username} = req.session.user
            let result = await db.get_user({username})
            return res.status(200).send(result[0])
        }
    },
    checkUser: (req, res, next) => {
        if (!req.session.user) {
            return res.status(401).send('Do please login')
        } else {
            next()
        }
     }
}