const AppError = require("../utils/AppError")
const knex = require("../database/knex")
const { hash } = require("bcryptjs")

class ViceDirectorControllers {
    async create(req, res) {
        const { name, password, login, status } = req.body

        if (!name) {
            throw new AppError("O nome é obrigatório!")
        }
        if (!login) {
            throw new AppError("O login é obrigatório!")
        }
        if (!password) {
            throw new AppError("A senha é obrigatória!")
        }

        const [ checkIfLoginExists ] = await knex("student").where({ login })
        const [ checkIfLoginExists1 ] = await knex("vicedirector").where({ login })
        const [ checkIfLoginExists2 ] = await knex("teacher").where({ login })

        if (checkIfLoginExists || checkIfLoginExists1 || checkIfLoginExists2) {
            throw new AppError("Este login já está em uso!")
        }

        const hashedPassword = await hash(password, 8)

        await knex("vicedirector").insert({ name, login, password: hashedPassword, status })

        return res.status(201).json()
    }
}

module.exports = ViceDirectorControllers