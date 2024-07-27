const { Router } = require("express")

const ClassControllers = require("../controller/ClassControllers")
const ClassController = new ClassControllers()

const classRoutes = Router()

classRoutes.post("/", ClassController.create)
classRoutes.get("/", ClassController.showAll)
classRoutes.get("/:teacher_id", ClassController.show)
classRoutes.get("/details/:id", ClassController.index)

module.exports = classRoutes