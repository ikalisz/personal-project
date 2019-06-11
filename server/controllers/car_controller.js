module.exports = {
    registerCar: async (req, res) => {
        const {miles, year, make, model, img} = req.body
        const {user} = req.session
        const db = req.app.get('db')
        await db.register_car({year, make, model, img, user_id: user.id, miles})
        let result = await db.get_user_cars({user_id: user.id})
        await db.create_mod({mod: 'Stock', car_id: result[result.length - 1].car_id})
        return res.status(201).send('Car registered!')
    },
    getCars: async (req, res) => {
        console.log('Here')
        const {user} = req.session
        const db = req.app.get('db')
        const result = await db.get_cars({user_id: user.id})
        console.log(result)
        return res.status(200).send(result)
    },
    updateCar: async (req, res) => {
        const db = req.app.get('db')
        const {year, make, miles, img} = req.body
        const {id} = req.params
        if (!id) return res.status(400).send('Error there is no car_id')
        const result = await db.update_car({year, make, miles, img, car_id: id})
        return res.status(200).send(result[0])
    },
    deleteCar: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        if (!id) return res.status(400).send('Error there is no id')
        await db.remove_car({car_id: id})
        res.status(200).send('Car removed.')
    },
    createMod: async (req, res) => {
        const db = req.app.get('db')
        const {mod} = req.body
        const {id} = req.params
        if (!id) return res.status(400).send('Error, there is no id')
        await db.create_mod({mod, car_id: id})
    },
    updateMod: async (req, res) => {
        const db = req.app.get('db')
        const {mod} = req.body
        const {id} = req.params
        if (!id) return res.status(400).send('Error, there is no id')
        await db.update_mod({mod, mod_id: id})
    }
}