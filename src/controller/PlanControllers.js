const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class PlanControllers {
    async sendPlan(req, res) {
        const { class_id } = req.params
        const { description } = req.body

        if (!description) {
            throw new AppError("Escreva o plano de ensino da turma!")
        }

        await knex("plan").update({ description, plan_changes: null }).where({ class_id })

        return res.status(201).json()
    }

    async reviewPlan(req, res) {
        const { class_id } = req.params
        const { plan_status, plan_changes } = req.body

        if (plan_status) {
            await knex("plan").update({ plan_status, plan_changes: null }).where({ class_id })
        }
        else {
            await knex("plan").update({ plan_status, plan_changes, description: null }).where({ class_id })
        }

        return res.status(201).json()
    }
}

module.exports = PlanControllers