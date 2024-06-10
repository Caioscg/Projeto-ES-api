const { Router } = require("express")

const DisciplineControllers = require("../controller/DisciplineControllers")
const DisciplineController = new DisciplineControllers()

const disciplineRoutes = Router()

disciplineRoutes.post("/", DisciplineController.create)

module.exports = disciplineRoutes