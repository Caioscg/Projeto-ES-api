const { Router } = require("express")

const ClassNotesControllers = require("../controller/ClassNotesControllers")
const ClassNotesController = new ClassNotesControllers()

const classNotesRoutes = Router()

classNotesRoutes.post("/:class_id", ClassNotesController.create)

module.exports = classNotesRoutes