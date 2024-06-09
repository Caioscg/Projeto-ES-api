const { Router } = require("express")

const StudentControllers = require("../controller/StudentControllers")
const StudentController = new StudentControllers()

const studentRoutes = Router()

studentRoutes.get("/", StudentController.create)

module.exports = studentRoutes