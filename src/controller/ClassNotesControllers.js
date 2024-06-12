const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class ClassNotesControllers {
    async create(req, res) {
        const { class_id } = req.params
        const { description } = req.body
        
        if (!description) {
            throw new AppError("Adicione um conteúdo à nota!")
        }

        await knex("notes").insert({ description, class_id })

        return res.status(201).json()
    }

    async show(req, res) {
        const { class_id } = req.params

        const notes = await knex("notes").where({ class_id })

        return res.json({ notes })
    }

    async review(req, res) {
        const { id } = req.params

        await knex("notes").update({ view: true }).where({ id })

        return res.status(201).json()
    }
}

module.exports = ClassNotesControllers