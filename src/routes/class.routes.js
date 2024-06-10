const { Router } = require("express")

const ClassControllers = require("../controller/ClassControllers")
const ClassController = new ClassControllers()

const classRoutes = Router()

classRoutes.post("/", ClassController.create)

module.exports = classRoutes