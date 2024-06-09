const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class StudentControllers {
    async create(req, res) {
        return res.json("teste")
    }
}

module.exports = StudentControllers