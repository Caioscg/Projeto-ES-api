const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class TeacherControllers {
    async create(req, res) {
        const { name, login  } = req.body

        if (!name) {
            throw new AppError("O nome é obrigatório!")
        }
        if (!login) {
            throw new AppError("O login é obrigatório!")
        }

        await knex("teacher").insert({ name, login })

        return res.status(201).json()
    }
}

module.exports = TeacherControllers