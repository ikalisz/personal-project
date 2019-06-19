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
    updateDateAccepted: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {date_accept} = req.body
        await db.update_repair_date_accept({repair_id: id, date_accept})
        return res.status(200).send('Date updated')
    },
    updateDateStarted: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {date_start} = req.body
        await db.update_repair_date_start({repair_id: id, date_start})
        return res.status(200).send('Date updated')
    },
    updateDateFinished: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {date_finished} = req.body
        await db.update_repair_date_finished({repair_id: id, date_finished})
    },
    getDate: async (req, res) => {
        const db = req.app.get('db')
        let date = await db.get_date()
        return res.status(200).send(date)
    },
    checkRepair: async (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params
        const result = await db.check_repair({car_id: id})
        if (result[0]) {
            return res.status(400).send('You already have a repair')
        } else {
            next()
        }
    },
    getUserRepairs: async (req, res) => {
        const db = req.app.get('db')
        const result = await db.get_user_repairs({user_id: req.session.user.id})
        res.status(200).send(result)
    },
    getUserRepairsPending: async (req, res) => {
        const db = req.app.get('db')
        if (req.session.user.username === 'admin') {
            const result = await db.get_repair_pending_admin()
            console.log(result)
            res.status(200).send(result)
        } else {
            const result = await db.get_user_repairs_pending({user_id: req.session.user.id})
            res.status(200).send(result)
        }
    },
    getUserRepairsAccepted: async (req, res) => {
        const db = req.app.get('db')
        if (req.session.user.username === 'admin') {
            const result = await db.get_repair_accepted_admin()
            res.status(200).send(result)
        } else {
            const result = await db.get_user_repairs_accepted({user_id: req.session.user.id})
            res.status(200).send(result)
        }
    },
    getUserRepairsOngoing: async (req, res) => {
        const db = req.app.get('db')
        if (req.session.user.username === 'admin') {
            const result = await db.get_repair_ongoing_admin()
            res.status(200).send(result)
        } else {
            const result = await db.get_user_repairs_ongoing({user_id: req.session.user.id})
            res.status(200).send(result)
        }
    },
    getUserRepairsFinished: async (req, res) => {
        const db = req.app.get('db')
        if (req.session.user.username === 'admin') {
            const result = await db.get_repair_finished_admin()
            res.status(200).send(result)
        } else {
            const result = await db.get_user_repairs_finished({user_id: req.session.user.id})
            res.status(200).send(result)
        }
    }
}