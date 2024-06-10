const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class SemesterControllers {
    async create(req, res) {
        const { begin_date, end_date } = req.body

        if (!begin_date) {
            throw new AppError("A data do inicio do semestre é obrigatória!")
        }
        if (!end_date) {
            throw new AppError("A data do fim do semestre é obrigatória!")
        }

        await knex("semester").insert({ begin_date, end_date, status: true })

        return res.status(201).json()
    }

    async update(req, res) {
        const { notes } = req.body

        await knex("semester").update({ notes, status: false })

        return res.status(201).json()
    }
}

module.exports = SemesterControllers