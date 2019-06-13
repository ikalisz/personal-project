module.exports = {
    createRepair: async (req, res, next) => {
        const db = req.app.get('db')
        const {user} = req.session
        const {id} = req.params
        const {fix, fixCategory, date} = req.body
        console.log(`fix: ${fix}, fixCategory: ${fixCategory}`)
        await db.create_repair({car_id: id, user_id: user.id, fix, fix_category: fixCategory, date_submitted: date, date_finished: date, date_start: date, total: 0, status: 'Pending'})
        return next()
    },
    updateStatus: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {status} = req.body
        await db.update_repair_status({repair_id: id, status})
        return res.status(200).send('Status updated')
    },
    updateTotal: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {total} = req.body
        await db.update_repair_total({repair_id: id, total})
        return res.status(200).send('Total updated')
    },
    updateDateSubmitted: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {date_submitted} = req.body
        await db.update_date_submitted({repair_id: id, date_submitted})
        return res.status(200).send('Date updated')
    },
    updateDateStarted: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {date_start} = req.body
        await db.update_date_start({repair_id: id, date_start})
        return res.status(200).send('Date updated')
    },
    updateDateFinished: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {date_finished} = req.body
        await db.update_date_finished({repair_id: id, date_finished})
    },
    getDate: async (req, res) => {
        const db = req.app.get('db')
        let date = await db.get_date()
        return res.status(200).send(date)
    },
    checkRepair: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const result = await db.check_repair({car_id: id})
        if (result[0]) {
            return res.status(400).send('You already have a repair')
        }
    }
}