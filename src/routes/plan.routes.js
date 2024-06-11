const { Router } = require("express")

const PlanControllers = require("../controller/PlanControllers")
const PlanController = new PlanControllers()

const planRoutes = Router()

planRoutes.patch("/:class_id", PlanController.sendPlan)
planRoutes.put("/:class_id", PlanController.reviewPlan)

module.exports = planRoutes