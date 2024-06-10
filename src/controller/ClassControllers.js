const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class ClassControllers {
    async create(req, res) {
        const { time, classroom, teacher_id, discipline_id } = req.body

        if (!time) {
            throw new AppError("Defina um horário para a turma!")
        }
        if (!classroom) {
            throw new AppError("Defina uma sala para a turma!")
        }
        if (!teacher_id) {
            throw new AppError("Defina um professor para a turma!")
        }
        if (!discipline_id) {
            throw new AppError("Defina uma disciplina para a turma!")
        }

        await knex("class").insert({ time, classroom, teacher_id, discipline_id })

        return res.status(201).json()
    }
}

module.exports = ClassControllers