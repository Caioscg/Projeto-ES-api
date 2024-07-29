const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class PlanControllers {
    async sendPlan(req, res) {
        const { class_id } = req.params
        const { description } = req.body

        if (!description) {
            throw new AppError("Escreva o plano de ensino da turma!")
        }

        await knex("plan").update({ description, plan_changes: null, plan_status: 0 }).where({ class_id })

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

    async index(req, res) {
        const { id } = req.params

        const plan = await knex("plan").where({ id })

        return res.json({ plan })
    }

    async show(req, res) {
        const plans = await knex("plan").where({ plan_status: 0 })

        return res.json({ plans })
    }
}

module.exports = PlanControllers