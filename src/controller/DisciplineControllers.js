const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class DisciplineControllers {
    async create(req, res) {
        const { name  } = req.body

        if (!name) {
            throw new AppError("O nome é obrigatório!")
        }

        await knex("discipline").insert({ name })

        return res.status(201).json()
    }
}

module.exports = DisciplineControllers