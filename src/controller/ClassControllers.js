const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class ClassControllers {
    async create(req, res) {
        const { time, classroom, teacher, discipline } = req.body

        if (!time) {
            throw new AppError("Defina um horário para a turma!")
        }
        if (!classroom) {
            throw new AppError("Defina uma sala para a turma!")
        }
        if (!teacher) {
            throw new AppError("Defina um professor para a turma!")
        }
        if (!discipline) {
            throw new AppError("Defina uma disciplina para a turma!")
        }

        const [ class_id ] = await knex("class").insert({ time, classroom, teacher, discipline })

        await knex("plan").insert({ class_id })

        return res.status(201).json()
    }

    async showAll(req, res) {
        const classes = await knex("class")

        return res.json({ classes })
    }

    async show(req, res) {
        const { teacher_id } = req.params

        const [ teacher ] = await knex("teacher").where({ id: teacher_id })

        const classes = await knex("class").where({ teacher: teacher.name })

        return res.json({ classes })
    }

    async index(req, res) {
        const { id, teacher_id } = req.params

        const classe = await knex("class").where({ id, teacher_id })

        return res.json({ classe })
    }
}

module.exports = ClassControllers