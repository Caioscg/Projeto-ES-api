const { Router } = require("express")

const ClassControllers = require("../controller/ClassControllers")
const ClassController = new ClassControllers()

const classRoutes = Router()

classRoutes.post("/", ClassController.create)
classRoutes.get("/:teacher_id", ClassController.show)
classRoutes.get("/:teacher_id/:id", ClassController.index)

module.exports = classRoutes