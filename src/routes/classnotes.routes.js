const { Router } = require("express")

const ClassNotesControllers = require("../controller/ClassNotesControllers")
const ClassNotesController = new ClassNotesControllers()

const classNotesRoutes = Router()

classNotesRoutes.post("/:class_id", ClassNotesController.create)
classNotesRoutes.get("/:class_id", ClassNotesController.show)
classNotesRoutes.patch("/:id", ClassNotesController.review)

module.exports = classNotesRoutes