const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class CourseControllers {
    async create(req, res) {
        const { name } = req.body

        if (!name) {
            throw new AppError("O nome é obrigatório!")
        }

        await knex("course").insert({ name })

        return res.status(201).json()
    }

    async update(req, res) {
        const { id } = req.params
        const { teacher_id } = req.body

        if (!teacher_id) {
            throw new AppError("Adicione um professor!")
        }

        await knex("course").update({ teacher_id }).where({ id })

        return res.status(201).json()
    }
}

module.exports = CourseControllers